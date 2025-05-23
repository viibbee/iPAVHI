function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

window.onload = () => {
  const modal = document.getElementById('a2hs-modal');
  const catalog = document.getElementById('catalog');
  const closeBtn = document.getElementById('close-btn');

  if (isStandalone()) {
    // Устройство запущено с главного экрана
    modal.style.display = 'none';
    catalog.style.display = 'block';
  } else {
    // Проверим, не закрывал ли пользователь раньше окно
    const wasDismissed = localStorage.getItem('a2hs-dismissed');
    if (!wasDismissed) {
      modal.style.display = 'flex';
    } else {
      catalog.style.display = 'block';
    }
  }

  closeBtn.onclick = () => {
    modal.style.display = 'none';
    catalog.style.display = 'block';
    localStorage.setItem('a2hs-dismissed', 'true'); // не показывать снова
  };
};
