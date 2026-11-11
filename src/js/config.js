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
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // Sonido de clic sutil de interfaz
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
      osc.frequency.exponentialRampToValueAtTime(400, t + 0.05);

      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.05);
    } catch (e) {
      // Audio no bloqueante
    }
  }

  // Campanada dorada de éxito (+100 Puntos)
  playSuccess() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // Acorde Mayor Do5-Mi5-Sol5-Do6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = this.ctx.currentTime + idx * 0.06;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.18, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.35);
      });
    } catch (e) {
      // Audio no bloqueante
    }
  }

  // Tono de advertencia didáctica (-25 Puntos)
  playError() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.exponentialRampToValueAtTime(140, t + 0.22);

      gain.gain.setValueAtTime(0.18, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.22);
    } catch (e) {
      // Audio no bloqueante
    }
  }

  // Fanfarria triunfal de graduación de curador
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

        gain.gain.setValueAtTime(0.25, cur);
        gain.gain.exponentialRampToValueAtTime(0.001, cur + item.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(cur);
        osc.stop(cur + item.d);
        cur += item.d * 0.9;
      });
    } catch (e) {
      // Audio no bloqueante
    }
  }

  // Melodía reflexiva de intento agotado
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

        gain.gain.setValueAtTime(0.2, cur);
        gain.gain.exponentialRampToValueAtTime(0.001, cur + item.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(cur);
        osc.stop(cur + item.d);
        cur += item.d * 0.85;
      });
    } catch (e) {
      // Audio no bloqueante
    }
  }
}

// Instancia global de audio
window.SoundEffects = new WebAudioSynthesizer();

// ========================================================
// 2. BASE DE DATOS DE LOS 12 ARTEFACTOS DEL PATRIMONIO
// Clasificados en las 3 grandes salas históricas
// ========================================================
window.COLOMBIAN_HERITAGE_DATA = [
  // --- SALA 1: ÉPOCA PRECOLOMBINA / INDÍGENA ---
  {
    id: 'balsa_muisca',
    name: 'Balsa Muisca',
    era: 'precolombino',
    eraName: 'Época Precolombina',
    region: 'Pasca, Cundinamarca (Altiplano Cundiboyacense)',
    description: 'Obra cumbre de la orfebrería dorada que representa la investidura del cacique en la sagrada laguna de Guatavita, base del mito de El Dorado.',
    hint: 'Pieza de orfebrería ceremonial de oro votivo vinculada a las lagunas sagradas y caciques del altiplano.',
    color: '#f59e0b',
    textureKey: 'art_balsa_muisca',
    iconEmoji: '🛶'
  },
  {
    id: 'poporo_quimbaya',
    name: 'Poporo Quimbaya',
    era: 'precolombino',
    eraName: 'Época Precolombina',
    region: 'Valle del Río Cauca',
    description: 'Recipiente sagrado para guardar la cal utilizada en el mambeo ceremonial de las hojas de coca, fundido con la técnica de la cera perdida.',
    hint: 'Símbolo supremo del arte orfebre Quimbaya precolombino con cuatro esferas superiores y proporciones armoniosas.',
    color: '#eab308',
    textureKey: 'art_poporo_quimbaya',
    iconEmoji: '🏺'
  },
  {
    id: 'estatua_san_agustin',
    name: 'Estatua de San Agustín',
    era: 'precolombino',
    eraName: 'Época Precolombina',
    region: 'San Agustín, Huila (Macizo Colombiano)',
    description: 'Monolito megalítico de piedra volcánica tallada con rasgos de chamanes, deidades y felinos guardianes de tumbas funerarias.',
    hint: 'Escultura lítica milenaria tallada en piedra con colmillos felinos, emblema arqueológico del Macizo Colombiano.',
    color: '#78716c',
    textureKey: 'art_estatua_san_agustin',
    iconEmoji: '🗿'
  },
  {
    id: 'pectoral_tairona',
    name: 'Pectoral Tairona',
    era: 'precolombino',
    eraName: 'Época Precolombina',
    region: 'Sierra Nevada de Santa Marta',
    description: 'Joya ornamental de oro y tumbaga que personifica al cacique en metamorfosis como hombre-murciélago y hombre-ave.',
    hint: 'Adorno pectoral ceremonial con orejeras circulares y tocado ritual confeccionado por los orfebres de la Sierra Nevada.',
    color: '#d97706',
    textureKey: 'art_pectoral_tairona',
    iconEmoji: '🦅'
  },

  // --- SALA 2: ÉPOCA COLONIAL E INDEPENDENCIA ---
  {
    id: 'florero_llorente',
    name: 'Florero de Llorente',
    era: 'independencia',
    eraName: 'Independencia y Colonia',
    region: 'Santafé de Bogotá (Plaza Mayor)',
    description: 'Pieza de porcelana y loza fina cuyo préstamo denegado el 20 de julio de 1810 detonó el grito independentista de la Nueva Granada.',
    hint: 'Centro de mesa de porcelana que encendió la chispa patriota y la revuelta popular en Santafé de Bogotá en 1810.',
    color: '#38bdf8',
    textureKey: 'art_florero_llorente',
    iconEmoji: '💐'
  },
  {
    id: 'espada_bolivar',
    name: 'Espada Libertadora de Bolívar',
    era: 'independencia',
    eraName: 'Independencia y Colonia',
    region: 'Campaña Libertadora (Boyacá y Vargas)',
    description: 'Arma de acero toledano con empuñadura de oro entregada a Simón Bolívar como emblema de la soberanía republicana de 1819.',
    hint: 'Acero patriota con empuñadura cincelada que comandó las batallas decisivas por la libertad republicana.',
    color: '#94a3b8',
    textureKey: 'art_espada_bolivar',
    iconEmoji: '⚔️'
  },
  {
    id: 'cartas_policarpa',
    name: 'Cartas de Policarpa Salavarrieta',
    era: 'independencia',
    eraName: 'Independencia y Colonia',
    region: 'Guaduas / Santafé de Bogotá',
    description: 'Correspondencia clandestina de espionaje y salvoconductos firmados por La Pola antes de su heroico fusilamiento en la Reconquista.',
    hint: 'Pliegos manuscritos secretos de la red de inteligencia patriota liderada por la joven heroína mártir neogranadina.',
    color: '#fef08a',
    textureKey: 'art_cartas_policarpa',
    iconEmoji: '📜'
  },
  {
    id: 'murallas_cartagena',
    name: 'Murallas de Cartagena',
    era: 'independencia',
    eraName: 'Independencia y Colonia',
    region: 'Cartagena de Indias (Caribe)',
    description: 'Baluartes militares de cantería y coral erigidos en la colonia para repeler piratas y resistir el asedio español de Pablo Morillo en 1815.',
    hint: 'Complejo defensivo de piedra coralina que le otorgó el título inmortal de «Ciudad Heroica» a la urbe caribeña.',
    color: '#cbd5e1',
    textureKey: 'art_murallas_cartagena',
    iconEmoji: '🏰'
  },

  // --- SALA 3: PATRIMONIO VIVO Y TRADICIÓN REGIONAL ---
  {
    id: 'sombrero_vueltiao',
    name: 'Sombrero Vueltiao Zenú',
    era: 'patrimonio_vivo',
    eraName: 'Patrimonio Vivo y Tradición',
    region: 'Tuchín, Córdoba y Sucre (Región Caribe)',
    description: 'Símbolo cultural de Colombia tejido a mano en caña flecha por artesanos Zenú, cuyos trenzados plasman la fauna y flora sagrada.',
    hint: 'Prenda artesanal con franjas geométricas bicolores trenzadas en caña flecha por las comunidades indígenas Zenú.',
    color: '#fde047',
    textureKey: 'art_sombrero_vueltiao',
    iconEmoji: '🤠'
  },
  {
    id: 'marimba_chonta',
    name: 'Marimba de Chonta del Pacífico',
    era: 'patrimonio_vivo',
    eraName: 'Patrimonio Vivo y Tradición',
    region: 'Litoral Pacífico Colombiano',
    description: 'El célebre «piano de la selva», instrumento de percusión con tablas de palma de chonta y tubos de guadua, Patrimonio de la Humanidad (UNESCO).',
    hint: 'Instrumento musical folclórico del Pacífico afrocolombiano confeccionado con madera de chonta y resonadores de guadua.',
    color: '#92400e',
    textureKey: 'art_marimba_chonta',
    iconEmoji: '🪵'
  },
  {
    id: 'canasto_cafetero',
    name: 'Canasto Cafetero de Bejuco',
    era: 'patrimonio_vivo',
    eraName: 'Patrimonio Vivo y Tradición',
    region: 'Paisaje Cultural Cafetero (Caldas, Quindío, Risaralda)',
    description: 'Cesto artesanal tejido en fibras vegetales que acompaña la recolección manual grano a grano del café suave colombiano en las montañas.',
    hint: 'Artesanía campesina andina atada a la cintura de los recolectores en las laderas del Eje Cafetero.',
    color: '#b45309',
    textureKey: 'art_canasto_cafetero',
    iconEmoji: '🧺'
  },
  {
    id: 'silleta_floral',
    name: 'Silleta Floral de Medellín',
    era: 'patrimonio_vivo',
    eraName: 'Patrimonio Vivo y Tradición',
    region: 'Santa Elena, Antioquia',
    description: 'Monumental estructura de madera tapizada con orquídeas y flores tradicionales cargada a la espalda por las familias campesinas silleteras.',
    hint: 'Monumento viviente de madera y flores multicolores que desfila cada agosto celebrando la tradición campesina antioqueña.',
    color: '#ec4899',
    textureKey: 'art_silleta_floral',
    iconEmoji: '🌸'
  }
];

// Metadatos de las tres Salas de Museo
window.MUSEUM_ROOMS = {
  precolombino: {
    id: 'precolombino',
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
  backgroundColor: '#1a1512',
  physics: {
    default: false // Cero físicas complejas: jugabilidad 100% Drag & Drop puro
  },
  // Las clases de escena se registran en main.js tras su carga
  scene: []
};
