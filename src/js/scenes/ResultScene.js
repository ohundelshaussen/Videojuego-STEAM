/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * ResultScene: Pantalla de Resultados, Diploma de Curador y Medallas
 * I.E. Angela María Torres Suárez — Grado 11° | Proyecto STEAM
 */

class ResultScene extends Phaser.Scene {
  constructor() {
    super({ key: 'ResultScene' });
  }

  init(data) {
    this.score = data.score || 0;
    this.restoredCount = data.restoredCount || 0;
    this.totalArtifacts = data.totalArtifacts || 12;
    this.lives = data.lives !== undefined ? data.lives : 0;
    this.maxLives = data.maxLives || 3;
    this.timeLeft = data.timeLeft || 0;
    this.isVictory = data.isVictory !== undefined ? data.isVictory : false;
    this.reason = data.reason || 'game_over';
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.cameras.main.fadeIn(500, 19, 15, 13);

    // ========================================================
    // 1. FONDO DE SALA DE PROTOCOLO DEL MUSEO
    // ========================================================
    const bg = this.add.graphics();
    bg.fillStyle(0x130f0d, 1).fillRect(0, 0, width, height);

    // Estampado de fondo con marco perimetral
    bg.lineStyle(2, 0xf59e0b, 0.4);
    bg.strokeRoundedRect(20, 20, width - 40, height - 40, 14);

    // ========================================================
    // 2. DISPARO DE AUDIO SEGÚN EL RESULTADO
    // ========================================================
    if (this.isVictory) {
      window.SoundEffects.playVictory();
      this.createVictoryView(width, height);
    } else {
      window.SoundEffects.playGameOver();
      this.createDefeatView(width, height);
    }

    // ========================================================
    // 3. BOTONES DE NAVEGACIÓN POSTERIOR
    // ========================================================
    this.createNavigationButtons(width, height);
  }

  // ========================================================
  // VISTA DE VICTORIA: GRAN DIPLOMA DEL PATRIMONIO NACIONAL
  // ========================================================
  createVictoryView(w, h) {
    // 1. Tarjeta estilo Pergamino / Diploma Oficial
    const cert = this.add.graphics();
    cert.fillStyle(0x221a14, 0.95);
    cert.fillRoundedRect(w / 2 - 320, 40, 640, 395, 14);
    cert.lineStyle(2, 0xf59e0b, 0.9);
    cert.strokeRoundedRect(w / 2 - 320, 40, 640, 395, 14);

    // Borde interior fino
    cert.lineStyle(1, 0xfde047, 0.35);
    cert.strokeRoundedRect(w / 2 - 310, 50, 620, 375, 10);

    // Cinta tricolor decorativa en el cabezal del diploma
    cert.fillStyle(0xfacc15, 1).fillRect(w / 2 - 200, 55, 400, 4);
    cert.fillStyle(0x2563eb, 1).fillRect(w / 2 - 200, 59, 400, 2);
    cert.fillStyle(0xdc2626, 1).fillRect(w / 2 - 200, 61, 400, 2);

    // Textos Oficiales
    this.add.text(w / 2, 78, 'REPÚBLICA DE COLOMBIA • MUSEO NACIONAL', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#f59e0b',
      letterSpacing: 2,
      fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(w / 2, 110, 'GRAN DIPLOMA DE CURADOR DEL PATRIMONIO', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '22px',
      fontStyle: 'bold',
      color: '#ffffff',
      shadow: { offsetX: 0, offsetY: 2, color: '#f59e0b', blur: 10, fill: true }
    }).setOrigin(0.5);

    this.add.text(w / 2, 142,
      'Se certifica con honores que Sara y su equipo de curaduría (Grado 11°)\n' +
      'han clasificado y resguardado con rigor las reliquias de la nación.',
      {
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: '12px',
        color: '#e2e8f0',
        align: 'center',
        lineSpacing: 3
      }
    ).setOrigin(0.5);

    // Medalla física animada a la izquierda
    const medal = this.add.image(w / 2 - 220, 240, 'medal_diploma').setScale(1.2);
    this.tweens.add({
      targets: medal,
      scaleX: 1.28,
      scaleY: 1.28,
      duration: 1500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    // Rango honorífico obtenido
    let rankTitle = 'Guardián del Patrimonio';
    let rankColor = '#fbbf24';
    if (this.score >= 1200) {
      rankTitle = 'Curador Maestro del Bicentenario';
      rankColor = '#facc15';
    } else if (this.score >= 900) {
      rankTitle = 'Guardián Oficial de la Nación';
      rankColor = '#60a5fa';
    } else {
      rankTitle = 'Asistente de Catalogación Histórica';
      rankColor = '#34d399';
    }

    this.add.text(w / 2 - 220, 290, rankTitle, {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '11px',
      fontStyle: 'bold',
      color: rankColor,
      align: 'center',
      wordWrap: { width: 140 }
    }).setOrigin(0.5);

    // Cuadro de Métricas de Curaduría
    const metricsBox = this.add.graphics();
    metricsBox.fillStyle(0x19120e, 0.85);
    metricsBox.fillRoundedRect(w / 2 - 120, 180, 410, 145, 10);
    metricsBox.lineStyle(1, 0xf59e0b, 0.4);
    metricsBox.strokeRoundedRect(w / 2 - 120, 180, 410, 145, 10);

    const leftColX = w / 2 - 95;
    const rightColX = w / 2 + 115;
    const row1Y = 215;
    const row2Y = 265;

    this.renderMetric(leftColX, row1Y, '🏛️ Reliquias:', `${this.restoredCount} / ${this.totalArtifacts}`, '#60a5fa');
    this.renderMetric(rightColX, row1Y, '🏆 Puntos Obtenidos:', `${this.score} PTS`, '#facc15');
    this.renderMetric(leftColX, row2Y, '🔍 Lupas Conservadas:', `${this.lives} / ${this.maxLives}`, '#34d399');
    this.renderMetric(rightColX, row2Y, '⏳ Tiempo Restante:', `${this.timeLeft} s`, '#f87171');

    // Efecto de lluvia de confeti / destellos
    this.createConfettiShower(w, h);
  }

  // ========================================================
  // VISTA DE INTENTO AGOTADO (RETROALIMENTACIÓN FORMATIVA)
  // ========================================================
  createDefeatView(w, h) {
    const card = this.add.graphics();
    card.fillStyle(0x221714, 0.95);
    card.fillRoundedRect(w / 2 - 300, 45, 600, 390, 14);
    card.lineStyle(2, 0xef4444, 0.8);
    card.strokeRoundedRect(w / 2 - 300, 45, 600, 390, 14);

    this.add.text(w / 2, 85, 'CURADURÍA INCOMPLETA', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '26px',
      fontStyle: 'bold',
      color: '#f87171'
    }).setOrigin(0.5);

    const motiveText = this.reason === 'lives'
      ? '¡Se agotaron las 3 lupas de observación histórica!'
      : '¡El tiempo de inauguración del museo ha concluido!';

    this.add.text(w / 2, 125, motiveText, {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '14px',
      color: '#fca5a5',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    // Mensaje pedagógico reflexivo
    const message =
      'El estudio del patrimonio de Colombia exige rigurosidad, observación\n' +
      'y análisis de las épocas históricas. ¡No te desanimes, Sara!\n' +
      'Consulta la Guía del Curador para repasar y vuelve a intentarlo.';

    this.add.text(w / 2, 180, message, {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '13px',
      color: '#e2e8f0',
      align: 'center',
      lineSpacing: 4
    }).setOrigin(0.5);

    // Métricas alcanzadas
    const mBox = this.add.graphics();
    mBox.fillStyle(0x18100d, 0.9);
    mBox.fillRoundedRect(w / 2 - 220, 240, 440, 95, 8);
    mBox.lineStyle(1, 0xf59e0b, 0.35);
    mBox.strokeRoundedRect(w / 2 - 220, 240, 440, 95, 8);

    this.renderMetric(w / 2 - 180, 285, '🏛️ Piezas Ubicadas:', `${this.restoredCount} / ${this.totalArtifacts}`, '#60a5fa');
    this.renderMetric(w / 2 + 40, 285, '🏆 Puntuación Lograda:', `${this.score} PTS`, '#facc15');
  }

  renderMetric(x, y, label, val, valColor) {
    this.add.text(x, y - 10, label, {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#94a3b8'
    });

    this.add.text(x, y + 8, val, {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '17px',
      fontStyle: 'bold',
      color: valColor
    });
  }

  // ========================================================
  // LLUVIA DE CONFETI Y ESTRELLAS DORADAS
  // ========================================================
  createConfettiShower(w, h) {
    for (let i = 0; i < 30; i++) {
      const x = Phaser.Math.Between(40, w - 40);
      const y = Phaser.Math.Between(10, h - 100);
      const star = this.add.image(x, y, 'particle_gold')
        .setScale(Phaser.Math.FloatBetween(0.4, 0.9))
        .setAlpha(0);

      this.tweens.add({
        targets: star,
        y: y + Phaser.Math.Between(30, 80),
        alpha: { from: 0.8, to: 0 },
        duration: Phaser.Math.Between(1200, 2400),
        repeat: -1,
        delay: Phaser.Math.Between(0, 2000),
        ease: 'Quad.easeOut'
      });
    }
  }

  // ========================================================
  // BOTONES INTERACTIVOS DE NAVEGACIÓN
  // ========================================================
  createNavigationButtons(w, h) {
    const btnY = 465;

    // Botón 1: "Reintentar Curaduría"
    this.createButton(w / 2 - 160, btnY, 210, 42, '🔄 Jugar de Nuevo', 0xf59e0b, 0x130f0d, () => {
      window.SoundEffects.playClick();
      this.cameras.main.fadeOut(350, 19, 15, 13);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        this.scene.start('GameScene');
      });
    });

    // Botón 2: "Volver al Menú Principal"
    this.createButton(w / 2 + 70, btnY, 210, 42, '🏛️ Menú Principal', 0x241a14, 0xf8fafc, () => {
      window.SoundEffects.playClick();
      this.cameras.main.fadeOut(350, 19, 15, 13);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        this.scene.start('MenuScene');
      });
    }, 0xf59e0b);
  }

  createButton(x, y, w, h, text, bgColor, textColor, onClick, strokeColor = null) {
    const container = this.add.container(x, y);

    const bg = this.add.graphics();
    bg.fillStyle(bgColor, 1);
    bg.fillRoundedRect(-w / 2, -h / 2, w, h, 8);
    if (strokeColor) {
      bg.lineStyle(1.5, strokeColor, 0.8);
      bg.strokeRoundedRect(-w / 2, -h / 2, w, h, 8);
    }
    container.add(bg);

    const label = this.add.text(0, 0, text, {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '13px',
      fontStyle: 'bold',
      color: typeof textColor === 'number' ? `#${textColor.toString(16)}` : textColor
    }).setOrigin(0.5);
    container.add(label);

    container.setSize(w, h);
    container.setInteractive({ useHandCursor: true });

    container.on('pointerover', () => {
      this.tweens.add({ targets: container, scaleX: 1.05, scaleY: 1.05, duration: 120 });
      bg.clear();
      bg.fillStyle(0xfbbf24, 1);
      bg.fillRoundedRect(-w / 2, -h / 2, w, h, 8);
      label.setColor('#130f0d');
    });

    container.on('pointerout', () => {
      this.tweens.add({ targets: container, scaleX: 1.0, scaleY: 1.0, duration: 120 });
      bg.clear();
      bg.fillStyle(bgColor, 1);
      bg.fillRoundedRect(-w / 2, -h / 2, w, h, 8);
      if (strokeColor) {
        bg.lineStyle(1.5, strokeColor, 0.8);
        bg.strokeRoundedRect(-w / 2, -h / 2, w, h, 8);
      }
      label.setColor(typeof textColor === 'number' ? `#${textColor.toString(16)}` : textColor);
    });

    container.on('pointerdown', () => {
      onClick();
    });

    return container;
  }
}

window.ResultScene = ResultScene;
