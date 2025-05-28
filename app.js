const games = [
  {
    id: 1,
    title: "Super Fun Game",
    description:
      "Addictive and fun arcade game. Tap 'Install' to start playing!",
    icon: "icons/game1.png",
    ipaLink: "https://example.com/game1.ipa",
  },
  {
    id: 2,
    title: "Puzzle Master",
    description: "Challenge your brain with tricky puzzles.",
    icon: "icons/game2.png",
    ipaLink: "https://example.com/game2.ipa",
  },
  {
    id: 3,
    title: "Space Runner",
    description: "Fast-paced endless runner in outer space.",
    icon: "icons/game3.png",
    ipaLink: "https://example.com/game3.ipa",
  },
];

// Элементы DOM
const gameList = document.getElementById("game-list");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalIcon = document.getElementById("modal-icon");
const installBtn = document.getElementById("install-btn");
const ipaBtn = document.getElementById("ipa-btn");
const installProgress = document.getElementById("install-progress");
const progressFill = installProgress.querySelector(".progress-fill");
const modalClose = modal.querySelector(".modal-close");

let currentGame = null;

function renderGames() {
  games.forEach((game) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", "false");

    card.innerHTML = `
      <img src="${game.icon}" alt="${game.title} icon" class="game-icon" />
      <div class="game-info">
        <h3 class="game-title">${game.title}</h3>
        <p class="game-desc">${game.description}</p>
      </div>
    `;

    card.addEventListener("click", () => openModal(game));
    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        openModal(game);
      }
    });

    gameList.appendChild(card);
  });
}

function openModal(game) {
  currentGame = game;
  modalTitle.textContent = game.title;
  modalDescription.textContent = game.description;
  modalIcon.src = game.icon;
  installProgress.classList.add("hidden");
  progressFill.style.width = "0%";

  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  currentGame = null;
  installProgress.classList.add("hidden");
  progressFill.style.width = "0%";
}

function simulateInstall() {
  if (!currentGame) return;

  installProgress.classList.remove("hidden");
  let progress = 0;

  installBtn.disabled = true;
  ipaBtn.disabled = true;

  const interval = setInterval(() => {
    progress += 5;
    progressFill.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      alert(`${currentGame.title} installed!`);
      installBtn.disabled = false;
      ipaBtn.disabled = false;
      installProgress.classList.add("hidden");
      progressFill.style.width = "0%";
      closeModal();
    }
  }, 100);
}

function openIpa() {
  if (!currentGame) return;
  window.open(currentGame.ipaLink, "_blank");
}

// События
installBtn.addEventListener("click", simulateInstall);
ipaBtn.addEventListener("click", openIpa);
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Инициализация
renderGames();
