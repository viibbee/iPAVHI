// Проверка standalone режима
function isStandalone() {
  return (window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
}

// Показать или скрыть подсказку об установке
function handleInstallPrompt() {
  if (!isStandalone()) {
    document.getElementById('installModal').style.display = 'flex';
  } else {
    document.getElementById('installModal').style.display = 'none';
  }
}

// Показать навигационную панель в standalone режиме и скрыть основной контент (пока так)
function handleStandaloneUI() {
  if (isStandalone()) {
    document.getElementById('bottomNav').style.display = 'flex';
    // По желанию: скрываем основной контент или меняем на каталог приложений
    // document.getElementById('mainContent').style.display = 'none';
  } else {
    document.getElementById('bottomNav').style.display = 'none';
  }
}

// Навигация по кнопкам панели
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Тут можно реализовать логику подмены содержимого
    // Например, показывать разные списки Games, Apps, Search и т.п.
  });
});

// Запуск при загрузке страницы
window.addEventListener('load', () => {
  handleInstallPrompt();
  handleStandaloneUI();
});

