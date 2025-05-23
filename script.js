document.addEventListener("DOMContentLoaded", () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const installModal = document.getElementById("install-modal");

  if (!isStandalone) {
    installModal.classList.remove("hidden");
  }
});
