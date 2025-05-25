document.getElementById('refresh-btn').addEventListener('click', () => {
  location.reload();
});

document.addEventListener("DOMContentLoaded", () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

  const installModal = document.getElementById("install-modal");
  const bottomNav = document.querySelector(".bottom-nav");
  const gameIcon = document.getElementById("game-icon");
  const iconModal = document.getElementById("icon-modal");

  if (!isStandalone) {
    // Обычный Safari режим — показываем подсказку установки, скрываем навигацию и иконку
    installModal.classList.remove("hidden");
    bottomNav.classList.add("hidden");
    gameIcon.classList.add("hidden");
  } else {
    // Запуск из home screen — показываем нижнюю навигацию и иконку
    installModal.classList.add("hidden");
    bottomNav.classList.remove("hidden");
    gameIcon.classList.remove("hidden");

    // Создаём кнопки навигации
    const buttons = [
      { label: "🎮", title: "Games" },
      { label: "📱", title: "Apps" },
      { label: "🔍", title: "Search" },
      { label: "⋯", title: "More" }
    ];

    bottomNav.innerHTML = ""; // очистка на всякий случай

    buttons.forEach(({ label, title }) => {
      const btn = document.createElement("button");
      btn.className = "nav-btn";
      btn.title = title;
      btn.ariaLabel = title;
      btn.textContent = label;
      btn.type = "button";
      btn.addEventListener("click", () => {
        if (navigator.vibrate) navigator.vibrate(30);
        console.log(`Clicked ${title}`);
      });
      bottomNav.appendChild(btn);
    });
  }

  // Открытие модалки с иконкой при клике и по клавише Enter/Space (доступность)
  function openIconModal() {
    iconModal.classList.remove("hidden");
    iconModal.focus();
  }

  gameIcon.addEventListener("click", openIconModal);
  gameIcon.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      openIconModal();
    }
  });

  // Закрытие модалки кликом по фону и клавишей Escape
  window.addEventListener("click", (e) => {
    if (e.target === iconModal) {
      iconModal.classList.add("hidden");
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !iconModal.classList.contains("hidden")) {
      iconModal.classList.add("hidden");
    }
  });
});
