function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

window.onload = () => {
  const modal = document.getElementById('a2hs-modal');
  const catalog = document.getElementById('catalog');

  if (isStandalone()) {
    // Открыт как PWA — показываем контент
    modal.style.display = 'none';
    catalog.style.display = 'block';
  } else {
    // Сайт открыт в Safari — показываем инструкцию
    modal.style.display = 'flex';
    catalog.style.display = 'none';
  }
};
