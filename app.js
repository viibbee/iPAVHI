const games = [
  {
    id: 1,
    title: "SkyQuest",
    description: "Exciting flying adventure through mystical skies.",
    icon: "icons/skyquest.png",
    installUrl: "https://example.com/skyquest/install",
    ipaUrl: "https://example.com/skyquest/game.ipa",
  },
  {
    id: 2,
    title: "Puzzle Mania",
    description: "Challenging puzzles to test your brainpower.",
    icon: "icons/puzzlemania.png",
    installUrl: "https://example.com/puzzlemania/install",
    ipaUrl: "https://example.com/puzzlemania/game.ipa",
  },
  {
    id: 3,
    title: "Racing Thunder",
    description: "High-speed racing with stunning graphics.",
    icon: "icons/racingthunder.png",
    installUrl: "https://example.com/racingthunder/install",
    ipaUrl: "https://example.com/racingthunder/game.ipa",
  },
];

const gamesListEl = document.getElementById("games-list");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalIcon = document.getElementById("modal-icon");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const downloadStatus = document.getElementById("download-status");
const installBtn = document.getElementById("install-btn");
const ipaBtn = document.getElementById("ipa-btn");

let currentGame = null;

// Функция для создания карточек игр
function renderGames() {
  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.icon}" alt="${game.title} icon" />
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <button class="btn get-btn">Get</button>
    `;

    card.querySelector(".get-btn").addEventListener("click", () => {
      openModal(game);
    });

    gamesListEl.appendChild(card);
  });
}

// Открытие модального окна с информацией об игре
function openModal(game) {
  currentGame = game;
  modalIcon.src = game.icon;
  modalTitle.textContent = game.title;
  modalDescription.textContent = game.description;
  downloadStatus.textContent = "";
  installBtn.disabled = false;
  ipaBtn.disabled = false;
  modal.classList.remove("hidden");
}

// Закрытие модального окна
modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Обработчик кнопки Install
installBtn.addEventListener("click", () => {
  if (!currentGame) return;
  downloadStatus.textContent = "Starting installation...";
  installBtn.disabled = true;
  ipaBtn.disabled = true;

  // Имитируем процесс загрузки (пример)
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    downloadStatus.textContent = `Installing... ${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      downloadStatus.textContent = "Installation complete!";
      // Можно сделать редирект на installUrl
      window.open(currentGame.installUrl, "_blank");
      installBtn.disabled = false;
      ipaBtn.disabled = false;
    }
  }, 300);
});

// Обработчик кнопки IPA
ipaBtn.addEventListener("click", () => {
  if (!currentGame) return;
  downloadStatus.textContent = "Starting IPA download...";
  installBtn.disabled = true;
  ipaBtn.disabled = true;

  // Открываем ссылку на IPA файл
  window.open(currentGame.ipaUrl, "_blank");

  setTimeout(() => {
    downloadStatus.textContent = "IPA download started.";
    installBtn.disabled = false;
    ipaBtn.disabled = false;
  }, 1500);
});

// Инициализация сайта
renderGames();