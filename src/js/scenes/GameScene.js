/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * GameScene: Mecánica Principal de Curaduría con Drag & Drop en Phaser 3
 * Rediseño Profesional de Museo: Cero Emojis, HUD Sobrio y Vitrinas con Cristal
 */

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init() {
    this.score = 0;
    this.lives = 3;
    this.maxLives = 3;
    this.timeLeft = 60;
    this.restoredCount = 0;
    this.totalArtifacts = 12;
    this.isGameOver = false;

    // Barajado aleatorio Fisher-Yates
    this.artifactQueue = this.shuffleArray([...window.COLOMBIAN_HERITAGE_DATA]);
    this.currentArtifactIndex = 0;
    this.currentArtifactData = null;
    this.activeArtifactSprite = null;

    // Repisas de exhibición: 4 slots alineados sobre la repisa de madera
    this.roomSlots = {
      precolombino: [
        { dx: -60, dy: 10 }, { dx: -20, dy: 10 },
        { dx: 20, dy: 10 },  { dx: 60, dy: 10 }
      ],
      independencia: [
        { dx: -60, dy: 10 }, { dx: -20, dy: 10 },
        { dx: 20, dy: 10 },  { dx: 60, dy: 10 }
      ],
      patrimonio_vivo: [
        { dx: -60, dy: 10 }, { dx: -20, dy: 10 },
        { dx: 20, dy: 10 },  { dx: 60, dy: 10 }
      ]
    };
    this.placedCountByRoom = { precolombino: 0, independencia: 0, patrimonio_vivo: 0 };
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.cameras.main.fadeIn(400, 17, 13, 11);

    this.createMuseumEnvironment(width, height);
    this.dropZones = {};
    this.setupDropZones();
    this.setupRestorationTray();
    this.setupHUD();
    this.setupDragAndDropEvents();

    this.timerEvent = this.time.addEvent({
      delay: 1000,
      callback: this.onTimerTick,
      callbackScope: this,
      loop: true
    });

    this.spawnNextArtifact();
  }

  // ========================================================
  // ESCENOGRAFÍA DE FONDO
  // ========================================================
  createMuseumEnvironment(w, h) {
    const bg = this.add.graphics();
    bg.fillStyle(0x130e0c, 1).fillRect(0, 0, w, h);

    // Muros oscuros con sutil moldura
    bg.fillStyle(0x1a130f, 1).fillRect(0, 0, w, 54);
    bg.lineStyle(1, 0xf59e0b, 0.4).lineBetween(0, 54, w, 54);

    // Suelo de museo
    bg.fillStyle(0x1a120e, 1).fillRect(0, 360, w, 180);
    bg.lineStyle(1, 0x3d271d, 0.5).lineBetween(0, 360, w, 360);
  }

  // ========================================================
  // CONFIGURACIÓN DE LAS 3 VITRINAS DE MUSEO
  // ========================================================
  setupDropZones() {
    const rooms = window.MUSEUM_ROOMS;

    Object.values(rooms).forEach(room => {
      // Clave exacta de textura asegurada en config.js
      const textureKey = room.textureKey || `pedestal_${room.id}`;
      const pedestal = this.add.image(room.x, room.y, textureKey).setDepth(1);

      // Etiqueta superior formal de la sala
      this.add.text(room.x, room.y - 105, room.title, {
        fontFamily: 'Cinzel, Georgia, serif',
        fontSize: '11px',
        fontStyle: 'bold',
        color: room.badgeColor,
        letterSpacing: 1
      }).setOrigin(0.5).setDepth(2);

      this.add.text(room.x, room.y - 92, room.subtitle, {
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: '9px',
        color: '#94a3b8'
      }).setOrigin(0.5).setDepth(2);

      // Drop Zone interactiva
      const zone = this.add.zone(room.x, room.y + 15, room.width - 20, room.height - 70);
      zone.setRectangleDropZone(room.width - 20, room.height - 70);
      zone.setData('era', room.id);
      zone.setData('title', room.title);

      // Borde de feedback visual sutil
      const highlight = this.add.graphics();
      highlight.lineStyle(2, room.borderColor, 0);
      highlight.strokeRoundedRect(room.x - room.width / 2 + 8, room.y - room.height / 2 + 48, room.width - 16, room.height - 65, 8);
      highlight.setDepth(5);
      zone.setData('highlight', highlight);

      this.dropZones[room.id] = zone;
    });
  }

  // ========================================================
  // BANDEJA INFERIOR DE CURADURÍA LIMPIA
  // ========================================================
  setupRestorationTray() {
    this.add.image(480, 465, 'tray_bg').setDepth(10);

    this.artifactOriginX = 220;
    this.artifactOriginY = 465;

    // Base del pedestal de examen
    const slotBase = this.add.graphics();
    slotBase.fillStyle(0x0f0b09, 0.9).fillCircle(this.artifactOriginX, this.artifactOriginY, 42);
    slotBase.lineStyle(1, 0xf59e0b, 0.45).strokeCircle(this.artifactOriginX, this.artifactOriginY, 42);
    slotBase.setDepth(11);

    // Contenedor de la Ficha Técnica Didáctica
    this.cardContainer = this.add.container(295, 424).setDepth(12);

    // Nombre de la pieza en mayúsculas doradas
    this.cardTitle = this.add.text(0, 0, 'CARGANDO RELIQUIA...', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '15px',
      fontStyle: 'bold',
      color: '#fbbf24',
      letterSpacing: 1
    });

    // Píldora de ubicación discreta
    this.cardRegion = this.add.text(0, 22, '', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#94a3b8',
      fontStyle: 'bold'
    });

    // Pista corta y directa
    this.cardDescription = this.add.text(0, 42, '', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#e2e8f0',
      wordWrap: { width: 380 },
      lineSpacing: 2
    });

    this.cardContainer.add([this.cardTitle, this.cardRegion, this.cardDescription]);

    // Botón sobrio: [ PISTA HISTÓRICA ]
    this.btnHint = this.add.container(740, 465).setDepth(13);
    const btnHintBg = this.add.graphics();
    btnHintBg.fillStyle(0x1f1714, 0.95).fillRoundedRect(-55, -18, 110, 36, 6);
    btnHintBg.lineStyle(1, 0xf59e0b, 0.6).strokeRoundedRect(-55, -18, 110, 36, 6);
    const btnHintTxt = this.add.text(0, 0, 'PISTA HISTÓRICA', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '10px',
      fontStyle: 'bold',
      color: '#fbbf24',
      letterSpacing: 0.5
    }).setOrigin(0.5);

    this.btnHint.add([btnHintBg, btnHintTxt]);
    this.btnHint.setSize(110, 36);
    this.btnHint.setInteractive({ useHandCursor: true });
    this.btnHint.on('pointerdown', () => {
      window.SoundEffects.playClick();
      if (this.currentArtifactData) {
        this.showPedagogicalHintModal(this.currentArtifactData);
      }
    });
  }

  // ========================================================
  // HUD SUPERIOR PROFESIONAL (CERO EMOJIS)
  // ========================================================
  setupHUD() {
    const hudY = 27;

    // Caja 1: Tiempo
    this.createHudBox(110, hudY, 150, 34);
    this.clockText = this.add.text(110, hudY, 'TIEMPO: 60s', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '12px',
      fontStyle: 'bold',
      color: '#f8fafc',
      letterSpacing: 1
    }).setOrigin(0.5).setDepth(20);

    // Caja 2: Puntos
    this.createHudBox(320, hudY, 170, 34);
    this.scoreText = this.add.text(320, hudY, 'PUNTOS: 000 PTS', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '13px',
      fontStyle: 'bold',
      color: '#fbbf24',
      letterSpacing: 1
    }).setOrigin(0.5).setDepth(20);

    // Caja 3: Progreso de Reliquias
    this.createHudBox(550, hudY, 180, 34);
    this.progressText = this.add.text(550, hudY, 'RELIQUIAS: 0 / 12', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '12px',
      fontStyle: 'bold',
      color: '#cbd5e1',
      letterSpacing: 1
    }).setOrigin(0.5).setDepth(20);

    // Caja 4: Vidas (Lupas Vectoriales)
    this.createHudBox(800, hudY, 170, 34);
    this.add.text(745, hudY, 'VIDAS:', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      fontStyle: 'bold',
      color: '#94a3b8',
      letterSpacing: 1
    }).setOrigin(0.5).setDepth(20);

    this.livesContainer = this.add.container(780, hudY).setDepth(20);
    this.lupaSprites = [];
    for (let i = 0; i < this.maxLives; i++) {
      const lupa = this.add.image(i * 26 + 12, 0, 'icon_lupa').setScale(0.85);
      this.livesContainer.add(lupa);
      this.lupaSprites.push(lupa);
    }
  }

  createHudBox(x, y, w, h) {
    const box = this.add.graphics();
    box.fillStyle(0x130e0c, 0.85);
    box.fillRoundedRect(x - w / 2, y - h / 2, w, h, 6);
    box.lineStyle(1, 0xf59e0b, 0.3);
    box.strokeRoundedRect(x - w / 2, y - h / 2, w, h, 6);
    box.setDepth(18);
    return box;
  }

  // ========================================================
  // SISTEMA DE EVENTOS DRAG & DROP NATIVO
  // ========================================================
  setupDragAndDropEvents() {
    this.input.on('dragstart', (pointer, gameObject) => {
      if (this.isGameOver) return;
      window.SoundEffects.playClick();
      gameObject.setScale(1.18);
      gameObject.setDepth(200);

      Object.values(this.dropZones).forEach(zone => {
        const hl = zone.getData('highlight');
        hl.clear();
        hl.lineStyle(1.5, 0xf59e0b, 0.5);
        hl.strokeRoundedRect(zone.x - zone.width / 2 + 8, zone.y - zone.height / 2 + 48, zone.width - 16, zone.height - 65, 8);
      });
    });

    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      if (this.isGameOver) return;
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on('dragenter', (pointer, gameObject, targetDropZone) => {
      const hl = targetDropZone.getData('highlight');
      hl.clear();
      hl.lineStyle(2, 0xfbbf24, 0.9);
      hl.fillStyle(0xfbbf24, 0.08);
      hl.fillRoundedRect(targetDropZone.x - targetDropZone.width / 2 + 8, targetDropZone.y - targetDropZone.height / 2 + 48, targetDropZone.width - 16, targetDropZone.height - 65, 8);
      hl.strokeRoundedRect(targetDropZone.x - targetDropZone.width / 2 + 8, targetDropZone.y - targetDropZone.height / 2 + 48, targetDropZone.width - 16, targetDropZone.height - 65, 8);
    });

    this.input.on('dragleave', (pointer, gameObject, targetDropZone) => {
      const hl = targetDropZone.getData('highlight');
      hl.clear();
      hl.lineStyle(1.5, 0xf59e0b, 0.5);
      hl.strokeRoundedRect(targetDropZone.x - targetDropZone.width / 2 + 8, targetDropZone.y - targetDropZone.height / 2 + 48, targetDropZone.width - 16, targetDropZone.height - 65, 8);
    });

    this.input.on('drop', (pointer, gameObject, targetDropZone) => {
      if (this.isGameOver) return;
      gameObject.setData('dropped', true);
      this.clearDropZoneHighlights();

      const artifact = gameObject.getData('artifactData');
      const targetEra = targetDropZone.getData('era');

      if (artifact.era === targetEra) {
        this.handleCorrectMatch(gameObject, targetDropZone, artifact);
      } else {
        this.handleIncorrectMatch(gameObject, targetDropZone, artifact);
      }
    });

    this.input.on('dragend', (pointer, gameObject, dropped) => {
      if (this.isGameOver) return;
      this.clearDropZoneHighlights();

      if (!gameObject.getData('dropped')) {
        window.SoundEffects.playClick();
        this.tweens.add({
          targets: gameObject,
          x: gameObject.getData('startX'),
          y: gameObject.getData('startY'),
          scaleX: 1.0,
          scaleY: 1.0,
          duration: 300,
          ease: 'Back.easeOut',
          onComplete: () => {
            gameObject.setDepth(15);
          }
        });
      }
    });
  }

  clearDropZoneHighlights() {
    Object.values(this.dropZones).forEach(zone => {
      const hl = zone.getData('highlight');
      if (hl) hl.clear();
    });
  }

  handleCorrectMatch(gameObject, targetDropZone, artifact) {
    window.SoundEffects.playSuccess();
    this.score += 100;
    this.restoredCount++;
    this.updateHUD();

    this.showFloatingText(gameObject.x, gameObject.y - 20, '+100 PTS', '#34d399');
    this.emitSuccessParticles(targetDropZone.x, targetDropZone.y);

    const era = artifact.era;
    const slotIdx = this.placedCountByRoom[era] % 4;
    this.placedCountByRoom[era]++;

    // Ubicación fija sobre la repisa de madera
    const slotOffset = this.roomSlots[era][slotIdx];
    const targetX = targetDropZone.x + slotOffset.dx;
    const targetY = targetDropZone.y + slotOffset.dy;

    gameObject.disableInteractive();

    this.tweens.add({
      targets: gameObject,
      x: targetX,
      y: targetY,
      scaleX: 0.52,
      scaleY: 0.52,
      duration: 380,
      ease: 'Power2.easeOut',
      onComplete: () => {
        gameObject.setDepth(6);
      }
    });

    if (this.restoredCount >= this.totalArtifacts) {
      this.time.delayedCall(800, () => this.endGame(true, 'victory'));
    } else {
      this.time.delayedCall(450, () => this.spawnNextArtifact());
    }
  }

  handleIncorrectMatch(gameObject, targetDropZone, artifact) {
    window.SoundEffects.playError();
    this.score = Math.max(0, this.score - 25);
    this.lives--;
    this.updateHUD();

    this.showFloatingText(gameObject.x, gameObject.y - 20, '-25 PTS', '#f87171');
    this.cameras.main.shake(220, 0.005);

    gameObject.setData('dropped', false);
    this.tweens.add({
      targets: gameObject,
      x: gameObject.getData('startX'),
      y: gameObject.getData('startY'),
      scaleX: 1.0,
      scaleY: 1.0,
      duration: 380,
      ease: 'Back.easeOut',
      onComplete: () => {
        gameObject.setDepth(15);
      }
    });

    this.showPedagogicalHintModal(artifact);

    if (this.lives <= 0) {
      this.time.delayedCall(900, () => this.endGame(false, 'lives'));
    }
  }

  spawnNextArtifact() {
    if (this.isGameOver) return;
    if (this.currentArtifactIndex >= this.artifactQueue.length) return;

    const data = this.artifactQueue[this.currentArtifactIndex];
    this.currentArtifactData = data;
    this.currentArtifactIndex++;

    // Título y categoría sin emojis
    this.cardTitle.setText(data.name.toUpperCase());
    this.cardRegion.setText(`${data.region} • ${data.category || 'Patrimonio'}`);
    this.cardDescription.setText(data.description);

    const sprite = this.add.image(this.artifactOriginX, this.artifactOriginY, data.textureKey);
    sprite.setData('artifactData', data);
    sprite.setData('startX', this.artifactOriginX);
    sprite.setData('startY', this.artifactOriginY);
    sprite.setData('dropped', false);
    sprite.setDepth(15);

    sprite.setInteractive({ useHandCursor: true });
    this.input.setDraggable(sprite);

    this.activeArtifactSprite = sprite;

    sprite.setScale(0);
    this.tweens.add({
      targets: sprite,
      scaleX: 1.0,
      scaleY: 1.0,
      duration: 250,
      ease: 'Back.easeOut'
    });
  }

  onTimerTick() {
    if (this.isGameOver) return;
    this.timeLeft--;
    this.clockText.setText(`TIEMPO: ${this.timeLeft}s`);

    if (this.timeLeft <= 15) {
      this.clockText.setColor('#ef4444');
      this.tweens.add({
        targets: this.clockText,
        scaleX: 1.08,
        scaleY: 1.08,
        duration: 200,
        yoyo: true
      });
    }

    if (this.timeLeft <= 0) {
      this.endGame(false, 'time');
    }
  }

  updateHUD() {
    const padScore = String(this.score).padStart(3, '0');
    this.scoreText.setText(`PUNTOS: ${padScore} PTS`);
    this.progressText.setText(`RELIQUIAS: ${this.restoredCount} / ${this.totalArtifacts}`);

    this.lupaSprites.forEach((lupa, idx) => {
      if (idx < this.lives) {
        lupa.setTexture('icon_lupa');
        lupa.setAlpha(1.0);
      } else {
        lupa.setTexture('icon_lupa_lost');
        lupa.setAlpha(0.6);
      }
    });
  }

  showFloatingText(x, y, text, color) {
    const floatText = this.add.text(x, y, text, {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '16px',
      fontStyle: 'bold',
      color: color,
      stroke: '#0f0c0a',
      strokeThickness: 3
    }).setOrigin(0.5).setDepth(300);

    this.tweens.add({
      targets: floatText,
      y: y - 40,
      alpha: 0,
      duration: 750,
      ease: 'Quad.easeOut',
      onComplete: () => floatText.destroy()
    });
  }

  emitSuccessParticles(x, y) {
    for (let i = 0; i < 12; i++) {
      const star = this.add.image(x, y, 'particle_gold').setScale(Phaser.Math.FloatBetween(0.4, 0.8)).setDepth(150);
      const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(25, 75);

      this.tweens.add({
        targets: star,
        x: x + Math.cos(angle) * dist,
        y: y + Math.sin(angle) * dist,
        alpha: 0,
        scale: 0.1,
        duration: Phaser.Math.Between(350, 650),
        ease: 'Cubic.easeOut',
        onComplete: () => star.destroy()
      });
    }
  }

  showPedagogicalHintModal(artifact) {
    if (window.showHintModal) {
      window.showHintModal({
        name: artifact.name,
        region: artifact.region,
        hint: artifact.hint
      });
    }
  }

  endGame(isVictory, reason) {
    if (this.isGameOver) return;
    this.isGameOver = true;

    if (this.timerEvent) {
      this.timerEvent.remove(false);
    }

    const resultData = {
      score: this.score,
      restoredCount: this.restoredCount,
      totalArtifacts: this.totalArtifacts,
      lives: this.lives,
      maxLives: this.maxLives,
      timeLeft: Math.max(0, this.timeLeft),
      isVictory: isVictory,
      reason: reason
    };

    this.cameras.main.fadeOut(500, 17, 13, 11);
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
      this.scene.start('ResultScene', resultData);
    });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

window.GameScene = GameScene;
