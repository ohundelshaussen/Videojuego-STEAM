/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * BootScene: Generación Procedural de Texturas y Sprites Vectoriales
 * Rediseño con Acabado de Museo Real y Corrección de Sala 3
 */

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Fondo oscuro sobrio
    const bg = this.add.graphics();
    bg.fillStyle(0x110d0b, 1);
    bg.fillRect(0, 0, width, height);

    // Filete tricolor delgado superior (3px)
    const tricolor = this.add.graphics();
    tricolor.fillStyle(0xfacc15, 1).fillRect(width / 2 - 160, 160, 320, 2);
    tricolor.fillStyle(0x2563eb, 1).fillRect(width / 2 - 160, 162, 320, 1);
    tricolor.fillStyle(0xdc2626, 1).fillRect(width / 2 - 160, 163, 320, 1);

    // Título institucional sobrio
    this.add.text(width / 2, 195, 'MUSEO NACIONAL DE COLOMBIA', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '20px',
      color: '#f59e0b',
      fontStyle: 'bold',
      letterSpacing: 2
    }).setOrigin(0.5);

    this.add.text(width / 2, 226, 'CATALOGACIÓN DE COLECCIONES PATRIMONIALES', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#94a3b8',
      letterSpacing: 1.5
    }).setOrigin(0.5);

    // Barra de progreso estilizada
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x1c1613, 0.9);
    progressBox.lineStyle(1, 0xf59e0b, 0.5);
    progressBox.fillRoundedRect(width / 2 - 140, 265, 280, 14, 7);
    progressBox.strokeRoundedRect(width / 2 - 140, 265, 280, 14, 7);

    const progressBar = this.add.graphics();

    const statusText = this.add.text(width / 2, 305, 'Preparando vitrinas y fondos de exhibición...', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '11px',
      color: '#64748b'
    }).setOrigin(0.5);

    this.load.on('progress', (value) => {
      progressBar.clear();
      progressBar.fillStyle(0xf59e0b, 1);
      progressBar.fillRoundedRect(width / 2 - 138, 267, 276 * value, 10, 5);
    });

    this.load.on('complete', () => {
      statusText.setText('Inventario listo.');
    });
  }

  create() {
    this.generateMuseumEnvironmentTextures();
    this.generateArtifactTextures();
    this.generateUiAndEffectTextures();

    this.cameras.main.fadeOut(350, 17, 13, 11);
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
      this.scene.start('MenuScene');
    });
  }

  // ========================================================
  // GENERACIÓN DE VITRINAS CON CRISTAL BISELADO Y REFLEJO
  // ========================================================
  generateMuseumEnvironmentTextures() {
    // 1. Vitrina Sala 1: Precolombino (Ámbar / Oro)
    this.createVitrinaTexture('pedestal_precolombino', 0xf59e0b, 0x241810);

    // 2. Vitrina Sala 2: Independencia (Azul Colonial)
    this.createVitrinaTexture('pedestal_independencia', 0x3b82f6, 0x141a24);

    // 3. Vitrina Sala 3: Patrimonio Vivo (Verde Esmeralda)
    // FIX TÉCNICO: Clave exacta requerida por config y GameScene: 'pedestal_patrimonio_vivo'
    this.createVitrinaTexture('pedestal_patrimonio_vivo', 0x10b981, 0x122018);

    // 4. Bandeja inferior de restauración de Sara (650 x 120 px)
    const gTray = this.make.graphics({ x: 0, y: 0, add: false });
    // Marco exterior de ébano pulido
    gTray.fillStyle(0x161210, 0.98);
    gTray.fillRoundedRect(0, 0, 650, 120, 12);
    gTray.lineStyle(1, 0xf59e0b, 0.45);
    gTray.strokeRoundedRect(0, 0, 650, 120, 12);
    // Terciopelo interior
    gTray.fillStyle(0x1f1714, 0.85);
    gTray.fillRoundedRect(10, 10, 630, 100, 8);
    gTray.lineStyle(1, 0xffffff, 0.05);
    gTray.strokeRoundedRect(10, 10, 630, 100, 8);
    gTray.generateTexture('tray_bg', 650, 120);
    gTray.destroy();
  }

  /**
   * Helper para generar vitrinas de museo con reflejos de cristal y repisas
   */
  createVitrinaTexture(key, accentColor, bgTone) {
    const w = 230;
    const h = 250;
    const g = this.make.graphics({ x: 0, y: 0, add: false });

    // 1. Cristal de fondo translúcido con tonalidad de sala
    g.fillStyle(bgTone, 0.85);
    g.fillRoundedRect(0, 0, w, h, 10);

    // 2. Marco exterior biselado fino
    g.lineStyle(1, accentColor, 0.7);
    g.strokeRoundedRect(0, 0, w, h, 10);
    g.lineStyle(1, 0xffffff, 0.12);
    g.strokeRoundedRect(2, 2, w - 4, h - 4, 8);

    // 3. Cono de iluminación focalizada superior (Spotlight de galería)
    g.fillStyle(0xffffff, 0.03);
    g.fillTriangle(w / 2, 0, 20, h - 50, w - 20, h - 50);

    // 4. Reflejo de cristal biselado (destello diagonal suave)
    g.fillStyle(0xffffff, 0.05);
    g.fillTriangle(10, 40, 110, 40, 30, 160);
    g.fillStyle(0xffffff, 0.03);
    g.fillTriangle(115, 40, 145, 40, 65, 160);

    // 5. Repisa inferior de exhibición (Madera/Piedra pulida)
    g.fillStyle(0x1d1612, 1);
    g.fillRect(18, 185, w - 36, 18);
    g.fillStyle(0x2d221c, 1);
    g.fillRect(12, 203, w - 24, 28);

    // Filete luminoso sobre la repisa
    g.fillStyle(accentColor, 0.85);
    g.fillRect(16, 203, w - 32, 2);

    // Bisel de sombra bajo la repisa
    g.fillStyle(0x0a0706, 0.7);
    g.fillRect(12, 231, w - 24, 6);

    // 6. Placa superior de vitrina
    g.fillStyle(0x130e0c, 0.9);
    g.fillRoundedRect(6, 6, w - 12, 32, 6);
    g.lineStyle(1, accentColor, 0.35);
    g.strokeRoundedRect(6, 6, w - 12, 32, 6);

    g.generateTexture(key, w, h);
    g.destroy();
  }

  // ========================================================
  // GENERACIÓN DE LOS 12 ARTEFACTOS COLOMBIANOS
  // ========================================================
  generateArtifactTextures() {
    // 1. BALSA MUISCA (100 x 80 px)
    const g1 = this.make.graphics({ x: 0, y: 0, add: false });
    g1.fillStyle(0xfef08a, 0.12).fillCircle(50, 40, 36);
    g1.fillStyle(0xd97706, 1).fillRoundedRect(15, 52, 70, 12, 6);
    g1.fillStyle(0xf59e0b, 1).fillRoundedRect(18, 50, 64, 8, 4);
    g1.lineStyle(2, 0xb45309, 1).strokeCircle(20, 56, 4).strokeCircle(80, 56, 4);
    g1.fillStyle(0xfbbf24, 1).fillCircle(50, 24, 7);
    g1.fillStyle(0xd97706, 1).fillTriangle(44, 18, 56, 18, 50, 10);
    g1.fillStyle(0xf59e0b, 1).fillRect(46, 32, 8, 18);
    g1.fillStyle(0xd97706, 1).fillCircle(34, 36, 4).fillRect(32, 40, 4, 10);
    g1.fillStyle(0xd97706, 1).fillCircle(66, 36, 4).fillRect(64, 40, 4, 10);
    g1.generateTexture('art_balsa_muisca', 100, 80);
    g1.destroy();

    // 2. POPORO QUIMBAYA (80 x 95 px)
    const g2 = this.make.graphics({ x: 0, y: 0, add: false });
    g2.fillStyle(0xfef08a, 0.12).fillCircle(40, 50, 34);
    g2.fillStyle(0xd97706, 1).fillCircle(40, 62, 22);
    g2.fillStyle(0xfbbf24, 1).fillCircle(40, 60, 20);
    g2.fillStyle(0xf59e0b, 1).fillRect(35, 30, 10, 18);
    g2.fillStyle(0xfbbf24, 1).fillCircle(28, 26, 8).fillCircle(52, 26, 8).fillCircle(34, 16, 7).fillCircle(46, 16, 7);
    g2.lineStyle(2, 0xd97706, 1).lineBetween(40, 8, 40, 36);
    g2.fillCircle(40, 7, 3);
    g2.generateTexture('art_poporo_quimbaya', 80, 95);
    g2.destroy();

    // 3. ESTATUA DE SAN AGUSTÍN (80 x 95 px)
    const g3 = this.make.graphics({ x: 0, y: 0, add: false });
    g3.fillStyle(0x57534e, 1).fillRoundedRect(22, 10, 36, 76, 8);
    g3.fillStyle(0x78716c, 1).fillRoundedRect(25, 13, 30, 70, 6);
    g3.fillStyle(0x44403c, 1).fillRect(26, 14, 28, 12);
    g3.fillStyle(0x1c1917, 1).fillCircle(33, 34, 3).fillCircle(47, 34, 3);
    g3.lineStyle(2, 0x1c1917, 1).lineBetween(31, 44, 49, 44);
    g3.fillStyle(0xfafaf9, 1).fillTriangle(34, 43, 37, 43, 35, 48).fillTriangle(43, 43, 46, 43, 45, 48);
    g3.fillStyle(0x44403c, 1).fillRect(30, 54, 20, 8);
    g3.generateTexture('art_estatua_san_agustin', 80, 95);
    g3.destroy();

    // 4. PECTORAL TAIRONA (90 x 85 px)
    const g4 = this.make.graphics({ x: 0, y: 0, add: false });
    g4.fillStyle(0xfef08a, 0.12).fillCircle(45, 42, 34);
    g4.fillStyle(0xd97706, 1).fillTriangle(45, 40, 10, 25, 15, 65).fillTriangle(45, 40, 80, 25, 75, 65);
    g4.fillStyle(0xf59e0b, 1).fillCircle(45, 38, 14);
    g4.fillStyle(0xfbbf24, 1).fillCircle(45, 36, 11);
    g4.lineStyle(2.5, 0xd97706, 1).strokeCircle(25, 38, 6).strokeCircle(65, 38, 6).lineBetween(36, 20, 54, 20);
    g4.generateTexture('art_pectoral_tairona', 90, 85);
    g4.destroy();

    // 5. FLORERO DE LLORENTE (80 x 90 px)
    const g5 = this.make.graphics({ x: 0, y: 0, add: false });
    g5.fillStyle(0xf1f5f9, 1).fillCircle(40, 52, 22).fillRect(32, 22, 16, 20).fillRoundedRect(28, 18, 24, 8, 3).fillRect(30, 72, 20, 8);
    g5.lineStyle(3, 0x38bdf8, 1).strokeCircle(22, 42, 8).strokeCircle(58, 42, 8);
    g5.lineStyle(2, 0x1d4ed8, 1).lineBetween(32, 52, 48, 52).strokeCircle(40, 52, 6);
    g5.generateTexture('art_florero_llorente', 80, 90);
    g5.destroy();

    // 6. ESPADA LIBERTADORA DE BOLÍVAR (90 x 50 px)
    const g6 = this.make.graphics({ x: 0, y: 0, add: false });
    g6.lineStyle(4, 0xe2e8f0, 1).lineBetween(28, 35, 82, 12);
    g6.lineStyle(2, 0xffffff, 1).lineBetween(30, 34, 80, 13);
    g6.fillStyle(0xf59e0b, 1).fillCircle(28, 36, 7);
    g6.fillStyle(0xd97706, 1).fillRect(18, 39, 10, 4).fillCircle(16, 41, 4);
    g6.lineStyle(2, 0xfacc15, 1).lineBetween(14, 43, 10, 46);
    g6.lineStyle(2, 0x2563eb, 1).lineBetween(12, 45, 8, 48);
    g6.lineStyle(2, 0xdc2626, 1).lineBetween(10, 47, 6, 50);
    g6.generateTexture('art_espada_bolivar', 90, 50);
    g6.destroy();

    // 7. CARTAS SECRETAS DE POLICARPA (80 x 80 px)
    const g7 = this.make.graphics({ x: 0, y: 0, add: false });
    g7.fillStyle(0xfef08a, 0.95).fillRoundedRect(16, 12, 48, 56, 4);
    g7.lineStyle(1.5, 0xd97706, 0.6).strokeRoundedRect(16, 12, 48, 56, 4);
    g7.lineStyle(1.5, 0x78350f, 0.7);
    g7.lineBetween(22, 22, 58, 22).lineBetween(22, 28, 54, 28).lineBetween(22, 34, 58, 34).lineBetween(22, 40, 48, 40);
    g7.fillStyle(0xdc2626, 1).fillCircle(52, 54, 7).fillCircle(52, 54, 4);
    g7.lineStyle(2, 0xffffff, 0.9).lineBetween(58, 44, 72, 18);
    g7.generateTexture('art_cartas_policarpa', 80, 80);
    g7.destroy();

    // 8. MURALLAS DE CARTAGENA (90 x 80 px)
    const g8 = this.make.graphics({ x: 0, y: 0, add: false });
    g8.fillStyle(0x94a3b8, 1).fillRect(12, 36, 66, 36);
    g8.fillStyle(0xcbd5e1, 1).fillRect(14, 38, 62, 32);
    g8.fillStyle(0x64748b, 1).fillRect(14, 28, 12, 10).fillRect(32, 28, 12, 10).fillRect(50, 28, 12, 10);
    g8.fillStyle(0x475569, 1).fillRect(62, 18, 16, 22);
    g8.fillStyle(0xd97706, 1).fillCircle(70, 16, 9);
    g8.fillStyle(0x0f172a, 1).fillRect(68, 24, 4, 8);
    g8.generateTexture('art_murallas_cartagena', 90, 80);
    g8.destroy();

    // 9. SOMBRERO VUELTIAO (95 x 70 px)
    const g9 = this.make.graphics({ x: 0, y: 0, add: false });
    g9.fillStyle(0xfef9c3, 1).fillEllipse(47, 44, 42, 18);
    g9.lineStyle(2.5, 0x18181b, 1).strokeEllipse(47, 44, 42, 18);
    g9.lineStyle(2, 0x18181b, 1).strokeEllipse(47, 44, 32, 13);
    g9.fillStyle(0xfef08a, 1).fillRoundedRect(30, 20, 34, 24, 6);
    g9.lineStyle(2, 0x18181b, 1).strokeRoundedRect(30, 20, 34, 24, 6);
    g9.fillStyle(0x18181b, 1).fillRect(30, 38, 34, 6);
    g9.generateTexture('art_sombrero_vueltiao', 95, 70);
    g9.destroy();

    // 10. MARIMBA DE CHONTA (90 x 75 px)
    const g10 = this.make.graphics({ x: 0, y: 0, add: false });
    g10.fillStyle(0x78350f, 1).fillRect(10, 28, 70, 8);
    for (let i = 0; i < 9; i++) {
      const keyHeight = 16 + i * 2.5;
      g10.fillStyle(0xb45309, 1).fillRect(12 + i * 7.5, 14 - i * 0.5, 5, keyHeight);
      g10.fillStyle(0x15803d, 0.8).fillRect(12 + i * 7.5, 38, 5, 18 + i * 1.5);
    }
    g10.lineStyle(2, 0xfde047, 1).lineBetween(18, 56, 42, 68).lineBetween(42, 56, 18, 68);
    g10.fillStyle(0x1c1917, 1).fillCircle(18, 56, 4).fillCircle(42, 56, 4);
    g10.generateTexture('art_marimba_chonta', 90, 75);
    g10.destroy();

    // 11. CANASTO CAFETERO (80 x 85 px)
    const g11 = this.make.graphics({ x: 0, y: 0, add: false });
    g11.fillStyle(0xb45309, 1).fillTriangle(40, 78, 14, 30, 66, 30).fillRoundedRect(18, 34, 44, 40, 8);
    g11.fillStyle(0xd97706, 1).fillEllipse(40, 30, 26, 8);
    g11.fillStyle(0xdc2626, 1).fillCircle(34, 26, 5).fillCircle(42, 24, 6).fillCircle(48, 27, 5);
    g11.fillStyle(0x16a34a, 1).fillCircle(38, 28, 4);
    g11.lineStyle(2, 0x78350f, 1).lineBetween(16, 34, 40, 52);
    g11.generateTexture('art_canasto_cafetero', 80, 85);
    g11.destroy();

    // 12. SILLETA FLORAL DE MEDELLÍN (90 x 90 px)
    const g12 = this.make.graphics({ x: 0, y: 0, add: false });
    g12.fillStyle(0x78350f, 1).fillCircle(45, 45, 38);
    g12.fillStyle(0x15803d, 1).fillCircle(45, 45, 34);
    const colors = [0xec4899, 0xfacc15, 0xf97316, 0xef4444, 0xa855f7, 0x38bdf8];
    for (let a = 0; a < 12; a++) {
      const angle = (a * 30 * Math.PI) / 180;
      const x = 45 + Math.cos(angle) * 24;
      const y = 45 + Math.sin(angle) * 24;
      g12.fillStyle(colors[a % colors.length], 1).fillCircle(x, y, 7);
      g12.fillStyle(0xffffff, 0.8).fillCircle(x, y, 2.5);
    }
    g12.fillStyle(0xf59e0b, 1).fillCircle(45, 45, 12);
    g12.fillStyle(0x78350f, 1).fillCircle(45, 45, 6);
    g12.lineStyle(3, 0xfacc15, 1).lineBetween(40, 78, 40, 88);
    g12.lineStyle(3, 0x2563eb, 1).lineBetween(45, 78, 45, 88);
    g12.lineStyle(3, 0xdc2626, 1).lineBetween(50, 78, 50, 88);
    g12.generateTexture('art_silleta_floral', 90, 90);
    g12.destroy();
  }

  // ========================================================
  // GENERACIÓN DE ÍCONOS VECTORIALES DE UI Y PARTÍCULAS
  // ========================================================
  generateUiAndEffectTextures() {
    // 1. Lupa Vectorial Activa (Dorada pulida con reflejo de cristal)
    const gLupa = this.make.graphics({ x: 0, y: 0, add: false });
    // Aro dorado
    gLupa.lineStyle(2.5, 0xf59e0b, 1).strokeCircle(12, 12, 9);
    // Lente de cristal
    gLupa.fillStyle(0xfde68a, 0.25).fillCircle(12, 12, 8);
    gLupa.fillStyle(0xffffff, 0.6).fillTriangle(8, 7, 13, 7, 7, 13);
    // Mango de madera y virola
    gLupa.lineStyle(3.5, 0xb45309, 1).lineBetween(19, 19, 27, 27);
    gLupa.lineStyle(2, 0xf59e0b, 1).lineBetween(17, 17, 20, 20);
    gLupa.generateTexture('icon_lupa', 30, 30);
    gLupa.destroy();

    // 2. Lupa Vectorial Perdida (Silueta oscura translúcida sobria)
    const gLupaLost = this.make.graphics({ x: 0, y: 0, add: false });
    gLupaLost.lineStyle(1.5, 0x475569, 0.45).strokeCircle(12, 12, 9);
    gLupaLost.fillStyle(0x1e293b, 0.35).fillCircle(12, 12, 8);
    gLupaLost.lineStyle(2.5, 0x334155, 0.45).lineBetween(19, 19, 27, 27);
    gLupaLost.generateTexture('icon_lupa_lost', 30, 30);
    gLupaLost.destroy();

    // 3. Partícula de Estrella / Destello Dorado
    const gStar = this.make.graphics({ x: 0, y: 0, add: false });
    gStar.fillStyle(0xfde047, 1);
    gStar.fillTriangle(8, 0, 10, 6, 16, 8);
    gStar.fillTriangle(16, 8, 10, 10, 8, 16);
    gStar.fillTriangle(8, 16, 6, 10, 0, 8);
    gStar.fillTriangle(0, 8, 6, 6, 8, 0);
    gStar.generateTexture('particle_gold', 16, 16);
    gStar.destroy();

    // 4. Medalla de Diploma de Curador
    const gMedal = this.make.graphics({ x: 0, y: 0, add: false });
    gMedal.fillStyle(0xf59e0b, 1).fillCircle(30, 26, 20);
    gMedal.lineStyle(2, 0xfef08a, 1).strokeCircle(30, 26, 17);
    gMedal.fillStyle(0xdc2626, 1).fillTriangle(22, 40, 14, 60, 26, 54);
    gMedal.fillStyle(0x2563eb, 1).fillTriangle(38, 40, 46, 60, 34, 54);
    gMedal.generateTexture('medal_diploma', 60, 64);
    gMedal.destroy();
  }
}

window.BootScene = BootScene;
