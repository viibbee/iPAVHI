document.addEventListener("DOMContentLoaded", () => {
  const installModal = document.getElementById("install-modal");
  const bottomNav = document.querySelector(".bottom-nav");

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  if (!isStandalone) {
    installModal.classList.remove("hidden");
    bottomNav.classList.add("hidden");
  } else {
    installModal.classList.add("hidden");
    bottomNav.classList.remove("hidden");

    // Add theme toggle
    const toggle = document.createElement("button");
    toggle.textContent = "🌓";
    toggle.className = "nav-btn fade-in";
    toggle.onclick = () => document.body.classList.toggle("light");
    bottomNav.appendChild(toggle);
  }

  // Vibrate on click
  document.querySelectorAll('.nav-btn').forEach((btn, index) => {
    btn.classList.add('fade-in');
    btn.style.animationDelay = `${0.1 * index}s`;
    btn.addEventListener('click', () => {
      if (navigator.vibrate) navigator.vibrate(30);
    });
  });
});
