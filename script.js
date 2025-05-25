document.addEventListener("DOMContentLoaded", () => {
  const installModal = document.getElementById("install-modal");
  const bottomNav = document.querySelector(".bottom-nav");
  const gameIcon = document.getElementById("game-icon");

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  if (!isStandalone) {
    installModal.classList.remove("hidden");
    bottomNav.classList.add("hidden");
    gameIcon.classList.add("hidden");
  } else {
    installModal.classList.add("hidden");
    bottomNav.classList.remove("hidden");
    gameIcon.classList.remove("hidden");

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
      });
      bottomNav.appendChild(btn);
    });
  }

  // Вибрация при клике по кнопкам
  document.querySelectorAll('.nav-btn').forEach((btn, index) => {
    btn.classList.add('fade-in');
    btn.style.animationDelay = `${0.1 * index}s`;
    btn.addEventListener('click', () => {
      if (navigator.vibrate) navigator.vibrate(30);
    });
  });

  // Переключатель темы
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      window.navigator.vibrate?.(30);
    });
  }
});
