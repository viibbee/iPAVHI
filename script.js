window.addEventListener('DOMContentLoaded', () => {
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  const installModal = document.getElementById('install-modal');
  const appContent = document.getElementById('app-content');
  const bottomBar = document.getElementById('bottom-bar');
  const gameModal = document.getElementById('game-modal');
  const gameIcon = document.getElementById('main-game-icon');

  if (isStandalone) {
    installModal.classList.add('hidden');
    appContent.classList.remove('hidden');
    bottomBar.classList.remove('hidden');

    // Клик по иконке игры
    gameIcon.addEventListener('click', () => {
      gameModal.classList.remove('hidden');
    });

    // Закрытие модалки по клику вне содержимого
    gameModal.addEventListener('click', (e) => {
      if (e.target === gameModal) {
        gameModal.classList.add('hidden');
      }
    });
  } else {
    installModal.classList.remove('hidden');
  }
});
