const games = [
  {
    id: 1,
    title: "Zombie Shooter",
    description: "Fast-paced zombie shooting action. Survive the hordes!",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    installUrl: "https://example.com/install/zombie-shooter",
    ipaUrl: "https://example.com/downloads/zombie-shooter.ipa",
  },
  {
    id: 2,
    title: "Space Racer",
    description: "Race through the galaxy in this thrilling space racing game.",
    icon: "https://cdn-icons-png.flaticon.com/512/1995/1995523.png",
    installUrl: "https://example.com/install/space-racer",
    ipaUrl: "https://example.com/downloads/space-racer.ipa",
  },
  {
    id: 3,
    title: "Mystery Puzzle",
    description: "Solve puzzles to uncover hidden secrets in an ancient temple.",
    icon: "https://cdn-icons-png.flaticon.com/512/2099/2099069.png",
    installUrl: "https://example.com/install/mystery-puzzle",
    ipaUrl: "https://example.com/downloads/mystery-puzzle.ipa",
  },
];

// UI элементы
const gameListEl = document.getElementById("game-list");
const modalEl = document.getElementById("modal");
const modalTitleEl = document.getElementById("modal-title");
const modalDescEl = document.getElementById("modal-description");
const modalIconEl = document.getElementById("modal-icon");
const installBtn = document.getElementById("install-btn");
const ipaBtn = document.getElementById("ipa-btn");
const progressBar = document.getElementById("install-progress");
const progressFill = progressBar.querySelector(".progress-fill");

let currentGame = null;

// Функция рендера списка игр
function renderGameList(gamesArray) {
  gameListEl.innerHTML = "";
  for (const game of gamesArray) {
    const card = document.createElement("button");
    card.className = "game-card";
    card.setAttribute("aria-label", `Open details for ${game.title}`);
    card.innerHTML = `
      <img src="${game.icon}" alt="${game.title} icon" class="game-icon" />
      <div class="game-info">
        <h3 class="game-title">${game.title}</h3>
        <p class="game-desc">${game.description}</p>
      </div>
    `;
    card.onclick = () => openModal(game);
    gameListEl.appendChild(card);
  }
}

// Открытие модального окна с деталями игры
function openModal(game) {
  currentGame = game;
  modalTitleEl.textContent = game.title;
  modalDescEl.textContent = game.description;
  modalIconEl.src = game.icon;
  progressBar.classList.add("hidden");
  progressFill.style.width = "0%";
  modalEl.classList.remove("hidden");
  installBtn.disabled = false;
  ipaBtn.disabled = false;
}

// Закрытие модального окна
function closeModal() {
  modalEl.classList.add("hidden");
  currentGame = null;
}

// Клик по кнопке Install
installBtn.addEventListener("click", () => {
  if (!currentGame) return;
  installBtn.disabled = true;
  ipaBtn.disabled = true;
  progressBar.classList.remove("hidden");

  // Симуляция прогресса установки
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressFill.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      progressBar.classList.add("hidden");
      alert(`Installation of "${currentGame.title}" completed!`);
      closeModal();
    }
  }, 200);
});

// Клик по кнопке IPA - сразу скачиваем файл
ipaBtn.addEventListener("click", () => {
  if (!currentGame) return;
  window.open(currentGame.ipaUrl, "_blank");
});

// Закрытие модалки при клике по крестику
modalEl.querySelector(".modal-close").addEventListener("click", closeModal);

// Навигация по нижнему меню
const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Убрать активный класс у всех
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Показать нужную страницу
    const target = btn.getAttribute("data-target");
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.toggle("active", page.id === target);
    });
  });
});

// Поиск по играм
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();
  if (!term) {
    searchResults.innerHTML = "";
    return;
  }
  const filtered = games.filter((g) => g.title.toLowerCase().includes(term));
  renderSearchResults(filtered);
});

function renderSearchResults(results) {
  searchResults.innerHTML = "";
  if (results.length === 0) {
    searchResults.textContent = "No results found.";
    return;
  }
  for (const game of results) {
    const card = document.createElement("button");
    card.className = "game-card";
    card.setAttribute("aria-label", `Open details for ${game.title}`);
    card.innerHTML = `
      <img src="${game.icon}" alt="${game.title} icon" class="game-icon" />
      <div class="game-info">
        <h3 class="game-title">${game.title}</h3>
        <p class="game-desc">${game.description}</p>
      </div>
    `;
    card.onclick = () => {
      openModal(game);
      // Перейти на страницу с деталями, если надо
    };
    searchResults.appendChild(card);
  }
}

// Инициализация
renderGameList(games);

