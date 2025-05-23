document.addEventListener("DOMContentLoaded", () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const installModal = document.getElementById("install-modal");
  const bottomNav = document.getElementById("bottom-nav-container");

  console.log("isStandalone =", isStandalone);

  if (isStandalone) {
    // В standalone — скрываем инструкцию, показываем нижнюю панель
    installModal.classList.add("hidden");
    bottomNav.classList.remove("hidden");
  } else {
    // В браузере — показываем инструкцию, скрываем нижнюю панель
    installModal.classList.remove("hidden");
    bottomNav.classList.add("hidden");
  }
});
