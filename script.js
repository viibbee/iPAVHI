window.addEventListener('DOMContentLoaded', () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  const installModal = document.getElementById('install-modal');
  const bottomNav = document.querySelector('.bottom-nav');

  if (isStandalone) {
    // 🔹 Создаём приветственный экран
    const startScreen = document.createElement('div');
    startScreen.className = 'start-screen';
    startScreen.innerHTML = `
      <div class="start-wrapper">
        <div class="welcome-title">Welcome to iPASTORE</div>
        <div class="welcome-subtitle">Your Store for iOS Apps & Games</div>
      </div>
    `;
    document.body.appendChild(startScreen);

    // Показываем панель после исчезновения приветствия
    setTimeout(() => {
      startScreen.remove();
      bottomNav.classList.remove('hidden');
    }, 2500);

  } else {
    // Показываем только инструкцию в браузере
    installModal.classList.remove('hidden');
  }
});

