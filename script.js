document.addEventListener("DOMContentLoaded", () => {
  const installModal = document.getElementById("install-modal");
  const bottomNav = document.querySelector(".bottom-nav");

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  if (isStandalone) {
    document.body.classList.add("standalone");
    installModal.classList.add("hidden");
    if (bottomNav) bottomNav.classList.remove("hidden");
  } else {
    installModal.classList.remove("hidden");
    if (bottomNav) bottomNav.classList.add("hidden");
  }
});