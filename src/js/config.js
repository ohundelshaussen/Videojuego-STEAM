/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * Archivo de Configuración Global y Base de Datos Didáctica
 * I.E. Angela María Torres Suárez — Grado 11° | Proyecto STEAM
 */

// ========================================================
// 1. SINTETIZADOR DE AUDIO NATIVO (Web Audio API)
// 100% Offline: Genera efectos sonoros procedurales sin archivos externos
// ========================================================
class WebAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(400, t + 0.04);
      gain.gain.setValueAtTime(0.1, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.04);
    } catch (e) {}
  }

  playSuccess() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime + idx * 0.05;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.16, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.3);
      });
    } catch (e) {}
  }

  playError() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, t);
      osc.frequency.exponentialRampToValueAtTime(130, t + 0.2);
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.2);
    } catch (e) {}
  }

  playVictory() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const melody = [
        { f: 523.25, d: 0.12 },
        { f: 659.25, d: 0.12 },
        { f: 783.99, d: 0.15 },
        { f: 1046.50, d: 0.45 }
      ];
      let cur = this.ctx.currentTime;
      melody.forEach(item => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(item.f, cur);
        gain.gain.setValueAtTime(0.22, cur);
        gain.gain.exponentialRampToValueAtTime(0.001, cur + item.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(cur);
        osc.stop(cur + item.d);
        cur += item.d * 0.9;
      });
    } catch (e) {}
  }

  playGameOver() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const melody = [
        { f: 392.00, d: 0.2 },
        { f: 349.23, d: 0.2 },
        { f: 329.63, d: 0.3 },
        { f: 261.63, d: 0.5 }
      ];
      let cur = this.ctx.currentTime;
      melody.forEach(item => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(item.f, cur);
        gain.gain.setValueAtTime(0.18, cur);
        gain.gain.exponentialRampToValueAtTime(0.001, cur + item.d);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(cur);
        osc.stop(cur + item.d);
        cur += item.d * 0.85;
      });
    } catch (e) {}
  }
}

window.SoundEffects = new WebAudioSynthesizer();

// ========================================================
// 2. BASE DE DATOS DE LOS 12 ARTEFACTOS DEL PATRIMONIO
// Cero emojis. Clasificados en 3 salas históricas.
// ========================================================
window.COLOMBIAN_HERITAGE_DATA = [
  // --- SALA 1: ÉPOCA PRECOLOMBINA / INDÍGENA ---
  {
    id: 'balsa_muisca',
    name: 'Balsa Muisca',
    era: 'precolombino',
    eraName: 'Época Precolombina',
    region: 'Pasca, Cundinamarca',
    category: 'Orfebrería Votiva',
    description: 'Figura de orfebrería dorada que representa la investidura del cacique en la laguna de Guatavita, origen de la leyenda de El Dorado.',
    hint: 'Pieza de oro votivo asociada al ritual sagrado de caciques y lagunas del altiplano.',
    color: '#f59e0b',
    textureKey: 'art_balsa_muisca'
  },
  {
    id: 'poporo_quimbaya',
    name: 'Poporo Quimbaya',
    era: 'precolombino',
    eraName: 'Época Precolombina',
    region: 'Valle del Río Cauca',
    category: 'Orfebrería Ceremonial',
    description: 'Recipiente sagrado para cal y mambeo de hojas de coca, fundido con la técnica de la cera perdida por maestros orfebres.',
    hint: 'Símbolo del arte orfebre Quimbaya precolombino con cuatro esferas superiores y proporciones armónicas.',
    color: '#eab308',
    textureKey: 'art_poporo_quimbaya'
  },
  {
    id: 'estatua_san_agustin',
    name: 'Estatua de San Agustín',
    era: 'precolombino',
    eraName: 'Época Precolombina',
    region: 'San Agustín, Huila',
    category: 'Escultura Lítica',
    description: 'Monolito megalítico de piedra volcánica tallada con rasgos felinos y deidades guardianas de tumbas funerarias ancestrales.',
    hint: 'Monolito megalítico tallado en piedra volcánica con colmillos felinos del Macizo Colombiano.',
    color: '#78716c',
    textureKey: 'art_estatua_san_agustin'
  },
  {
    id: 'pectoral_tairona',
    name: 'Pectoral Tairona',
    era: 'precolombino',
    eraName: 'Época Precolombina',
    region: 'Sierra Nevada de Santa Marta',
    category: 'Orfebrería Chamánica',
    description: 'Joya ornamental de oro y tumbaga que personifica al cacique en metamorfosis como hombre-murciélago y hombre-ave.',
    hint: 'Orfebrería ceremonial de la Sierra Nevada con alas laterales y tocado ritual de hombre-murciélago.',
    color: '#d97706',
    textureKey: 'art_pectoral_tairona'
  },

  // --- SALA 2: ÉPOCA COLONIAL E INDEPENDENCIA ---
  {
    id: 'florero_llorente',
    name: 'Florero de Llorente',
    era: 'independencia',
    eraName: 'Independencia y Colonia',
    region: 'Santafé de Bogotá',
    category: 'Loza Colonial',
    description: 'Centro de mesa de loza fina cuyo préstamo denegado el 20 de julio de 1810 detonó la chispa del grito independentista.',
    hint: 'Centro de loza fina cuyo préstamo detonó el grito independentista en la Plaza Mayor de 1810.',
    color: '#38bdf8',
    textureKey: 'art_florero_llorente'
  },
  {
    id: 'espada_bolivar',
    name: 'Espada Libertadora de Bolívar',
    era: 'independencia',
    eraName: 'Independencia y Colonia',
    region: 'Campaña Libertadora',
    category: 'Armamento Patriota',
    description: 'Arma de acero toledano con empuñadura de oro que acompañó a Simón Bolívar en las batallas de Boyacá y Pantano de Vargas.',
    hint: 'Acero de combate con empuñadura cincelada que comandó la Campaña Libertadora de 1819.',
    color: '#94a3b8',
    textureKey: 'art_espada_bolivar'
  },
  {
    id: 'cartas_policarpa',
    name: 'Cartas de Policarpa Salavarrieta',
    era: 'independencia',
    eraName: 'Independencia y Colonia',
    region: 'Guaduas / Santafé',
    category: 'Documento Histórico',
    description: 'Correspondencia secreta de espionaje patriota redactada por La Pola antes de su fusilamiento durante la Reconquista española.',
    hint: 'Pliegos manuscritos de la red clandestina de espionaje patriota de la heroína mártir neogranadina.',
    color: '#fef08a',
    textureKey: 'art_cartas_policarpa'
  },
  {
    id: 'murallas_cartagena',
    name: 'Murallas de Cartagena',
    era: 'independencia',
    eraName: 'Independencia y Colonia',
    region: 'Cartagena de Indias',
    category: 'Fortificación Militar',
    description: 'Baluartes de piedra coralina erigidos para repeler asedios piratas y resistir el bloqueo realista de Pablo Morillo en 1815.',
    hint: 'Baluartes militares de piedra coralina que otorgaron a la ciudad caribeña el título de Ciudad Heroica.',
    color: '#cbd5e1',
    textureKey: 'art_murallas_cartagena'
  },

  // --- SALA 3: PATRIMONIO VIVO Y TRADICIÓN REGIONAL ---
  {
    id: 'sombrero_vueltiao',
    name: 'Sombrero Vueltiao Zenú',
    era: 'patrimonio_vivo',
    eraName: 'Patrimonio Vivo y Tradición',
    region: 'Tuchín, Córdoba',
    category: 'Tejido Tradicional',
    description: 'Prenda insignia nacional tejida a mano en caña flecha por artesanos Zenú, con franjas geométricas que plasman su cosmovisión.',
    hint: 'Tejido artesanal en caña flecha con franjas bicolores de la cosmogonía indígena Zenú.',
    color: '#fde047',
    textureKey: 'art_sombrero_vueltiao'
  },
  {
    id: 'marimba_chonta',
    name: 'Marimba de Chonta del Pacífico',
    era: 'patrimonio_vivo',
    eraName: 'Patrimonio Vivo y Tradición',
    region: 'Litoral Pacífico',
    category: 'Instrumento Folclórico',
    description: 'Instrumento ancestral de percusión con tablas de palma de chonta y tubos de guadua, reconocido como Patrimonio de la Humanidad.',
    hint: 'Instrumento ancestral del Pacífico afrocolombiano conocido poéticamente como el piano de la selva.',
    color: '#92400e',
    textureKey: 'art_marimba_chonta'
  },
  {
    id: 'canasto_cafetero',
    name: 'Canasto Cafetero de Bejuco',
    era: 'patrimonio_vivo',
    eraName: 'Patrimonio Vivo y Tradición',
    region: 'Paisaje Cultural Cafetero',
    category: 'Artesanía Campesina',
    description: 'Cesto tradicional tejido en fibras de bejuco, utilizado por los recolectores campesinos en las laderas andinas del Eje Cafetero.',
    hint: 'Cesto de fibras vegetales atado a la cintura de los campesinos recolectores en las laderas andinas.',
    color: '#b45309',
    textureKey: 'art_canasto_cafetero'
  },
  {
    id: 'silleta_floral',
    name: 'Silleta Floral de Medellín',
    era: 'patrimonio_vivo',
    eraName: 'Patrimonio Vivo y Tradición',
    region: 'Santa Elena, Antioquia',
    category: 'Patrimonio Inmaterial',
    description: 'Monumental estructura de madera cubierta con decenas de variedades florales cultivadas por familias campesinas silleteras.',
    hint: 'Estructura monumental de madera y flores multicolores cargada a la espalda por campesinos silleteros.',
    color: '#ec4899',
    textureKey: 'art_silleta_floral'
  }
];

// Metadatos de las tres Salas de Museo
window.MUSEUM_ROOMS = {
  precolombino: {
    id: 'precolombino',
    textureKey: 'pedestal_precolombino',
    title: 'SALA 1: PRECOLOMBINA',
    subtitle: 'Orfebrería y Lítica Ancestral',
    badgeColor: '#f59e0b',
    borderColor: 0xf59e0b,
    x: 175,
    y: 205,
    width: 230,
    height: 250
  },
  independencia: {
    id: 'independencia',
    textureKey: 'pedestal_independencia',
    title: 'SALA 2: INDEPENDENCIA',
    subtitle: 'Gesta Libertadora y República',
    badgeColor: '#60a5fa',
    borderColor: 0x3b82f6,
    x: 480,
    y: 205,
    width: 230,
    height: 250
  },
  patrimonio_vivo: {
    id: 'patrimonio_vivo',
    textureKey: 'pedestal_patrimonio_vivo',
    title: 'SALA 3: PATRIMONIO VIVO',
    subtitle: 'Tradición y Saberes Regionales',
    badgeColor: '#34d399',
    borderColor: 0x10b981,
    x: 785,
    y: 205,
    width: 230,
    height: 250
  }
};

// ========================================================
// 3. CONFIGURACIÓN DEL MOTOR PHASER 3 (960 x 540 px / 16:9)
// ========================================================
window.GAME_CONFIG = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 960,
  height: 540,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  backgroundColor: '#110d0b',
  physics: { default: false },
  scene: []
};
