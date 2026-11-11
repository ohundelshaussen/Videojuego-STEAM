/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * MenuScene: Menú Principal Interactivo con Estética de Museo
 * I.E. Angela María Torres Suárez — Grado 11° | Proyecto STEAM
 */

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Transición de entrada suave
    this.cameras.main.fadeIn(500, 19, 15, 13);

    // ========================================================
    // 1. ESCENOGRAFÍA DE FONDO: GRAN VESTÍBULO DEL MUSEO
    // ========================================================
    const bg = this.add.graphics();
    // Muros nobles oscuros
    bg.fillStyle(0x181310, 1);
    bg.fillRect(0, 0, width, height);

    // Piso de mármol pulido con reflejos
    bg.fillStyle(0x241a14, 1);
    bg.fillRect(0, 420, width, 120);
    bg.lineStyle(2, 0xf59e0b, 0.4);
    bg.lineBetween(0, 420, width, 420);

    // Columnas arquitectónicas clásicas laterales
    bg.fillStyle(0x1f1712, 1);
    bg.fillRect(40, 60, 44, 360);
    bg.fillRect(width - 84, 60, 44, 360);
    bg.lineStyle(1.5, 0xf59e0b, 0.3);
    bg.strokeRect(40, 60, 44, 360);
    bg.strokeRect(width - 84, 60, 44, 360);

    // Cinta Tricolor Nacional Superior
    bg.fillStyle(0xfacc15, 1).fillRect(width / 2 - 240, 24, 480, 5);
    bg.fillStyle(0x2563eb, 1).fillRect(width / 2 - 240, 29, 480, 3);
    bg.fillStyle(0xdc2626, 1).fillRect(width / 2 - 240, 32, 480, 3);

    // ========================================================
    // 2. TÍTULOS Y CONTEXTUALIZACIÓN HISTÓRICA
    // ========================================================
    this.add.text(width / 2, 48, 'I.E. ANGELA MARÍA TORRES SUÁREZ • GRADO 11° • PROYECTO STEAM', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#f59e0b',
      letterSpacing: 1.5,
      fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(width / 2, 88, 'TESOROS DE COLOMBIA', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '38px',
      fontStyle: '900',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      shadow: { offsetX: 0, offsetY: 4, color: '#f59e0b', blur: 18, stroke: true, fill: true }
    }).setOrigin(0.5);

    this.add.text(width / 2, 134, 'Guardianes del Patrimonio Nacional', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '18px',
      color: '#fbbf24',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    // Tarjeta descriptiva del desafío pedagógico
    const storyBox = this.add.graphics();
    storyBox.fillStyle(0x201814, 0.85);
    storyBox.fillRoundedRect(width / 2 - 280, 165, 560, 68, 12);
    storyBox.lineStyle(1, 0xf59e0b, 0.4);
    storyBox.strokeRoundedRect(width / 2 - 280, 165, 560, 68, 12);

    this.add.text(width / 2, 199,
      'Sara (17 años), aprendiza de curaduría, debe organizar 12 reliquias patrias\n' +
      'en 3 salas históricas antes de la inauguración del Museo Nacional.',
      {
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: '13px',
        color: '#e2e8f0',
        align: 'center',
        lineSpacing: 4
      }
    ).setOrigin(0.5);

    // ========================================================
    // 3. MUESTRA DE PIEZAS DE MUSEO FLOTANTES (Atmósfera Visual)
    // ========================================================
    const floatBalsa = this.add.image(130, 260, 'art_balsa_muisca').setScale(0.9);
    const floatFlorero = this.add.image(width / 2, 275, 'art_florero_llorente').setScale(0.85);
    const floatSombrero = this.add.image(width - 130, 260, 'art_sombrero_vueltiao').setScale(0.9);

    // Animación suave de flotación
    this.tweens.add({
      targets: [floatBalsa, floatSombrero],
      y: '+=8',
      duration: 1800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    this.tweens.add({
      targets: floatFlorero,
      y: '-=6',
      duration: 2100,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    // ========================================================
    // 4. BOTONES INTERACTIVOS DE ACCIÓN
    // ========================================================
    const btnYStart = 345;

    // Botón Principal: "Entrar al Museo"
    this.createButton(
      width / 2,
      btnYStart,
      280,
      46,
      '🏛️ ENTRAR AL MUSEO',
      0xf59e0b,
      0x130f0d,
      () => {
        window.SoundEffects.playClick();
        this.cameras.main.fadeOut(400, 19, 15, 13);
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
          this.scene.start('GameScene');
        });
      }
    );

    // Botón Secundario: "Guía del Curador"
    this.createButton(
      width / 2 - 135,
      btnYStart + 58,
      230,
      38,
      '📜 Guía del Curador',
      0x271e18,
      0xf8fafc,
      () => {
        window.SoundEffects.playClick();
        if (window.openModal) window.openModal('modal-guide');
      },
      0xf59e0b
    );

    // Botón Terciario: "Créditos STEAM"
    this.createButton(
      width / 2 + 135,
      btnYStart + 58,
      230,
      38,
      '⭐ Ficha STEAM (11°)',
      0x271e18,
      0xf8fafc,
      () => {
        window.SoundEffects.playClick();
        if (window.openModal) window.openModal('modal-credits');
      },
      0xf59e0b
    );

    // ========================================================
    // 5. EFECTO DE PARTÍCULAS AMBIENTALES (Motes de luz dorada)
    // ========================================================
    for (let i = 0; i < 18; i++) {
      const px = Phaser.Math.Between(40, width - 40);
      const py = Phaser.Math.Between(50, 480);
      const star = this.add.image(px, py, 'particle_gold').setScale(Phaser.Math.FloatBetween(0.3, 0.65)).setAlpha(0.25);
      this.tweens.add({
        targets: star,
        y: py - Phaser.Math.Between(20, 60),
        alpha: { from: 0.1, to: 0.5 },
        duration: Phaser.Math.Between(2500, 4500),
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
        delay: Phaser.Math.Between(0, 1500)
      });
    }
  }

  /**
   * Helper para crear botones de interfaz interactivos en Phaser 3
   */
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
      fontSize: '14px',
      fontStyle: 'bold',
      color: typeof textColor === 'number' ? `#${textColor.toString(16)}` : textColor
    }).setOrigin(0.5);
    container.add(label);

    // Zona interactiva con eventos de puntero
    container.setSize(w, h);
    container.setInteractive({ useHandCursor: true });

    container.on('pointerover', () => {
      this.tweens.add({
        targets: container,
        scaleX: 1.05,
        scaleY: 1.05,
        duration: 120,
        ease: 'Quad.easeOut'
      });
      bg.clear();
      bg.fillStyle(0xfbbf24, 1);
      bg.fillRoundedRect(-w / 2, -h / 2, w, h, 8);
      label.setColor('#130f0d');
    });

    container.on('pointerout', () => {
      this.tweens.add({
        targets: container,
        scaleX: 1.0,
        scaleY: 1.0,
        duration: 120,
        ease: 'Quad.easeOut'
      });
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
      this.tweens.add({
        targets: container,
        scaleX: 0.96,
        scaleY: 0.96,
        duration: 80,
        yoyo: true
      });
      onClick();
    });

    return container;
  }
}

window.MenuScene = MenuScene;
