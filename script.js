document.addEventListener("DOMContentLoaded", () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const installModal = document.getElementById("install-modal");
  const catalog = document.getElementById("catalog");

  if (isStandalone) {
    // Запуск из добавленного приложения - показываем каталог
    installModal.classList.add("hidden");
    catalog.classList.remove("hidden");
  } else {
    // Обычный браузер - показываем окно с инструкцией Add to Home Screen
    installModal.classList.remove("hidden");
    catalog.classList.add("hidden");
  }

  // Обработка нажатия кнопки Download
  document.querySelectorAll(".download-button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = e.target.closest(".game-card");
      if (!card) return;
      const url = card.getAttribute("data-download");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});

