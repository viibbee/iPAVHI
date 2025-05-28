const games = [
  {
    id: 1,
    title: "Shadow Quest",
    desc: "Epic RPG adventure in a dark fantasy world.",
    icon: "https://i.imgur.com/6qf1xjq.jpg",
    ipa: "https://example.com/shadowquest.ipa",
    install: "https://t.me/install_shadowquest"
  },
  {
    id: 2,
    title: "Pixel Racer",
    desc: "Fast-paced pixel art racing game.",
    icon: "https://i.imgur.com/WzP18Ub.jpg",
    ipa: "https://example.com/pixelracer.ipa",
    install: "https://t.me/install_pixelracer"
  },
  {
    id: 3,
    title: "Neon Wars",
    desc: "Multiplayer neon-themed shooter.",
    icon: "https://i.imgur.com/BGdwPTg.jpg",
    ipa: "https://example.com/neonwars.ipa",
    install: "https://t.me/install_neonwars"
  },
];

const gameList = document.getElementById("game-list");
const modal = document.getElementById("modal");
const modalIcon = document.getElementById("modal-icon");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const installBtn = document.getElementById("install-btn");
const ipaBtn = document.getElementById("ipa-btn");
const modalClose = modal.querySelector(".modal-close");
const progressBar = document.getElementById("install-progress");
const progressFill = progressBar.querySelector(".progress-fill");

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");

let currentGame = null;

// Создаем карточки игр
function renderGames() {
  gameList.innerHTML = "";
  games.forEach(game => {
    const card = document.createElement("button");
    card.className = "game-card";
    card.setAttribute("aria-label", `Open details for ${game.title}`);
    card.innerHTML = `
      <img class="game-icon" src="${game.icon}" alt="${game.title} icon" />
      <div class="game-info">
        <h3 class="game-title">${game.title}</h3>
        <p class="game-desc">${game.desc}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(game));
    gameList.appendChild(card);
  });
}

function openModal(game) {
  currentGame = game;
  modalIcon.src = game.icon;
  modalTitle.textContent = game.title;
  modalDescription.textContent = game.desc;
  progressBar.classList.add("hidden");
  progressFill.style.width = "0%";
  modal.classList.remove("hidden");
  installBtn.disabled = false;
  ipaBtn.disabled = false;
  installBtn.focus();
}

function closeModal() {
  modal.classList.add("hidden");
  currentGame = null;
}

modalClose.addEventListener("click", closeModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Симуляция процесса установки с прогрессбаром
installBtn.addEventListener("click", () => {
  if (!currentGame) return;

  installBtn.disabled = true;
  ipaBtn.disabled = true;
  progressBar.classList.remove("hidden");
  let progress = 0;

  const interval = setInterval(() => {
    progress += 10;
    progressFill.style.width = progress + "%";
    progressBar.setAttribute("aria-valuenow", progress);

    if (progress >= 100) {
      clearInterval(interval);
      alert(`Installation started for ${currentGame.title}!\n\nYou will be redirected now.`);
      window.open(currentGame.install, "_blank");
      closeModal();
    }
  }, 300);
});

// Кнопка IPA — просто открывает ссылку на IPA файл
ipaBtn.addEventListener("click", () => {
  if (!currentGame) return;
  window.open(currentGame.ipa, "_blank");
  closeModal();
});

// Навигация по страницам
navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Активная кнопка
    navButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Показать нужную страницу
    const target = btn.dataset.target;
    pages.forEach(p => {
      if (p.id === target) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });
  });
});

// Поиск (для примера фильтруем по названию)
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  if (query === "") {
    searchResults.innerHTML = "<p>Type to search apps...</p>";
    return;
  }
  const filtered = games.filter(g => g.title.toLowerCase().includes(query));
  if (filtered.length === 0) {
    searchResults.innerHTML = "<p>No results found.</p>";
    return;
  }
  searchResults.innerHTML = "";
  filtered.forEach(game => {
    const btn = document.createElement("button");
    btn.className = "game-card";
    btn.style.width = "100%";
    btn.innerHTML = `
      <img class="game-icon" src="${game.icon}" alt="${game.title} icon" style="width:60px; height:60px; border-radius:12px; flex-shrink:0; margin-right:12px;" />
      <div class="game-info" style="padding:0; flex-grow:1;">
        <h3 class="game-title">${game.title}</h3>
        <p class="game-desc">${game.desc}</p>
      </div>
    `;
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.addEventListener("click", () => openModal(game));
    searchResults.appendChild(btn);
  });
});

// Инициализация
renderGames();
searchResults.innerHTML = "<p>Type to search apps...</p>";
