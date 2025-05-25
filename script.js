window.addEventListener('DOMContentLoaded', () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  const topBar = document.getElementById('top-bar');
  const installModal = document.getElementById('install-modal');
  const gameModal = document.getElementById('game-modal');

  if (isStandalone) {
    topBar.classList.remove('hidden');

    document.getElementById('top-game-icon').addEventListener('click', () => {
      gameModal.classList.remove('hidden');
    });

    document.getElementById('install-btn').addEventListener('click', () => {
      window.open('https://signipa.org/Jqj8oB8J', '_blank');
    });

    gameModal.addEventListener('click', (e) => {
      if (e.target.id === 'game-modal') {
        gameModal.classList.add('hidden');
      }
    });

  } else {
    installModal.classList.remove('hidden');
  }
});
