function isInStandaloneMode() {
  return (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone === true);
}

window.onload = () => {
  const modal = document.getElementById('a2hs-modal');
  const catalog = document.getElementById('catalog');
  const closeBtn = document.getElementById('close-btn');

  if (!isInStandaloneMode()) {
    modal.style.display = 'flex';
  } else {
    catalog.style.display = 'block';
  }

  closeBtn.onclick = () => {
    modal.style.display = 'none';
    catalog.style.display = 'block';
  };
};
