document.addEventListener("DOMContentLoaded", () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const installModal = document.getElementById("install-modal");
  const bottomNavContainer = document.getElementById("bottom-nav-container");

  if (!isStandalone) {
    installModal.classList.remove("hidden");  // Показываем инструкцию
    bottomNavContainer.classList.add("hidden"); // Скрываем нижнюю панель
  } else {
    installModal.classList.add("hidden");     // Скрываем инструкцию
    bottomNavContainer.classList.remove("hidden"); // Показываем нижнюю панель
  }
});

  // Навигация по кнопкам как раньше
  const buttons = document.querySelectorAll('.nav-btn');
  let currentTab = 'games';

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if(btn.dataset.tab === currentTab) return;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;

      showTabContent(currentTab);
    });
  });

  function showTabContent(tab) {
    const content = document.getElementById('content');
    if(!content) return;

    content.style.opacity = 0;

    setTimeout(() => {
      switch(tab) {
        case 'games':
          content.innerHTML = '<h2>Games</h2><p>Здесь список игр...</p>';
          break;
        case 'apps':
          content.innerHTML = '<h2>Apps</h2><p>Здесь список приложений...</p>';
          break;
        case 'search':
          content.innerHTML = '<h2>Search</h2><p>Поиск по каталогу...</p>';
          break;
        case 'more':
          content.innerHTML = '<h2>More</h2><p>Дополнительные опции...</p>';
          break;
      }
      content.style.opacity = 1;
    }, 300);
  }

  showTabContent(currentTab);
});
