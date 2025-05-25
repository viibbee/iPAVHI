window.addEventListener('DOMContentLoaded', () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  const installModal = document.getElementById('install-modal');
  const bottomNav = document.querySelector('.bottom-nav');

  if (isStandalone) {
    // Приветственный экран
    const startScreen = document.createElement('div');
    startScreen.className = 'start-screen';
    startScreen.innerHTML = `
      <div class="start-wrapper">
        <div class="welcome-title">Welcome to iPASTORE</div>
        <div class="welcome-subtitle">Your Store for iOS Apps & Games</div>
        <div class="game-icon-wrapper">
          <img src="IMG_5152.png" alt="Game Icon" class="game-icon" id="game-launcher" />
        </div>
      </div>
    `;
    document.body.appendChild(startScreen);

    setTimeout(() => {
      startScreen.remove();
      bottomNav.classList.remove('hidden');
    }, 2500);

    // Обработчик открытия модального окна игры
    document.addEventListener('click', (e) => {
      if (e.target.id === 'game-launcher') {
        document.getElementById('game-modal').classList.remove('hidden');
      }
    });

    // Кнопка Install
    document.getElementById('install-btn')?.addEventListener('click', () => {
      window.open('https://signipa.org/Jqj8oB8J', '_blank');
    });

    // Закрытие модального окна при клике вне контента
    document.getElementById('game-modal')?.addEventListener('click', (e) => {
      if (e.target.id === 'game-modal') {
        e.target.classList.add('hidden');
      }
    });

  } else {
    installModal.classList.remove('hidden');
  }
});
