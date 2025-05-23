document.addEventListener("DOMContentLoaded", () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const installModal = document.getElementById("install-modal");
  const appInterface = document.getElementById("app-interface");

  if (!isStandalone) {
    installModal.classList.remove("hidden");
  } else {
    appInterface.classList.remove("hidden");
    document.body.style.overflow = "auto";
  }
});
