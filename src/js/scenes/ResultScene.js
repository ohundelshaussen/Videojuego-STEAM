/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * ResultScene: Pantalla de Resultados y Gran Diploma de Curador
 * Rediseño Limpio de Museo: Cero Emojis y Tipografía Sobria
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

    this.cameras.main.fadeIn(500, 17, 13, 11);

    const bg = this.add.graphics();
    bg.fillStyle(0x110d0b, 1).fillRect(0, 0, width, height);
    bg.lineStyle(1, 0xf59e0b, 0.35);
    bg.strokeRoundedRect(20, 20, width - 40, height - 40, 12);

    if (this.isVictory) {
      window.SoundEffects.playVictory();
      this.createVictoryView(width, height);
    } else {
      window.SoundEffects.playGameOver();
      this.createDefeatView(width, height);
    }

    this.createNavigationButtons(width, height);
  }

  createVictoryView(w, h) {
    // Tarjeta del Diploma Oficial
    const cert = this.add.graphics();
    cert.fillStyle(0x1c1511, 0.95);
    cert.fillRoundedRect(w / 2 - 310, 42, 620, 390, 12);
    cert.lineStyle(1.5, 0xf59e0b, 0.8);
    cert.strokeRoundedRect(w / 2 - 310, 42, 620, 390, 12);

    cert.lineStyle(1, 0xffffff, 0.08);
    cert.strokeRoundedRect(w / 2 - 302, 50, 604, 374, 8);

    // Filete tricolor muy sutil
    cert.fillStyle(0xfacc15, 1).fillRect(w / 2 - 160, 56, 106, 2);
    cert.fillStyle(0x2563eb, 1).fillRect(w / 2 - 54, 56, 108, 2);
    cert.fillStyle(0xdc2626, 1).fillRect(w / 2 + 54, 56, 106, 2);

    this.add.text(w / 2, 76, 'REPÚBLICA DE COLOMBIA • MUSEO NACIONAL', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '10px',
      color: '#f59e0b',
      letterSpacing: 2,
      fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(w / 2, 106, 'GRAN DIPLOMA DE CURADOR DEL PATRIMONIO', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '20px',
      fontStyle: 'bold',
      color: '#ffffff',
      shadow: { offsetX: 0, offsetY: 2, color: '#f59e0b', blur: 10, fill: true }
    }).setOrigin(0.5);

    this.add.text(w / 2, 136,
      'Se certifica con honores la labor de curaduría y salvaguarda\n' +
      'de las 12 reliquias históricas del patrimonio de la nación.',
      {
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: '12px',
        color: '#cbd5e1',
        align: 'center',
        lineSpacing: 3
      }
    ).setOrigin(0.5);

    // Medalla física
    const medal = this.add.image(w / 2 - 215, 235, 'medal_diploma').setScale(1.15);
    this.tweens.add({
      targets: medal,
      scaleX: 1.22,
      scaleY: 1.22,
      duration: 1600,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

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

    this.add.text(w / 2 - 215, 285, rankTitle.toUpperCase(), {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '10px',
      fontStyle: 'bold',
      color: rankColor,
      align: 'center',
      wordWrap: { width: 130 }
    }).setOrigin(0.5);

    // Métricas
    const metricsBox = this.add.graphics();
    metricsBox.fillStyle(0x130e0c, 0.9);
    metricsBox.fillRoundedRect(w / 2 - 120, 175, 400, 145, 8);
    metricsBox.lineStyle(1, 0xf59e0b, 0.35);
    metricsBox.strokeRoundedRect(w / 2 - 120, 175, 400, 145, 8);

    const leftColX = w / 2 - 95;
    const rightColX = w / 2 + 105;
    const row1Y = 210;
    const row2Y = 260;

    this.renderMetric(leftColX, row1Y, 'RELIQUIAS CATALOGADAS:', `${this.restoredCount} / ${this.totalArtifacts}`, '#60a5fa');
    this.renderMetric(rightColX, row1Y, 'PUNTUACIÓN TOTAL:', `${this.score} PTS`, '#facc15');
    this.renderMetric(leftColX, row2Y, 'LUPAS CONSERVADAS:', `${this.lives} / ${this.maxLives}`, '#34d399');
    this.renderMetric(rightColX, row2Y, 'TIEMPO RESTANTE:', `${this.timeLeft}s`, '#f87171');

    this.createConfettiShower(w, h);
  }

  createDefeatView(w, h) {
    const card = this.add.graphics();
    card.fillStyle(0x1c1310, 0.95);
    card.fillRoundedRect(w / 2 - 290, 48, 580, 380, 12);
    card.lineStyle(1.5, 0xef4444, 0.7);
    card.strokeRoundedRect(w / 2 - 290, 48, 580, 380, 12);

    this.add.text(w / 2, 85, 'CURADURÍA INCOMPLETA', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '24px',
      fontStyle: 'bold',
      color: '#f87171'
    }).setOrigin(0.5);

    const motiveText = this.reason === 'lives'
      ? 'Se agotaron las 3 lupas de observación histórica.'
      : 'El tiempo límite de catalogación ha concluido.';

    this.add.text(w / 2, 120, motiveText.toUpperCase(), {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#fca5a5',
      fontStyle: 'bold',
      letterSpacing: 1
    }).setOrigin(0.5);

    const message =
      'El estudio del patrimonio exige rigurosidad, observación y análisis\n' +
      'de las características históricas. Consulta la Guía de Curaduría\n' +
      'y pon a prueba tus conocimientos nuevamente.';

    this.add.text(w / 2, 172, message, {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '12px',
      color: '#cbd5e1',
      align: 'center',
      lineSpacing: 4
    }).setOrigin(0.5);

    const mBox = this.add.graphics();
    mBox.fillStyle(0x130e0c, 0.9);
    mBox.fillRoundedRect(w / 2 - 210, 235, 420, 90, 8);
    mBox.lineStyle(1, 0xf59e0b, 0.3);
    mBox.strokeRoundedRect(w / 2 - 210, 235, 420, 90, 8);

    this.renderMetric(w / 2 - 170, 280, 'PIEZAS RESTAURADAS:', `${this.restoredCount} / ${this.totalArtifacts}`, '#60a5fa');
    this.renderMetric(w / 2 + 50, 280, 'PUNTUACIÓN LOGRADA:', `${this.score} PTS`, '#facc15');
  }

  renderMetric(x, y, label, val, valColor) {
    this.add.text(x, y - 10, label, {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '10px',
      color: '#94a3b8',
      letterSpacing: 0.5
    });

    this.add.text(x, y + 8, val, {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '16px',
      fontStyle: 'bold',
      color: valColor
    });
  }

  createConfettiShower(w, h) {
    for (let i = 0; i < 24; i++) {
      const x = Phaser.Math.Between(60, w - 60);
      const y = Phaser.Math.Between(20, h - 80);
      const star = this.add.image(x, y, 'particle_gold')
        .setScale(Phaser.Math.FloatBetween(0.35, 0.75))
        .setAlpha(0);

      this.tweens.add({
        targets: star,
        y: y + Phaser.Math.Between(25, 70),
        alpha: { from: 0.8, to: 0 },
        duration: Phaser.Math.Between(1200, 2200),
        repeat: -1,
        delay: Phaser.Math.Between(0, 1800),
        ease: 'Quad.easeOut'
      });
    }
  }

  createNavigationButtons(w, h) {
    const btnY = 465;

    // Botón 1: "NUEVA CURADURÍA"
    this.createButton(w / 2 - 140, btnY, 210, 42, 'NUEVA CURADURÍA', 0xf59e0b, 0x110d0b, () => {
      window.SoundEffects.playClick();
      this.cameras.main.fadeOut(350, 17, 13, 11);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        this.scene.start('GameScene');
      });
    });

    // Botón 2: "MENÚ PRINCIPAL"
    this.createButton(w / 2 + 90, btnY, 210, 42, 'MENÚ PRINCIPAL', 0x1d1612, 0xf8fafc, () => {
      window.SoundEffects.playClick();
      this.cameras.main.fadeOut(350, 17, 13, 11);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        this.scene.start('MenuScene');
      });
    }, 0xf59e0b);
  }

  createButton(x, y, w, h, text, bgColor, textColor, onClick, strokeColor = null) {
    const container = this.add.container(x, y);

    const bg = this.add.graphics();
    bg.fillStyle(bgColor, 1);
    bg.fillRoundedRect(-w / 2, -h / 2, w, h, 6);
    if (strokeColor) {
      bg.lineStyle(1, strokeColor, 0.6);
      bg.strokeRoundedRect(-w / 2, -h / 2, w, h, 6);
    }
    container.add(bg);

    const label = this.add.text(0, 0, text, {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '12px',
      fontStyle: 'bold',
      color: typeof textColor === 'number' ? `#${textColor.toString(16)}` : textColor,
      letterSpacing: 1
    }).setOrigin(0.5);
    container.add(label);

    container.setSize(w, h);
    container.setInteractive({ useHandCursor: true });

    container.on('pointerover', () => {
      this.tweens.add({ targets: container, scaleX: 1.04, scaleY: 1.04, duration: 120 });
      bg.clear();
      bg.fillStyle(0xfbbf24, 1);
      bg.fillRoundedRect(-w / 2, -h / 2, w, h, 6);
      label.setColor('#110d0b');
    });

    container.on('pointerout', () => {
      this.tweens.add({ targets: container, scaleX: 1.0, scaleY: 1.0, duration: 120 });
      bg.clear();
      bg.fillStyle(bgColor, 1);
      bg.fillRoundedRect(-w / 2, -h / 2, w, h, 6);
      if (strokeColor) {
        bg.lineStyle(1, strokeColor, 0.6);
        bg.strokeRoundedRect(-w / 2, -h / 2, w, h, 6);
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
