document.getElementById('refresh-btn').addEventListener('click', () => {
  location.reload();
});

document.addEventListener("DOMContentLoaded", () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

  const installModal = document.getElementById("install-modal");
  const bottomNav = document.querySelector(".bottom-nav");
  const gameIcon = document.getElementById("game-icon");

 if (!isStandalone) {
  // Safari обычный режим
  // Не показываем окно установки
  installModal.classList.add("hidden");
  bottomNav.classList.add("hidden");
  gameIcon.classList.add("hidden");
} else {
  // Запуск из home screen
  installModal.classList.add("hidden");
  bottomNav.classList.remove("hidden");
  gameIcon.classList.remove("hidden");

  // ...добавление кнопок в нижнюю панель
}

    const buttons = [
      { label: "🎮", title: "Games" },
      { label: "📱", title: "Apps" },
      { label: "🔍", title: "Search" },
      { label: "⋯", title: "More" }
    ];

    buttons.forEach(({ label, title }) => {
      const btn = document.createElement("button");
      btn.className = "nav-btn";
      btn.title = title;
      btn.textContent = label;
      btn.addEventListener("click", () => {
        if (navigator.vibrate) navigator.vibrate(30);
        console.log(Clicked ${title});
      });
      bottomNav.appendChild(btn);
    });
  }

  // Обработка модалки
  const iconModal = document.getElementById("icon-modal");
  const openIconModal = document.getElementById("open-icon-modal");

  openIconModal.addEventListener("click", () => {
    iconModal.classList.remove("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === iconModal) {
      iconModal.classList.add("hidden");
    }
  });
});
