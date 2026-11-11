/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * BootScene: Generación Procedural de Texturas y Sprites Vectoriales
 * Garantiza portabilidad escolar 100% offline sin errores 404 de imágenes
 */

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // Renderizado de Barra de Carga de Museo
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    // Fondo cálido de carga
    const bg = this.add.graphics();
    bg.fillStyle(0x130f0d, 1);
    bg.fillRect(0, 0, width, height);

    // Borde tricolor superior
    const tricolor = this.add.graphics();
    tricolor.fillStyle(0xfacc15, 1).fillRect(width / 2 - 180, 150, 360, 4);
    tricolor.fillStyle(0x2563eb, 1).fillRect(width / 2 - 180, 154, 360, 2);
    tricolor.fillStyle(0xdc2626, 1).fillRect(width / 2 - 180, 156, 360, 2);

    // Título de precarga
    this.add.text(width / 2, 190, 'MUSEO NACIONAL DE COLOMBIA', {
      fontFamily: 'Cinzel, Georgia, serif',
      fontSize: '22px',
      color: '#f59e0b',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(width / 2, 225, 'Inventario y Catalogación de Reliquias Históricas', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '13px',
      color: '#cbd5e1'
    }).setOrigin(0.5);

    // Barra de progreso interactiva
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x241c18, 0.9);
    progressBox.lineStyle(2, 0xf59e0b, 0.8);
    progressBox.fillRoundedRect(width / 2 - 160, 270, 320, 24, 12);
    progressBox.strokeRoundedRect(width / 2 - 160, 270, 320, 24, 12);

    const progressBar = this.add.graphics();

    const loadingText = this.add.text(width / 2, 320, 'Generando texturas vectoriales de alta fidelidad...', {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      fontSize: '12px',
      color: '#94a3b8'
    }).setOrigin(0.5);

    // Simulación suave de carga
    this.load.on('progress', (value) => {
      progressBar.clear();
      progressBar.fillStyle(0xf59e0b, 1);
      progressBar.fillRoundedRect(width / 2 - 156, 274, 312 * value, 16, 8);
    });

    this.load.on('complete', () => {
      loadingText.setText('¡Inventario catalogado con éxito! Iniciando museo...');
    });
  }

  create() {
    // Generar todas las texturas procedurales vectoriales con Canvas Graphics
    this.generateMuseumEnvironmentTextures();
    this.generateArtifactTextures();
    this.generateUiAndEffectTextures();

    // Transición suave hacia el Menú Principal
    this.cameras.main.fadeOut(400, 19, 15, 13);
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
      this.scene.start('MenuScene');
    });
  }

  // ========================================================
  // GENERACIÓN DE TEXTURAS DE VITRINAS Y ENTORNO
  // ========================================================
  generateMuseumEnvironmentTextures() {
    // 1. Vitrina Sala 1: Precolombino (Mármol y Oro)
    const gPre = this.make.graphics({ x: 0, y: 0, add: false });
    // Marco exterior con vidrio translúcido
    gPre.fillStyle(0x1a1512, 0.7);
    gPre.fillRoundedRect(0, 0, 230, 250, 12);
    gPre.lineStyle(2, 0xf59e0b, 0.8);
    gPre.strokeRoundedRect(0, 0, 230, 250, 12);
    // Relieve superior dorado
    gPre.fillStyle(0xf59e0b, 0.25);
    gPre.fillRect(8, 8, 214, 32);
    // Pedestal inferior de piedra dorada
    gPre.fillStyle(0x291e14, 1);
    gPre.fillRect(25, 175, 180, 20);
    gPre.fillStyle(0x3d2c1d, 1);
    gPre.fillRect(15, 195, 200, 25);
    gPre.fillStyle(0xf59e0b, 0.9);
    gPre.fillRect(20, 216, 190, 4); // Filete dorado
    // Rayas decorativas de zona de soltado
    gPre.lineStyle(1.5, 0xf59e0b, 0.35);
    gPre.strokeRoundedRect(16, 48, 198, 120, 8);
    gPre.generateTexture('pedestal_precolombino', 230, 250);
    gPre.destroy();

    // 2. Vitrina Sala 2: Independencia (Azul Colonial y Dorado)
    const gInd = this.make.graphics({ x: 0, y: 0, add: false });
    gInd.fillStyle(0x121724, 0.75);
    gInd.fillRoundedRect(0, 0, 230, 250, 12);
    gInd.lineStyle(2, 0x3b82f6, 0.85);
    gInd.strokeRoundedRect(0, 0, 230, 250, 12);
    // Encabezado colonial
    gInd.fillStyle(0x1d4ed8, 0.35);
    gInd.fillRect(8, 8, 214, 32);
    // Pedestal republicano
    gInd.fillStyle(0x1e293b, 1);
    gInd.fillRect(25, 175, 180, 20);
    gInd.fillStyle(0x334155, 1);
    gInd.fillRect(15, 195, 200, 25);
    gInd.fillStyle(0x60a5fa, 0.9);
    gInd.fillRect(20, 216, 190, 4);
    gInd.lineStyle(1.5, 0x3b82f6, 0.35);
    gInd.strokeRoundedRect(16, 48, 198, 120, 8);
    gInd.generateTexture('pedestal_independencia', 230, 250);
    gInd.destroy();

    // 3. Vitrina Sala 3: Patrimonio Vivo (Verde Esmeralda y Caña)
    const gPat = this.make.graphics({ x: 0, y: 0, add: false });
    gPat.fillStyle(0x112218, 0.75);
    gPat.fillRoundedRect(0, 0, 230, 250, 12);
    gPat.lineStyle(2, 0x10b981, 0.85);
    gPat.strokeRoundedRect(0, 0, 230, 250, 12);
    // Encabezado de tradición
    gPat.fillStyle(0x065f46, 0.35);
    gPat.fillRect(8, 8, 214, 32);
    // Pedestal de madera y palma
    gPat.fillStyle(0x27272a, 1);
    gPat.fillRect(25, 175, 180, 20);
    gPat.fillStyle(0x3f3f46, 1);
    gPat.fillRect(15, 195, 200, 25);
    gPat.fillStyle(0x34d399, 0.9);
    gPat.fillRect(20, 216, 190, 4);
    gPat.lineStyle(1.5, 0x10b981, 0.35);
    gPat.strokeRoundedRect(16, 48, 198, 120, 8);
    gPat.generateTexture('pedestal_patrimonio', 230, 250);
    gPat.destroy();

    // 4. Bandeja inferior de restauración de Sara (650 x 120 px)
    const gTray = this.make.graphics({ x: 0, y: 0, add: false });
    gTray.fillStyle(0x181310, 0.95);
    gTray.fillRoundedRect(0, 0, 650, 120, 14);
    gTray.lineStyle(2, 0xf59e0b, 0.7);
    gTray.strokeRoundedRect(0, 0, 650, 120, 14);
    // Terciopelo interior
    gTray.fillStyle(0x2b1c14, 0.8);
    gTray.fillRoundedRect(12, 12, 626, 96, 10);
    gTray.lineStyle(1, 0xfbbf24, 0.3);
    gTray.strokeRoundedRect(12, 12, 626, 96, 10);
    gTray.generateTexture('tray_bg', 650, 120);
    gTray.destroy();
  }

  // ========================================================
  // GENERACIÓN DE LOS 12 ARTEFACTOS COLOMBIANOS
  // ========================================================
  generateArtifactTextures() {
    // --- 1. BALSA MUISCA (100 x 80 px) ---
    const g1 = this.make.graphics({ x: 0, y: 0, add: false });
    // Halo dorado suave
    g1.fillStyle(0xfef08a, 0.15).fillCircle(50, 40, 36);
    // Balsa base curvada
    g1.fillStyle(0xd97706, 1).fillRoundedRect(15, 52, 70, 12, 6);
    g1.fillStyle(0xf59e0b, 1).fillRoundedRect(18, 50, 64, 8, 4);
    // Extremos de maderos atados
    g1.lineStyle(2, 0xb45309, 1);
    g1.strokeCircle(20, 56, 4);
    g1.strokeCircle(80, 56, 4);
    // Cacique central dorado alto
    g1.fillStyle(0xfbbf24, 1).fillCircle(50, 24, 7); // Cabeza
    g1.fillStyle(0xd97706, 1).fillTriangle(44, 18, 56, 18, 50, 10); // Tocado triangular
    g1.fillStyle(0xf59e0b, 1).fillRect(46, 32, 8, 18); // Tronco
    // Sacerdotes y remeros acompañantes
    g1.fillStyle(0xd97706, 1).fillCircle(34, 36, 4);
    g1.fillRect(32, 40, 4, 10);
    g1.fillStyle(0xd97706, 1).fillCircle(66, 36, 4);
    g1.fillRect(64, 40, 4, 10);
    g1.generateTexture('art_balsa_muisca', 100, 80);
    g1.destroy();

    // --- 2. POPORO QUIMBAYA (80 x 95 px) ---
    const g2 = this.make.graphics({ x: 0, y: 0, add: false });
    g2.fillStyle(0xfef08a, 0.15).fillCircle(40, 50, 34);
    // Base globular inferior
    g2.fillStyle(0xd97706, 1).fillCircle(40, 62, 22);
    g2.fillStyle(0xfbbf24, 1).fillCircle(40, 60, 20);
    // Cuello esbelto
    g2.fillStyle(0xf59e0b, 1).fillRect(35, 30, 10, 18);
    // Cuatro esferas superiores características
    g2.fillStyle(0xfbbf24, 1);
    g2.fillCircle(28, 26, 8);
    g2.fillCircle(52, 26, 8);
    g2.fillCircle(34, 16, 7);
    g2.fillCircle(46, 16, 7);
    // Alfiler central con remate
    g2.lineStyle(2, 0xd97706, 1).lineBetween(40, 8, 40, 36);
    g2.fillCircle(40, 7, 3);
    g2.generateTexture('art_poporo_quimbaya', 80, 95);
    g2.destroy();

    // --- 3. ESTATUA DE SAN AGUSTÍN (80 x 95 px) ---
    const g3 = this.make.graphics({ x: 0, y: 0, add: false });
    // Bloque monolítico de piedra volcánica
    g3.fillStyle(0x57534e, 1).fillRoundedRect(22, 10, 36, 76, 8);
    g3.fillStyle(0x78716c, 1).fillRoundedRect(25, 13, 30, 70, 6);
    // Tocado ceremonial tallado
    g3.fillStyle(0x44403c, 1).fillRect(26, 14, 28, 12);
    // Ojos almendrados y colmillos felinos
    g3.fillStyle(0x1c1917, 1);
    g3.fillCircle(33, 34, 3);
    g3.fillCircle(47, 34, 3);
    // Boca ancha con colmillos cruzados
    g3.lineStyle(2, 0x1c1917, 1).lineBetween(31, 44, 49, 44);
    g3.fillStyle(0xfafaf9, 1);
    g3.fillTriangle(34, 43, 37, 43, 35, 48);
    g3.fillTriangle(43, 43, 46, 43, 45, 48);
    // Manos sobre el pecho
    g3.fillStyle(0x44403c, 1).fillRect(30, 54, 20, 8);
    g3.generateTexture('art_estatua_san_agustin', 80, 95);
    g3.destroy();

    // --- 4. PECTORAL TAIRONA (90 x 85 px) ---
    const g4 = this.make.graphics({ x: 0, y: 0, add: false });
    g4.fillStyle(0xfef08a, 0.15).fillCircle(45, 42, 34);
    // Alas pectorales extendidas (Hombre-Murciélago)
    g4.fillStyle(0xd97706, 1);
    g4.fillTriangle(45, 40, 10, 25, 15, 65);
    g4.fillTriangle(45, 40, 80, 25, 75, 65);
    // Cuerpo y máscara central
    g4.fillStyle(0xf59e0b, 1).fillCircle(45, 38, 14);
    g4.fillStyle(0xfbbf24, 1).fillCircle(45, 36, 11);
    // Espirales de orejeras y tocado
    g4.lineStyle(2.5, 0xd97706, 1);
    g4.strokeCircle(25, 38, 6);
    g4.strokeCircle(65, 38, 6);
    g4.lineBetween(36, 20, 54, 20);
    g4.generateTexture('art_pectoral_tairona', 90, 85);
    g4.destroy();

    // --- 5. FLORERO DE LLORENTE (80 x 90 px) ---
    const g5 = this.make.graphics({ x: 0, y: 0, add: false });
    // Porcelana blanca / marfil con sombras
    g5.fillStyle(0xf1f5f9, 1);
    g5.fillCircle(40, 52, 22); // Panza del florero
    g5.fillRect(32, 22, 16, 20); // Cuello
    g5.fillRoundedRect(28, 18, 24, 8, 3); // Boca superior
    g5.fillRect(30, 72, 20, 8); // Base pedestal
    // Asas decorativas curvas
    g5.lineStyle(3, 0x38bdf8, 1);
    g5.strokeCircle(22, 42, 8);
    g5.strokeCircle(58, 42, 8);
    // Decoraciones coloniales azul cobalto
    g5.lineStyle(2, 0x1d4ed8, 1);
    g5.lineBetween(32, 52, 48, 52);
    g5.strokeCircle(40, 52, 6);
    g5.generateTexture('art_florero_llorente', 80, 90);
    g5.destroy();

    // --- 6. ESPADA LIBERTADORA DE BOLÍVAR (90 x 50 px) ---
    const g6 = this.make.graphics({ x: 0, y: 0, add: false });
    // Hoja de acero toledano brillante
    g6.lineStyle(4, 0xe2e8f0, 1).lineBetween(28, 35, 82, 12);
    g6.lineStyle(2, 0xffffff, 1).lineBetween(30, 34, 80, 13);
    // Guarda y cazoleta dorada
    g6.fillStyle(0xf59e0b, 1).fillCircle(28, 36, 7);
    g6.fillStyle(0xd97706, 1).fillRect(18, 39, 10, 4); // Empuñadura
    g6.fillCircle(16, 41, 4); // Pomo
    // Cinta tricolor decorativa
    g6.lineStyle(2, 0xfacc15, 1).lineBetween(14, 43, 10, 46);
    g6.lineStyle(2, 0x2563eb, 1).lineBetween(12, 45, 8, 48);
    g6.lineStyle(2, 0xdc2626, 1).lineBetween(10, 47, 6, 50);
    g6.generateTexture('art_espada_bolivar', 90, 50);
    g6.destroy();

    // --- 7. CARTAS SECRETAS DE POLICARPA (80 x 80 px) ---
    const g7 = this.make.graphics({ x: 0, y: 0, add: false });
    // Pliego de pergamino colonial doblado
    g7.fillStyle(0xfef08a, 0.95).fillRoundedRect(16, 12, 48, 56, 4);
    g7.lineStyle(1.5, 0xd97706, 0.6).strokeRoundedRect(16, 12, 48, 56, 4);
    // Líneas simuladas de caligrafía antigua
    g7.lineStyle(1.5, 0x78350f, 0.7);
    g7.lineBetween(22, 22, 58, 22);
    g7.lineBetween(22, 28, 54, 28);
    g7.lineBetween(22, 34, 58, 34);
    g7.lineBetween(22, 40, 48, 40);
    // Sello rojo lacrado de cera
    g7.fillStyle(0xdc2626, 1).fillCircle(52, 54, 7);
    g7.fillStyle(0x991b1b, 1).fillCircle(52, 54, 4);
    // Pluma de ave
    g7.lineStyle(2, 0xffffff, 0.9).lineBetween(58, 44, 72, 18);
    g7.generateTexture('art_cartas_policarpa', 80, 80);
    g7.destroy();

    // --- 8. MURALLAS DE CARTAGENA (90 x 80 px) ---
    const g8 = this.make.graphics({ x: 0, y: 0, add: false });
    // Paredón de piedra coralina
    g8.fillStyle(0x94a3b8, 1).fillRect(12, 36, 66, 36);
    g8.fillStyle(0xcbd5e1, 1).fillRect(14, 38, 62, 32);
    // Almenas superiores
    g8.fillStyle(0x64748b, 1);
    g8.fillRect(14, 28, 12, 10);
    g8.fillRect(32, 28, 12, 10);
    g8.fillRect(50, 28, 12, 10);
    // Garita de vigilancia colonial con cúpula
    g8.fillStyle(0x475569, 1).fillRect(62, 18, 16, 22);
    g8.fillStyle(0xd97706, 1).fillCircle(70, 16, 9); // Cúpula
    // Aspillera / tronera de disparo
    g8.fillStyle(0x0f172a, 1).fillRect(68, 24, 4, 8);
    g8.generateTexture('art_murallas_cartagena', 90, 80);
    g8.destroy();

    // --- 9. SOMBRERO VUELTIAO (95 x 70 px) ---
    const g9 = this.make.graphics({ x: 0, y: 0, add: false });
    // Ala exterior ancha en caña flecha
    g9.fillStyle(0xfef9c3, 1).fillEllipse(47, 44, 42, 18);
    g9.lineStyle(2.5, 0x18181b, 1).strokeEllipse(47, 44, 42, 18);
    // Franjas concéntricas negras de pintas Zenú
    g9.lineStyle(2, 0x18181b, 1).strokeEllipse(47, 44, 32, 13);
    // Copa central
    g9.fillStyle(0xfef08a, 1).fillRoundedRect(30, 20, 34, 24, 6);
    g9.lineStyle(2, 0x18181b, 1).strokeRoundedRect(30, 20, 34, 24, 6);
    // Cinta negra de la copa
    g9.fillStyle(0x18181b, 1).fillRect(30, 38, 34, 6);
    g9.generateTexture('art_sombrero_vueltiao', 95, 70);
    g9.destroy();

    // --- 10. MARIMBA DE CHONTA (90 x 75 px) ---
    const g10 = this.make.graphics({ x: 0, y: 0, add: false });
    // Marco de madera
    g10.fillStyle(0x78350f, 1).fillRect(10, 28, 70, 8);
    // Tablas de chonta ordenadas por longitud (teclas)
    const keyWidth = 5;
    for (let i = 0; i < 9; i++) {
      const keyHeight = 16 + i * 2.5;
      g10.fillStyle(0xb45309, 1).fillRect(12 + i * 7.5, 14 - i * 0.5, keyWidth, keyHeight);
      // Tubos de guadua resonadores abajo
      g10.fillStyle(0x15803d, 0.8).fillRect(12 + i * 7.5, 38, keyWidth, 18 + i * 1.5);
    }
    // Baquetas cruzadas con punta de caucho crudo
    g10.lineStyle(2, 0xfde047, 1);
    g10.lineBetween(18, 56, 42, 68);
    g10.lineBetween(42, 56, 18, 68);
    g10.fillStyle(0x1c1917, 1);
    g10.fillCircle(18, 56, 4);
    g10.fillCircle(42, 56, 4);
    g10.generateTexture('art_marimba_chonta', 90, 75);
    g10.destroy();

    // --- 11. CANASTO CAFETERO (80 x 85 px) ---
    const g11 = this.make.graphics({ x: 0, y: 0, add: false });
    // Cuerpo cónico de bejuco
    g11.fillStyle(0xb45309, 1);
    g11.fillTriangle(40, 78, 14, 30, 66, 30);
    g11.fillRoundedRect(18, 34, 44, 40, 8);
    // Borde trenzado superior
    g11.fillStyle(0xd97706, 1).fillEllipse(40, 30, 26, 8);
    // Cerezas de café maduro rojas y granos verdes
    g11.fillStyle(0xdc2626, 1);
    g11.fillCircle(34, 26, 5);
    g11.fillCircle(42, 24, 6);
    g11.fillCircle(48, 27, 5);
    g11.fillStyle(0x16a34a, 1).fillCircle(38, 28, 4);
    // Correa de faja campesina
    g11.lineStyle(2, 0x78350f, 1).lineBetween(16, 34, 40, 52);
    g11.generateTexture('art_canasto_cafetero', 80, 85);
    g11.destroy();

    // --- 12. SILLETA FLORAL DE MEDELLÍN (90 x 90 px) ---
    const g12 = this.make.graphics({ x: 0, y: 0, add: false });
    // Estructura circular de madera
    g12.fillStyle(0x78350f, 1).fillCircle(45, 45, 38);
    g12.fillStyle(0x15803d, 1).fillCircle(45, 45, 34); // Follaje verde
    // Corona de flores multicolores
    const colors = [0xec4899, 0xfacc15, 0xf97316, 0xef4444, 0xa855f7, 0x38bdf8];
    for (let a = 0; a < 12; a++) {
      const angle = (a * 30 * Math.PI) / 180;
      const x = 45 + Math.cos(angle) * 24;
      const y = 45 + Math.sin(angle) * 24;
      g12.fillStyle(colors[a % colors.length], 1).fillCircle(x, y, 7);
      g12.fillStyle(0xffffff, 0.8).fillCircle(x, y, 2.5);
    }
    // Flor central emblemática (Orquídea / Girasol)
    g12.fillStyle(0xf59e0b, 1).fillCircle(45, 45, 12);
    g12.fillStyle(0x78350f, 1).fillCircle(45, 45, 6);
    // Cinta colgante tricolor
    g12.lineStyle(3, 0xfacc15, 1).lineBetween(40, 78, 40, 88);
    g12.lineStyle(3, 0x2563eb, 1).lineBetween(45, 78, 45, 88);
    g12.lineStyle(3, 0xdc2626, 1).lineBetween(50, 78, 50, 88);
    g12.generateTexture('art_silleta_floral', 90, 90);
    g12.destroy();
  }

  // ========================================================
  // GENERACIÓN DE ÍCONOS DE UI Y PARTÍCULAS
  // ========================================================
  generateUiAndEffectTextures() {
    // 1. Ícono de Lupa Activa (Vida de Curador)
    const gLupa = this.make.graphics({ x: 0, y: 0, add: false });
    gLupa.fillStyle(0x38bdf8, 0.4).fillCircle(14, 14, 10);
    gLupa.lineStyle(3, 0xf59e0b, 1).strokeCircle(14, 14, 10);
    gLupa.lineStyle(3.5, 0xb45309, 1).lineBetween(21, 21, 29, 29);
    gLupa.fillStyle(0xffffff, 0.8).fillCircle(11, 11, 3);
    gLupa.generateTexture('icon_lupa', 32, 32);
    gLupa.destroy();

    // 2. Ícono de Lupa Agotada
    const gLupaLost = this.make.graphics({ x: 0, y: 0, add: false });
    gLupaLost.lineStyle(2, 0x475569, 0.6).strokeCircle(14, 14, 10);
    gLupaLost.lineStyle(2.5, 0x334155, 0.6).lineBetween(21, 21, 29, 29);
    gLupaLost.lineStyle(2, 0xef4444, 0.9);
    gLupaLost.lineBetween(9, 9, 19, 19);
    gLupaLost.lineBetween(19, 9, 9, 19);
    gLupaLost.generateTexture('icon_lupa_lost', 32, 32);
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
    gMedal.fillStyle(0xdc2626, 1);
    gMedal.fillTriangle(22, 40, 14, 60, 26, 54);
    gMedal.fillStyle(0x2563eb, 1);
    gMedal.fillTriangle(38, 40, 46, 60, 34, 54);
    gMedal.generateTexture('medal_diploma', 60, 64);
    gMedal.destroy();
  }
}

// Asignar clase al ámbito global para compatibilidad offline sin bundlers
window.BootScene = BootScene;
