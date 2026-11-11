/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * main.js: Punto de Entrada Principal e Integración de UI Accesible
 * I.E. Angela María Torres Suárez — Grado 11° | Proyecto STEAM
 */

// ========================================================
// 1. INTEGRACIÓN DE MODALES DIDÁCTICOS (HTML5 ACCESIBLE)
// ========================================================

/**
 * Abre un modal por su ID con foco accesible
 */
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.removeAttribute('hidden');
    // Prevenir scroll de la página de fondo si aplicara
    document.body.style.overflow = 'hidden';
    
    // Enfocar botón de cierre para accesibilidad
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }
};

/**
 * Cierra un modal por su ID
 */
window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
};

/**
 * Despliega el modal pedagógico con la pista histórica inmediata
 */
window.showHintModal = function(artifact) {
  const modal = document.getElementById('modal-hint');
  if (!modal) return;

  const iconEl = document.getElementById('hint-artifact-icon');
  const nameEl = document.getElementById('hint-artifact-name');
  const regionEl = document.getElementById('hint-artifact-region');
  const textEl = document.getElementById('hint-didactic-text');

  if (iconEl) iconEl.textContent = artifact.iconEmoji || '🏛️';
  if (nameEl) nameEl.textContent = artifact.name || 'Artefacto';
  if (regionEl) regionEl.textContent = `📍 Origen: ${artifact.region || 'Colombia'}`;
  if (textEl) textEl.textContent = artifact.hint || 'Revisa con detenimiento las características de la época.';

  window.openModal('modal-hint');
};

// ========================================================
// 2. REGISTRO DE EVENTOS DEL DOM
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  // Botones de cierre de modales
  const closeButtons = document.querySelectorAll('[data-close]');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-close');
      window.closeModal(targetId);
      if (window.SoundEffects) window.SoundEffects.playClick();
    });
  });

  // Cerrar modal al hacer clic en el fondo oscuro
  const backdrops = document.querySelectorAll('.modal-backdrop');
  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        window.closeModal(backdrop.id);
        if (window.SoundEffects) window.SoundEffects.playClick();
      }
    });
  });

  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      backdrops.forEach(b => {
        if (!b.hasAttribute('hidden')) {
          window.closeModal(b.id);
        }
      });
    }
  });

  // Barra de navegación inferior rápida
  const btnGuide = document.getElementById('btn-open-guide');
  if (btnGuide) {
    btnGuide.addEventListener('click', () => {
      if (window.SoundEffects) window.SoundEffects.playClick();
      window.openModal('modal-guide');
    });
  }

  const btnCredits = document.getElementById('btn-open-credits');
  if (btnCredits) {
    btnCredits.addEventListener('click', () => {
      if (window.SoundEffects) window.SoundEffects.playClick();
      window.openModal('modal-credits');
    });
  }

  // Alternador de audio (Mute/Unmute)
  const btnSound = document.getElementById('btn-toggle-sound');
  const soundIcon = document.getElementById('sound-icon');
  const soundText = document.getElementById('sound-text');

  if (btnSound && window.SoundEffects) {
    btnSound.addEventListener('click', () => {
      const isMuted = window.SoundEffects.toggleMute();
      if (isMuted) {
        if (soundIcon) soundIcon.textContent = '🔇';
        if (soundText) soundText.textContent = 'Audio: Silenciado';
      } else {
        if (soundIcon) soundIcon.textContent = '🔊';
        if (soundText) soundText.textContent = 'Audio: Activo';
        window.SoundEffects.playClick();
      }
    });
  }

  // ========================================================
  // 3. INICIALIZACIÓN DEL MOTOR PHASER 3
  // ========================================================
  try {
    // Registrar escenas en orden de ciclo de vida
    window.GAME_CONFIG.scene = [
      window.BootScene,
      window.MenuScene,
      window.GameScene,
      window.ResultScene
    ];

    // Instanciación del juego
    window.gameInstance = new Phaser.Game(window.GAME_CONFIG);

    console.log(
      '%c🏛️ TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO 🇨🇴',
      'background: #1a1512; color: #f59e0b; font-size: 14px; font-weight: bold; padding: 6px 12px; border-radius: 6px;'
    );
    console.log('✅ Phaser 3 inicializado con éxito. Modo de pantalla: FIT 16:9 (960x540 px).');
    console.log('✅ 12 Reliquias patrimoniales cargadas en base de datos modular.');
  } catch (error) {
    console.error('❌ Error crítico al inicializar Phaser 3:', error);
  }
});
