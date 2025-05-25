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

    bottomNav.innerHTML = "";

    const buttons = [
      {
        title: "Games",
        svgPath: "M6 4v16l12-8z"
      },
      {
        title: "Apps",
        svgPath: "M4 4h16v16H4z"
      },
      {
        title: "Search",
        svgPath: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"
      },
      {
        title: "More",
        svgPath: "M12 8a2 2 0 110-4 2 2 0 010 4zm0 4a2 2 0 110-4 2 2 0 010 4zm0 4a2 2 0 110-4 2 2 0 010 4z"
      }
    ];

    buttons.forEach(({ title, svgPath }) => {
      const btn = document.createElement('button');
      btn.className = 'nav-btn';
      btn.title = title;
      btn.setAttribute('aria-label', title);

      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");

      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", svgPath);

      svg.appendChild(path);
      btn.appendChild(svg);

      btn.addEventListener('click', () => {
        bottomNav.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (navigator.vibrate) navigator.vibrate(30);

        console.log(`Clicked ${title}`);
      });

      bottomNav.appendChild(btn);
    });

    // Активируем первую кнопку по умолчанию
    const firstBtn = bottomNav.querySelector('.nav-btn');
    if (firstBtn) firstBtn.classList.add('active');
  }
});
