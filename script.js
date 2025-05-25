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

    // Убираем предыдущие кнопки (если есть)
    bottomNav.innerHTML = "";

    // Кнопки с SVG иконками
    const buttons = [
      {
        title: "Games",
        svgPath: "M6 4v16l12-8z" // значок "Play"
      },
      {
        title: "Apps",
        svgPath: "M4 4h16v16H4z" // квадрат (иконка для Apps)
      },
      {
        title: "Search",
        svgPath: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z" // увеличительное стекло
      },
      {
        title: "More",
        svgPath: "M12 8a2 2 0 110-4 2 2 0 010 4zm0 4a2 2 0 110-4 2 2 0 010 4zm0 4a2 2 0 110-4 2 2 0 010 4z" // три точки вертикально
      }
    ];

    buttons.forEach(({ title, svgPath }, index) => {
      const btn = document.createElement('button');
      btn.className = 'nav-btn';
      btn.title = title;
      btn.setAttribute('aria-label', title);

      // Создаем SVG и вставляем путь
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");

      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", svgPath);

      svg.appendChild(path);
      btn.appendChild(svg);

      btn.style.animationDelay = `${0.1 * index}s`;
      btn.addEventListener('click', () => {
        // Убираем активность у всех
        bottomNav.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        // Активируем текущую кнопку
        btn.classList.add('active');

        if (navigator.vibrate) navigator.vibrate(30);

        // Тут логика нажатия по кнопке
        console.log(`Clicked ${title}`);
      });

      bottomNav.appendChild(btn);
    });

    // По умолчанию активна первая кнопка
    const firstBtn = bottomNav.querySelector('.nav-btn');
    if (firstBtn) firstBtn.classList.add('active');
  }
});
