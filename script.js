// Обработчик кнопки "Обновить сайт"
document.getElementById('refresh-btn').addEventListener('click', () => {
  location.reload();
});

document.addEventListener("DOMContentLoaded", () => {
  const installModal = document.getElementById("install-modal");
  const bottomNav = document.querySelector(".bottom-nav");
  const gameIcon = document.getElementById("game-icon");

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  // Если сайт открыт не как приложение (не установлен на главный экран)
  if (!isStandalone) {
    installModal.classList.remove("hidden");
    bottomNav.classList.add("hidden");
    gameIcon.classList.add("hidden");
  } else {
    // Если открыт как PWA (установленное приложение)
    installModal.classList.add("hidden");
    bottomNav.classList.remove("hidden");
    gameIcon.classList.remove("hidden");

    // Очищаем нижнюю навигацию и создаём кнопки
    bottomNav.innerHTML = "";

    const buttons = [
      { label: "🎮", title: "Games" },
      { label: "📱", title: "Apps" },
      { label: "🔍", title: "Search" },
      { label: "⋯", title: "More" }
    ];

    buttons.forEach(({ label, title }, index) => {
      const btn = document.createElement('button');
      btn.className = 'nav-btn fade-in';
      btn.title = title;
      btn.textContent = label;
      btn.style.animationDelay = `${0.1 * index}s`;
      btn.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(30);
        console.log(`Clicked ${title}`);
        // Здесь можно вставить навигацию на разные разделы
      });
      bottomNav.appendChild(btn);
    });
  }

  // Эффект вибрации при клике по уже существующим кнопкам
  document.querySelectorAll('.nav-btn').forEach((btn, index) => {
    btn.classList.add('fade-in');
    btn.style.animationDelay = `${0.1 * index}s`;
    btn.addEventListener('click', () => {
      if (navigator.vibrate) navigator.vibrate(30);
    });
  });

  // Обработка переключателя темы, если он есть
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      if (navigator.vibrate) navigator.vibrate(30);
    });
  }
});

