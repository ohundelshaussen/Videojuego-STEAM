/**
 * TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO
 * main.js: Punto de Entrada Principal e Integración de UI de Museo
 * I.E. Angela María Torres Suárez — Grado 11° | Proyecto STEAM
 */

// ========================================================
// 1. INTEGRACIÓN DE MODALES DIDÁCTICOS (HTML5 ACCESIBLE)
// ========================================================

window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
};

window.showHintModal = function(artifact) {
  const modal = document.getElementById('modal-hint');
  if (!modal) return;

  const nameEl = document.getElementById('hint-artifact-name');
  const regionEl = document.getElementById('hint-artifact-region');
  const textEl = document.getElementById('hint-didactic-text');

  if (nameEl) nameEl.textContent = (artifact.name || 'ARTEFACTO').toUpperCase();
  if (regionEl) regionEl.textContent = `${artifact.region || 'Colombia'} • ${artifact.category || 'Patrimonio Histórico'}`;
  if (textEl) textEl.textContent = artifact.hint || 'Examina con detenimiento las características y época de esta reliquia.';

  window.openModal('modal-hint');
};

// ========================================================
// 2. REGISTRO DE EVENTOS DEL DOM
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  // Botones de cierre de modales
  const closeButtons = document.querySelectorAll('[data-close]');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-close');
      window.closeModal(targetId);
      if (window.SoundEffects) window.SoundEffects.playClick();
    });
  });

  // Cierre de modal al hacer clic en el backdrop
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
        if (!b.hasAttribute('hidden')) window.closeModal(b.id);
      });
    }
  });

  // Alternador de audio en la barra superior minimalista (Cero emojis)
  const btnSound = document.getElementById('btn-toggle-sound');
  const soundDot = document.getElementById('sound-status-dot');
  const soundLabel = document.getElementById('sound-label');

  if (btnSound && window.SoundEffects) {
    btnSound.addEventListener('click', () => {
      const isMuted = window.SoundEffects.toggleMute();
      if (isMuted) {
        if (soundDot) soundDot.classList.remove('active');
        if (soundLabel) soundLabel.textContent = 'AUDIO: SILENCIADO';
      } else {
        if (soundDot) soundDot.classList.add('active');
        if (soundLabel) soundLabel.textContent = 'AUDIO: ACTIVO';
        window.SoundEffects.playClick();
      }
    });
  }

  // ========================================================
  // 3. INICIALIZACIÓN DEL MOTOR PHASER 3
  // ========================================================
  try {
    window.GAME_CONFIG.scene = [
      window.BootScene,
      window.MenuScene,
      window.GameScene,
      window.ResultScene
    ];

    window.gameInstance = new Phaser.Game(window.GAME_CONFIG);

    console.log(
      '%c🏛️ TESOROS DE COLOMBIA: GUARDIANES DEL PATRIMONIO 🇨🇴',
      'background: #110d0b; color: #f59e0b; font-size: 13px; font-weight: bold; padding: 6px 12px; border-radius: 4px;'
    );
    console.log('✅ Interfaz de museo profesional activada: HUD sobrio, vitrinas con cristal y cero emojis.');
  } catch (error) {
    console.error('❌ Error crítico al inicializar Phaser 3:', error);
  }
});
