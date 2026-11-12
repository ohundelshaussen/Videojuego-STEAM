/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * MenuScene: Menú de Museo Minimalista, Elegante y sin Ruido Visual
 * I.E. Angela María Torres Suárez — Grado 11° | Proyecto STEAM
 */

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.cameras.main.fadeIn(450, 17, 13, 11);

    // ========================================================
    // 1. ESCENOGRAFÍA DE FONDO: GRAN VESTÍBULO DEL MUSEO
    // ========================================================
    const bg = this.add.graphics();
    // Paredes de piedra noble oscura
    bg.fillStyle(0x130e0c, 1);
    bg.fillRect(0, 0, width, height);

    // Pilastras arquitectónicas clásicas laterales
    bg.fillStyle(0x1b1410, 1);
    bg.fillRect(50, 40, 36, 440);
    bg.fillRect(width - 86, 40, 36, 440);
    bg.lineStyle(1, 0xf59e0b, 0.2);
    bg.strokeRect(50, 40, 36, 440);
    bg.strokeRect(width - 86, 40, 36, 440);

    // Suelo de mármol pulido
    bg.fillStyle(0x1a130f, 1);
    bg.fillRect(0, 420, width, 120);
    bg.lineStyle(1, 0xf59e0b, 0.35);
    bg.lineBetween(0, 420, width, 420);

    // Luz ambiental cenital suave
    bg.fillStyle(0xffffff, 0.02);
    bg.fillTriangle(width / 2, 0, 120, height, width - 120, height);

    // ========================================================
    // 2. TÍTULOS Y TIPOGRAFÍA DE MUSEO (SIN REDUNDANCIAS)
    // ========================================================
    // Sello superior discreto
    this.add.text(width / 2, 75, 'MUSEO NACIONAL DE COLOMBIA • GRADO 11°', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#f59e0b',
      letterSpacing: 2,
      fontStyle: 'bold'
    }).setOrigin(0.5);

    // Título Principal en Cinzel
    this.add.text(width / 2, 135, 'TESOROS DE COLOMBIA', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '44px',
      fontStyle: '900',
      color: '#ffffff',
      stroke: '#000000',
      strokeThickness: 4,
      shadow: { offsetX: 0, offsetY: 4, color: '#f59e0b', blur: 16, stroke: true, fill: true }
    }).setOrigin(0.5);

    // Subtítulo elegante
    this.add.text(width / 2, 185, 'Guardianes del Patrimonio Histórico', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '16px',
      color: '#d97706',
      fontStyle: 'bold',
      letterSpacing: 1
    }).setOrigin(0.5);

    // Filete tricolor muy sutil (2px)
    const tricolor = this.add.graphics();
    tricolor.fillStyle(0xfacc15, 0.9).fillRect(width / 2 - 120, 215, 80, 2);
    tricolor.fillStyle(0x2563eb, 0.9).fillRect(width / 2 - 40, 215, 80, 2);
    tricolor.fillStyle(0xdc2626, 0.9).fillRect(width / 2 + 40, 215, 80, 2);

    // ========================================================
    // 3. BOTONES DE ACCIÓN JERÁRQUICOS
    // ========================================================
    const btnYStart = 280;

    // Botón Primario Prominente: "INICIAR CURADURÍA"
    this.createPrimaryButton(width / 2, btnYStart, 290, 52, 'INICIAR CURADURÍA', () => {
      window.SoundEffects.playClick();
      this.cameras.main.fadeOut(350, 17, 13, 11);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        this.scene.start('GameScene');
      });
    });

    // Botones Secundarios en Marco de Cristal
    this.createSecondaryButton(width / 2 - 110, btnYStart + 76, 200, 40, 'CÓMO JUGAR', () => {
      window.SoundEffects.playClick();
      if (window.openModal) window.openModal('modal-guide');
    });

    this.createSecondaryButton(width / 2 + 110, btnYStart + 76, 200, 40, 'CRÉDITOS STEAM', () => {
      window.SoundEffects.playClick();
      if (window.openModal) window.openModal('modal-credits');
    });

    // ========================================================
    // 4. PARTÍCULAS AMBIENTALES SUTILES (Motes de polvo dorado)
    // ========================================================
    for (let i = 0; i < 15; i++) {
      const px = Phaser.Math.Between(80, width - 80);
      const py = Phaser.Math.Between(50, 460);
      const star = this.add.image(px, py, 'particle_gold')
        .setScale(Phaser.Math.FloatBetween(0.25, 0.5))
        .setAlpha(0.2);

      this.tweens.add({
        targets: star,
        y: py - Phaser.Math.Between(15, 45),
        alpha: { from: 0.1, to: 0.4 },
        duration: Phaser.Math.Between(3000, 5000),
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut',
        delay: Phaser.Math.Between(0, 1800)
      });
    }
  }

  /**
   * Botón Primario: Fondo degradado oro/ámbar con relieve
   */
  createPrimaryButton(x, y, w, h, text, onClick) {
    const container = this.add.container(x, y);

    const bg = this.add.graphics();
    bg.fillStyle(0xd97706, 1);
    bg.fillRoundedRect(-w / 2, -h / 2, w, h, 8);
    bg.fillStyle(0xf59e0b, 1);
    bg.fillRoundedRect(-w / 2 + 2, -h / 2 + 2, w - 4, h - 4, 6);
    container.add(bg);

    const label = this.add.text(0, 0, text, {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '15px',
      fontStyle: 'bold',
      color: '#130e0c',
      letterSpacing: 1.5
    }).setOrigin(0.5);
    container.add(label);

    container.setSize(w, h);
    container.setInteractive({ useHandCursor: true });

    container.on('pointerover', () => {
      this.tweens.add({ targets: container, scaleX: 1.04, scaleY: 1.04, duration: 120 });
      bg.clear();
      bg.fillStyle(0xfbbf24, 1);
      bg.fillRoundedRect(-w / 2, -h / 2, w, h, 8);
    });

    container.on('pointerout', () => {
      this.tweens.add({ targets: container, scaleX: 1.0, scaleY: 1.0, duration: 120 });
      bg.clear();
      bg.fillStyle(0xd97706, 1).fillRoundedRect(-w / 2, -h / 2, w, h, 8);
      bg.fillStyle(0xf59e0b, 1).fillRoundedRect(-w / 2 + 2, -h / 2 + 2, w - 4, h - 4, 6);
    });

    container.on('pointerdown', () => {
      this.tweens.add({ targets: container, scaleX: 0.97, scaleY: 0.97, duration: 70, yoyo: true });
      onClick();
    });

    return container;
  }

  /**
   * Botones Secundarios: Fondo oscuro con borde de cristal sutil
   */
  createSecondaryButton(x, y, w, h, text, onClick) {
    const container = this.add.container(x, y);

    const bg = this.add.graphics();
    bg.fillStyle(0x18120e, 0.9);
    bg.fillRoundedRect(-w / 2, -h / 2, w, h, 8);
    bg.lineStyle(1, 0xf59e0b, 0.4);
    bg.strokeRoundedRect(-w / 2, -h / 2, w, h, 8);
    container.add(bg);

    const label = this.add.text(0, 0, text, {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '12px',
      fontStyle: 'bold',
      color: '#e2e8f0',
      letterSpacing: 1
    }).setOrigin(0.5);
    container.add(label);

    container.setSize(w, h);
    container.setInteractive({ useHandCursor: true });

    container.on('pointerover', () => {
      this.tweens.add({ targets: container, scaleX: 1.03, scaleY: 1.03, duration: 120 });
      bg.clear();
      bg.fillStyle(0x251c16, 0.95);
      bg.fillRoundedRect(-w / 2, -h / 2, w, h, 8);
      bg.lineStyle(1, 0xfbbf24, 0.8);
      bg.strokeRoundedRect(-w / 2, -h / 2, w, h, 8);
      label.setColor('#ffffff');
    });

    container.on('pointerout', () => {
      this.tweens.add({ targets: container, scaleX: 1.0, scaleY: 1.0, duration: 120 });
      bg.clear();
      bg.fillStyle(0x18120e, 0.9);
      bg.fillRoundedRect(-w / 2, -h / 2, w, h, 8);
      bg.lineStyle(1, 0xf59e0b, 0.4);
      bg.strokeRoundedRect(-w / 2, -h / 2, w, h, 8);
      label.setColor('#e2e8f0');
    });

    container.on('pointerdown', () => {
      this.tweens.add({ targets: container, scaleX: 0.97, scaleY: 0.97, duration: 70, yoyo: true });
      onClick();
    });

    return container;
  }
}

window.MenuScene = MenuScene;
