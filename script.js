document.addEventListener("DOMContentLoaded", () => {
  const installModal = document.getElementById("install-modal");
  const bottomNav = document.querySelector(".bottom-nav");

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  console.log("window.navigator.standalone =", window.navigator.standalone);
  console.log("window.matchMedia('(display-mode: standalone)').matches =", window.matchMedia('(display-mode: standalone)').matches);
  console.log("Detected standalone mode:", isStandalone);

  if (!isStandalone) {
    installModal.classList.remove("hidden");
    if (bottomNav) bottomNav.style.display = "none"; // прячем панель, если не standalone
  } else {
    installModal.classList.add("hidden");
    if (bottomNav) bottomNav.style.display = "flex"; // показываем панель, если standalone
  }
  
  // Временно для отладки: всегда показывать панель (удалить после проверки)
  // if (bottomNav) bottomNav.style.display = "flex";
});

