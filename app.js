const games = [
  {
    id: "1",
    title: "Clash of Clans",
    description: "Build your village, train troops, and battle!",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920112.png",
    installUrl: "https://example.com/install/clash",
    ipaUrl: "https://example.com/ipa/clash.ipa"
  },
  {
    id: "2",
    title: "Among Us",
    description: "Find the impostor before it's too late.",
    icon: "https://cdn-icons-png.flaticon.com/512/1144/1144709.png",
    installUrl: "https://example.com/install/amongus",
    ipaUrl: "https://example.com/ipa/amongus.ipa"
  },
  {
    id: "3",
    title: "Minecraft",
    description: "Create and explore endless worlds.",
    icon: "https://cdn-icons-png.flaticon.com/512/590/590887.png",
    installUrl: "https://example.com/install/minecraft",
    ipaUrl: "https://example.com/ipa/minecraft.ipa"
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

