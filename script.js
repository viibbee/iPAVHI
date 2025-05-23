window.addEventListener('DOMContentLoaded', () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  const installModal = document.getElementById('install-modal');
  const bottomNav = document.querySelector('.bottom-nav');
  const startScreen = document.createElement('div');

  // 🔹 Приветственный экран
  startScreen.className = 'start-screen';
  startScreen.innerHTML = `
    <div class="start-wrapper">
      <div class="welcome-title">Welcome to iPASTORE</div>
      <div class="welcome-subtitle">Your Store for iOS Apps & Games</div>
    </div>
  `;
  document.body.appendChild(startScreen);

  // Удалить приветственный экран через 2.5 секунды
  setTimeout(() => {
    startScreen.remove();

    // Показываем нужные элементы
    if (isStandalone) {
      bottomNav.classList.remove('hidden');
    } else {
      installModal.classList.remove('hidden');
    }
  }, 2500);
});

