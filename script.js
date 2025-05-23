window.addEventListener('load', function () {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const installModal = document.getElementById('installModal');
  const gameCatalog = document.getElementById('gameCatalog');

  if (!isStandalone && isSafari) {
    installModal.style.display = 'flex';
    gameCatalog.classList.add('hidden');
  } else {
    installModal.style.display = 'none';
    gameCatalog.classList.remove('hidden');
    loadGames();
  }
});

function loadGames() {
  const games = [
    {
      id: 1,
      title: 'Super Adventure',
      description: 'An exciting platformer with stunning levels.',
      icon: 'https://via.placeholder.com/64?text=SA',
      downloadUrl: 'https://example.com/download/super-adventure'
    },
    {
      id: 2,
      title: 'Puzzle Master',
      description: 'Challenge your brain with amazing puzzles.',
      icon: 'https://via.placeholder.com/64?text=PM',
      downloadUrl: 'https://example.com/download/puzzle-master'
    },
    {
      id: 3,
      title: 'Speed Racer',
      description: 'High-speed racing game with cool cars.',
      icon: 'https://via.placeholder.com/64?text=SR',
      downloadUrl: 'https://example.com/download/speed-racer'
    }
  ];

  const container = document.querySelector('.game-list');
  container.innerHTML = ''; // очистить перед добавлением

  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';

    card.innerHTML = `
      <img class="game-icon" src="${game.icon}" alt="${game.title} icon" />
      <div class="game-info">
        <h3 class="game-title">${game.title}</h3>
        <p class="game-desc">${game.description}</p>
      </div>
      <button class="download-button" onclick="window.open('${game.downloadUrl}', '_blank')">Download</button>
    `;

    container.appendChild(card);
  });
}
