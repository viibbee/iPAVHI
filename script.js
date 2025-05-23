document.addEventListener("DOMContentLoaded", () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const installModal = document.getElementById("install-modal");

  if (!isStandalone) {
    // Показываем окно добавления на главный экран
    installModal.classList.remove("hidden");
  }
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // TODO: Здесь можно добавить логику смены контента под кнопками
  });
});


