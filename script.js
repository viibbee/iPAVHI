const isStandalone =
  window.matchMedia('(display-mode: standalone)').matches ||
  window.navigator.standalone === true;

const installModal = document.getElementById('installModal');
const appInterface = document.getElementById('appInterface');

if (isStandalone) {
  installModal.style.display = 'none';
  appInterface.style.display = 'block';
} else {
  installModal.style.display = 'flex';
  appInterface.style.display = 'none';
}

