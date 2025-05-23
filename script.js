document.addEventListener("DOMContentLoaded", () => {
  const installModal = document.getElementById("install-modal");
  const bottomNav = document.querySelector(".bottom-nav");

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  console.log("window.navigator.standalone =", window.navigator.standalone);
  console.log("window.matchMedia('(display-mode: standalone)').matches =", window.matchMedia('(display-mode: standalone)').matches);
  console.log("Detected standalone mode:", isStandalone);

  if (!isStandalone) {
    // Показываем инструкцию по установке, прячем нижнюю панель
    installModal.classList.remove("hidden");
    if (bottomNav) bottomNav.classList.add("hidden");
  } else {
    // Скрываем инструкцию, показываем нижнюю панель
    installModal.classList.add("hidden");
    if (bottomNav) bottomNav.classList.remove("hidden");
  }
});
