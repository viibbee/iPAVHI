document.addEventListener("DOMContentLoaded", () => {
  // Проверка, запущено ли приложение из главного экрана (standalone mode)
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true; // для iOS

  const installModal = document.getElementById('installModal');
  const catalog = document.getElementById('catalog');

  if (isStandalone) {
    // Если сайт открыт с главного экрана, показываем каталог и скрываем окно установки
    installModal.style.display = 'none';
    catalog.classList.remove('hidden');
  } else {
    // Если открыт в браузере, показываем инструкцию по добавлению
    installModal.style.display = 'flex';
    catalog.classList.add('hidden');
  }

  // Обработчик кликов в каталоге игр
  catalog.addEventListener('click', e => {
    if (e.target.classList.contains('download-button')) {
      const card = e.target.closest('.game-card');
      if (!card) return;
      const url = card.getAttribute('data-download');
      if (url) {
        window.open(url, '_blank');
      }
    }
  });
});

