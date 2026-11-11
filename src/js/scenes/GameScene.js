/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * GameScene: Mecánica Principal de Curaduría con Drag & Drop en Phaser 3
 * I.E. Angela María Torres Suárez — Grado 11° | Proyecto STEAM
 */

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init() {
    // Estado del juego
    this.score = 0;
    this.lives = 3;
    this.maxLives = 3;
    this.timeLeft = 60;
    this.restoredCount = 0;
    this.totalArtifacts = 12;
    this.isGameOver = false;

    // Cola de artefactos barajada aleatoriamente (Algoritmo Fisher-Yates)
    this.artifactQueue = this.shuffleArray([...window.COLOMBIAN_HERITAGE_DATA]);
    this.currentArtifactIndex = 0;
    this.currentArtifactData = null;
    this.activeArtifactSprite = null;

    // Registro de piezas fijadas en cada vitrina (4 slots por vitrina)
    this.roomSlots = {
      precolombino: [
        { dx: -55, dy: -35 }, { dx: 55, dy: -35 },
        { dx: -55, dy: 35 },  { dx: 55, dy: 35 }
      ],
      independencia: [
        { dx: -55, dy: -35 }, { dx: 55, dy: -35 },
        { dx: -55, dy: 35 },  { dx: 55, dy: 35 }
      ],
      patrimonio_vivo: [
        { dx: -55, dy: -35 }, { dx: 55, dy: -35 },
        { dx: -55, dy: 35 },  { dx: 55, dy: 35 }
      ]
    };
    this.placedCountByRoom = { precolombino: 0, independencia: 0, patrimonio_vivo: 0 };
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.cameras.main.fadeIn(400, 19, 15, 13);

    // ========================================================
    // 1. ESCENARIO Y MUROS DE LAS SALAS DE EXHIBICIÓN
    // ========================================================
    this.createMuseumEnvironment(width, height);

    // ========================================================
    // 2. CREACIÓN DE LAS 3 VITRINAS / DROP ZONES DE PHASER 3
    // ========================================================
    this.dropZones = {};
    this.setupDropZones();

    // ========================================================
    // 3. BANDEJA INFERIOR DE RESTAURACIÓN DE SARA
    // ========================================================
    this.setupRestorationTray();

    // ========================================================
    // 4. HUD SUPERIOR (Puntos, Vidas, Reloj, Progreso)
    // ========================================================
    this.setupHUD();

    // ========================================================
    // 5. CONFIGURACIÓN DE EVENTOS NATIVOS DE DRAG & DROP
    // ========================================================
    this.setupDragAndDropEvents();

    // ========================================================
    // 6. TEMPORIZADOR DE 60 SEGUNDOS
    // ========================================================
    this.timerEvent = this.time.addEvent({
      delay: 1000,
      callback: this.onTimerTick,
      callbackScope: this,
      loop: true
    });

    // ========================================================
    // 7. APARICIÓN DEL PRIMER ARTEFACTO
    // ========================================================
    this.spawnNextArtifact();
  }

  // ========================================================
  // ESCENOGRAFÍA DE FONDO
  // ========================================================
  createMuseumEnvironment(w, h) {
    const bg = this.add.graphics();
    // Muros oscuros de museo noble
    bg.fillStyle(0x181310, 1).fillRect(0, 0, w, h);

    // Moldura superior de madera y oro
    bg.fillStyle(0x271e18, 1).fillRect(0, 0, w, 54);
    bg.lineStyle(2, 0xf59e0b, 0.7).lineBetween(0, 54, w, 54);

    // Piso del museo
    bg.fillStyle(0x201712, 1).fillRect(0, 360, w, 180);
    bg.lineStyle(1.5, 0x451a03, 0.4).lineBetween(0, 360, w, 360);
  }

  // ========================================================
  // CONFIGURACIÓN DE LAS 3 VITRINAS / DROP ZONES
  // ========================================================
  setupDropZones() {
    const rooms = window.MUSEUM_ROOMS;

    Object.values(rooms).forEach(room => {
      // 1. Imagen del pedestal de fondo
      const textureKey = `pedestal_${room.id}`;
      const pedestal = this.add.image(room.x, room.y, textureKey);
      pedestal.setDepth(1);

      // 2. Encabezado de la Sala
      this.add.text(room.x, room.y - 105, room.title, {
        fontFamily: 'Cinzel, Georgia, serif',
        fontSize: '12px',
        fontStyle: 'bold',
        color: room.badgeColor
      }).setOrigin(0.5).setDepth(2);

      this.add.text(room.x, room.y - 90, room.subtitle, {
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: '9.5px',
        color: '#cbd5e1'
      }).setOrigin(0.5).setDepth(2);

      // 3. Drop Zone nativa de Phaser 3
      // zone.input.dropZone = true
      const zone = this.add.zone(room.x, room.y + 15, room.width - 20, room.height - 70);
      zone.setRectangleDropZone(room.width - 20, room.height - 70);
      zone.setData('era', room.id);
      zone.setData('title', room.title);
      zone.setData('pedestal', pedestal);

      // Borde de feedback visual al arrastrar piezas
      const highlight = this.add.graphics();
      highlight.lineStyle(3, room.borderColor, 0);
      highlight.strokeRoundedRect(room.x - room.width / 2 + 10, room.y - room.height / 2 + 50, room.width - 20, room.height - 70, 10);
      highlight.setDepth(5);
      zone.setData('highlight', highlight);

      this.dropZones[room.id] = zone;
    });
  }

  // ========================================================
  // BANDEJA DE RESTAURACIÓN DE SARA
  // ========================================================
  setupRestorationTray() {
    const trayX = 480;
    const trayY = 465;

    // Base gráfica de la bandeja
    const trayBg = this.add.image(trayX, trayY, 'tray_bg');
    trayBg.setDepth(10);

    // Posición inicial fija del artefacto activo
    this.artifactOriginX = 230;
    this.artifactOriginY = 465;

    // Resplandor de base en la bandeja
    const slotGlow = this.add.graphics();
    slotGlow.fillStyle(0xf59e0b, 0.15).fillCircle(this.artifactOriginX, this.artifactOriginY, 44);
    slotGlow.lineStyle(1.5, 0xf59e0b, 0.4).strokeCircle(this.artifactOriginX, this.artifactOriginY, 44);
    slotGlow.setDepth(11);

    // Contenedor de la Ficha Técnica Didáctica en la bandeja
    this.cardContainer = this.add.container(310, 420).setDepth(12);

    this.cardTitle = this.add.text(0, 0, 'Cargando artefacto...', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '15px',
      fontStyle: 'bold',
      color: '#fbbf24'
    });

    this.cardRegion = this.add.text(0, 20, '', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#94a3b8',
      fontStyle: 'italic'
    });

    this.cardDescription = this.add.text(0, 38, '', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#e2e8f0',
      wordWrap: { width: 370 },
      lineSpacing: 2
    });

    this.cardContainer.add([this.cardTitle, this.cardRegion, this.cardDescription]);

    // Botón de Pista Didáctica Inmediata dentro de la bandeja
    this.btnHint = this.add.container(740, 465).setDepth(13);
    const btnHintBg = this.add.graphics();
    btnHintBg.fillStyle(0x271e18, 0.9).fillRoundedRect(-45, -20, 90, 40, 8);
    btnHintBg.lineStyle(1.5, 0xf59e0b, 0.7).strokeRoundedRect(-45, -20, 90, 40, 8);
    const btnHintTxt = this.add.text(0, 0, '💡 Pista', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '12px',
      fontStyle: 'bold',
      color: '#fbbf24'
    }).setOrigin(0.5);

    this.btnHint.add([btnHintBg, btnHintTxt]);
    this.btnHint.setSize(90, 40);
    this.btnHint.setInteractive({ useHandCursor: true });
    this.btnHint.on('pointerdown', () => {
      window.SoundEffects.playClick();
      if (this.currentArtifactData) {
        this.showPedagogicalHintModal(this.currentArtifactData);
      }
    });
  }

  // ========================================================
  // HUD SUPERIOR (Puntuación, Vidas, Temporizador)
  // ========================================================
  setupHUD() {
    const hudY = 27;

    // 1. Reloj / Temporizador (Izquierda)
    this.clockText = this.add.text(35, hudY, '⏳ 60 s', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '16px',
      fontStyle: 'bold',
      color: '#f8fafc'
    }).setOrigin(0, 0.5).setDepth(20);

    // 2. Marcador de Puntos (Centro - Izquierda)
    this.scoreText = this.add.text(280, hudY, '🏆 000 PTS', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '17px',
      fontStyle: 'bold',
      color: '#fbbf24'
    }).setOrigin(0.5).setDepth(20);

    // 3. Contador de Reliquias (Centro - Derecha)
    this.progressText = this.add.text(540, hudY, '🏛️ 0 / 12 Piezas', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '14px',
      fontStyle: 'bold',
      color: '#93c5fd'
    }).setOrigin(0.5).setDepth(20);

    // 4. Vidas de Curador (Lupas a la derecha)
    this.livesContainer = this.add.container(820, hudY).setDepth(20);
    this.lupaSprites = [];
    for (let i = 0; i < this.maxLives; i++) {
      const lupa = this.add.image(i * 34, 0, 'icon_lupa').setScale(0.9);
      this.livesContainer.add(lupa);
      this.lupaSprites.push(lupa);
    }
  }

  // ========================================================
  // SISTEMA DE EVENTOS DRAG & DROP NATIVO DE PHASER 3
  // ========================================================
  setupDragAndDropEvents() {
    // 1. Al comenzar a arrastrar: Crece suavemente y pasa al frente
    this.input.on('dragstart', (pointer, gameObject) => {
      if (this.isGameOver) return;
      window.SoundEffects.playClick();

      gameObject.setScale(1.18);
      gameObject.setDepth(200);

      // Resaltar visualmente las 3 vitrinas para orientar al estudiante
      Object.values(this.dropZones).forEach(zone => {
        const hl = zone.getData('highlight');
        hl.clear();
        hl.lineStyle(2, 0xf59e0b, 0.4);
        hl.strokeRoundedRect(zone.x - zone.width / 2, zone.y - zone.height / 2, zone.width, zone.height, 10);
      });
    });

    // 2. Durante el arrastre: Sigue las coordenadas exactas del puntero
    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      if (this.isGameOver) return;
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    // 3. Al pasar por encima de una Drop Zone: Feedback visual de zona activa
    this.input.on('dragenter', (pointer, gameObject, targetDropZone) => {
      const hl = targetDropZone.getData('highlight');
      hl.clear();
      hl.lineStyle(3, 0xfbbf24, 1);
      hl.fillStyle(0xfbbf24, 0.12);
      hl.fillRoundedRect(targetDropZone.x - targetDropZone.width / 2, targetDropZone.y - targetDropZone.height / 2, targetDropZone.width, targetDropZone.height, 10);
      hl.strokeRoundedRect(targetDropZone.x - targetDropZone.width / 2, targetDropZone.y - targetDropZone.height / 2, targetDropZone.width, targetDropZone.height, 10);
    });

    // 4. Al salir de una Drop Zone sin soltar
    this.input.on('dragleave', (pointer, gameObject, targetDropZone) => {
      const hl = targetDropZone.getData('highlight');
      hl.clear();
      hl.lineStyle(2, 0xf59e0b, 0.4);
      hl.strokeRoundedRect(targetDropZone.x - targetDropZone.width / 2, targetDropZone.y - targetDropZone.height / 2, targetDropZone.width, targetDropZone.height, 10);
    });

    // 5. Al soltar sobre una Drop Zone válida (MECÁNICA PRINCIPAL)
    this.input.on('drop', (pointer, gameObject, targetDropZone) => {
      if (this.isGameOver) return;

      gameObject.setData('dropped', true);
      this.clearDropZoneHighlights();

      const artifact = gameObject.getData('artifactData');
      const targetEra = targetDropZone.getData('era');

      // Comparación lógica directa entre identificadores
      if (artifact.era === targetEra) {
        this.handleCorrectMatch(gameObject, targetDropZone, artifact);
      } else {
        this.handleIncorrectMatch(gameObject, targetDropZone, artifact);
      }
    });

    // 6. Al soltar en zona vacía o fuera de vitrina: Retorno animado elástico
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
          duration: 320,
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

  // ========================================================
  // GESTIÓN DE ACIERTO EN VITRINA (+100 PTS)
  // ========================================================
  handleCorrectMatch(gameObject, targetDropZone, artifact) {
    // 1. Audio y Puntuación
    window.SoundEffects.playSuccess();
    this.score += 100;
    this.restoredCount++;
    this.updateHUD();

    // 2. Destello flotante "+100 PTS"
    this.showFloatingText(gameObject.x, gameObject.y - 20, '+100 PTS', '#34d399');

    // 3. Partículas doradas de éxito
    this.emitSuccessParticles(targetDropZone.x, targetDropZone.y);

    // 4. Ubicación en slot permanente de la vitrina
    const era = artifact.era;
    const slotIdx = this.placedCountByRoom[era] % 4;
    this.placedCountByRoom[era]++;

    const slotOffset = this.roomSlots[era][slotIdx];
    const targetX = targetDropZone.x + slotOffset.dx;
    const targetY = targetDropZone.y + slotOffset.dy;

    // Desactivar arrastre para fijación permanente
    gameObject.disableInteractive();

    // Animación de fijación de curaduría
    this.tweens.add({
      targets: gameObject,
      x: targetX,
      y: targetY,
      scaleX: 0.58,
      scaleY: 0.58,
      duration: 380,
      ease: 'Power2.easeOut',
      onComplete: () => {
        gameObject.setDepth(6);
      }
    });

    // 5. Verificar condición de victoria o avanzar a la siguiente pieza
    if (this.restoredCount >= this.totalArtifacts) {
      this.time.delayedCall(800, () => this.endGame(true, 'victory'));
    } else {
      this.time.delayedCall(450, () => this.spawnNextArtifact());
    }
  }

  // ========================================================
  // GESTIÓN DE ERROR EN VITRINA (-25 PTS y -1 Lupa)
  // ========================================================
  handleIncorrectMatch(gameObject, targetDropZone, artifact) {
    // 1. Audio y descuento
    window.SoundEffects.playError();
    this.score = Math.max(0, this.score - 25);
    this.lives--;
    this.updateHUD();

    // 2. Texto flotante "-25 PTS"
    this.showFloatingText(gameObject.x, gameObject.y - 20, '-25 PTS', '#f87171');

    // 3. Vibración de cámara visual
    this.cameras.main.shake(220, 0.005);

    // 4. Retorno animado a la bandeja
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

    // 5. Despliegue de modal pedagógico con la pista histórica
    this.showPedagogicalHintModal(artifact);

    // 6. Verificar condición de derrota por vidas
    if (this.lives <= 0) {
      this.time.delayedCall(900, () => this.endGame(false, 'lives'));
    }
  }

  // ========================================================
  // CREACIÓN Y PRESENTACIÓN DEL SIGUIENTE ARTEFACTO
  // ========================================================
  spawnNextArtifact() {
    if (this.isGameOver) return;
    if (this.currentArtifactIndex >= this.artifactQueue.length) return;

    const data = this.artifactQueue[this.currentArtifactIndex];
    this.currentArtifactData = data;
    this.currentArtifactIndex++;

    // Actualizar ficha didáctica en la bandeja de Sara
    this.cardTitle.setText(`${data.iconEmoji} ${data.name}`);
    this.cardRegion.setText(`📍 Región: ${data.region}`);
    this.cardDescription.setText(data.description);

    // Crear el Sprite interactivo arrastrable
    const sprite = this.add.image(this.artifactOriginX, this.artifactOriginY, data.textureKey);
    sprite.setData('artifactData', data);
    sprite.setData('startX', this.artifactOriginX);
    sprite.setData('startY', this.artifactOriginY);
    sprite.setData('dropped', false);
    sprite.setDepth(15);

    // Habilitar Drag nativo de Phaser
    sprite.setInteractive({ useHandCursor: true });
    this.input.setDraggable(sprite);

    this.activeArtifactSprite = sprite;

    // Animación suave de aparición
    sprite.setScale(0);
    this.tweens.add({
      targets: sprite,
      scaleX: 1.0,
      scaleY: 1.0,
      duration: 250,
      ease: 'Back.easeOut'
    });
  }

  // ========================================================
  // CRONÓMETRO DE 60 SEGUNDOS
  // ========================================================
  onTimerTick() {
    if (this.isGameOver) return;

    this.timeLeft--;
    this.clockText.setText(`⏳ ${this.timeLeft} s`);

    // Alerta visual de últimos 15 segundos
    if (this.timeLeft <= 15) {
      this.clockText.setColor('#ef4444');
      this.tweens.add({
        targets: this.clockText,
        scaleX: 1.12,
        scaleY: 1.12,
        duration: 200,
        yoyo: true
      });
    }

    if (this.timeLeft <= 0) {
      this.endGame(false, 'time');
    }
  }

  // ========================================================
  // ACTUALIZACIÓN VISUAL DEL HUD
  // ========================================================
  updateHUD() {
    // Marcador formateado con ceros
    const padScore = String(this.score).padStart(3, '0');
    this.scoreText.setText(`🏆 ${padScore} PTS`);

    // Contador de piezas
    this.progressText.setText(`🏛️ ${this.restoredCount} / ${this.totalArtifacts} Piezas`);

    // Vidas (Lupas)
    this.lupaSprites.forEach((lupa, idx) => {
      if (idx < this.lives) {
        lupa.setTexture('icon_lupa');
      } else {
        lupa.setTexture('icon_lupa_lost');
      }
    });
  }

  // ========================================================
  // FEEDBACKS VISUALES: TEXTO FLOTANTE Y PARTÍCULAS
  // ========================================================
  showFloatingText(x, y, text, color) {
    const floatText = this.add.text(x, y, text, {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '18px',
      fontStyle: 'bold',
      color: color,
      stroke: '#110c0a',
      strokeThickness: 3
    }).setOrigin(0.5).setDepth(300);

    this.tweens.add({
      targets: floatText,
      y: y - 45,
      alpha: 0,
      duration: 750,
      ease: 'Quad.easeOut',
      onComplete: () => floatText.destroy()
    });
  }

  emitSuccessParticles(x, y) {
    for (let i = 0; i < 14; i++) {
      const star = this.add.image(x, y, 'particle_gold').setScale(Phaser.Math.FloatBetween(0.5, 0.9)).setDepth(150);
      const angle = Phaser.Math.FloatBetween(0, Math.PI * 2);
      const dist = Phaser.Math.Between(30, 90);

      this.tweens.add({
        targets: star,
        x: x + Math.cos(angle) * dist,
        y: y + Math.sin(angle) * dist,
        alpha: 0,
        scale: 0.1,
        duration: Phaser.Math.Between(400, 700),
        ease: 'Cubic.easeOut',
        onComplete: () => star.destroy()
      });
    }
  }

  // ========================================================
  // DESPLIEGUE DEL MODAL DIDÁCTICO DE CORRECCIÓN (HTML5)
  // ========================================================
  showPedagogicalHintModal(artifact) {
    if (window.showHintModal) {
      window.showHintModal({
        name: artifact.name,
        region: artifact.region,
        hint: artifact.hint,
        iconEmoji: artifact.iconEmoji
      });
    }
  }

  // ========================================================
  // FINALIZACIÓN DEL JUEGO (VICTORIA O DERROTA)
  // ========================================================
  endGame(isVictory, reason) {
    if (this.isGameOver) return;
    this.isGameOver = true;

    if (this.timerEvent) {
      this.timerEvent.remove(false);
    }

    // Datos transferidos a ResultScene
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

    this.cameras.main.fadeOut(500, 19, 15, 13);
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
      this.scene.start('ResultScene', resultData);
    });
  }

  /**
   * Algoritmo de barajado Fisher-Yates para asegurar piezas en orden impredecible
   */
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

window.GameScene = GameScene;
