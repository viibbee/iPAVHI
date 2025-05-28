const games = [
  {
    id: "1",
    title: "Dragon Quest",
    description: "Embark on an epic dragon quest!",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png", // твоя иконка 1
    installUrl: "https://example.com/install/dragonquest",
    ipaUrl: "https://example.com/ipa/dragonquest.ipa"
  },
  {
    id: "2",
    title: "Space Raiders",
    description: "Conquer the galaxy in this space adventure.",
    icon: "https://cdn-icons-png.flaticon.com/512/471/471662.png", // твоя иконка 2
    installUrl: "https://example.com/install/spaceraiders",
    ipaUrl: "https://example.com/ipa/spaceraiders.ipa"
  },
  {
    id: "3",
    title: "Mystic Farm",
    description: "Build and harvest your mystical farm.",
    icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png", // твоя иконка 3 (замени ссылку на свою)
    installUrl: "https://example.com/install/mysticfarm",
    ipaUrl: "https://example.com/ipa/mysticfarm.ipa"
  },
];

const gameList = document.getElementById('game-list');
const modal = document.getElementById('modal');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const installBtn = document.getElementById('install-btn');
const ipaBtn = document.getElementById('ipa-btn');
const modalClose = modal.querySelector('.modal-close');
const installProgress = document.getElementById('install-progress');
const progressFill = installProgress.querySelector('.progress-fill');

let currentGame = null;

function renderGames() {
  gameList.innerHTML = '';
  for (const game of games) {
    const card = document.createElement('button');
    card.className = 'game-card';
    card.setAttribute('aria-label', `Open details for ${game.title}`);
    card.setAttribute('type', 'button');
    card.dataset.gameId = game.id;

    card.innerHTML = `
      <img src="${game.icon}" alt="${game.title} icon" class="game-icon" />
      <div class="game-info">
        <h3 class="game-title">${game.title}</h3>
      </div>
    `;

    card.addEventListener('click', () => openModal(game.id));
    gameList.appendChild(card);
  }
}

function openModal(gameId) {
  const game = games.find(g => g.id === gameId);
  if (!game) return;

  currentGame = game;
  modalIcon.src = game.icon;
  modalIcon.alt = `${game.title} icon`;
  modalTitle.textContent = game.title;
  modalDescription.textContent = game.description;
  installProgress.classList.add('hidden');
  progressFill.style.width = '0%';

  modal.classList.remove('hidden');
  modal.focus();
}

function closeModal() {
  modal.classList.add('hidden');
  currentGame = null;
  installProgress.classList.add('hidden');
  progressFill.style.width = '0%';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

installBtn.addEventListener('click', () => {
  if (!currentGame) return;
  startInstall(currentGame.installUrl);
});

ipaBtn.addEventListener('click', () => {
  if (!currentGame) return;
  window.open(currentGame.ipaUrl, '_blank');
});

function startInstall(url) {
  installProgress.classList.remove('hidden');
  progressFill.style.width = '0%';

  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressFill.style.width = progress + '%';
    installProgress.setAttribute('aria-valuenow', progress);

    if (progress >= 100) {
      clearInterval(interval);
      alert('Installation complete!');
      installProgress.classList.add('hidden');
      progressFill.style.width = '0%';
    }
  }, 300);

  // Здесь можно добавить реальную логику установки
}

renderGames();
