const pages = document.querySelectorAll('.page');
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Активируем кнопку
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Показываем нужную страницу
    const targetId = btn.getAttribute('data-target');
    pages.forEach(p => {
      if (p.id === targetId) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  });
});

// Инициализация списка игр
const games = [
  {
    id: "game1",
    title: "Cyber Runner",
    description: "Fast-paced endless runner in neon city.",
    icon: "https://i.ibb.co/wKZ7K0Z/cyber-runner.png",
  },
  {
    id: "game2",
    title: "Mystic Quest",
    description: "Explore ancient ruins and solve puzzles.",
    icon: "https://i.ibb.co/FKJ4jR9/mystic-quest.png",
  },
  {
    id: "game3",
    title: "Galaxy Shooter",
    description: "Arcade-style space battle shooter.",
    icon: "https://i.ibb.co/hg1Xc7H/galaxy-shooter.png",
  },
  {
    id: "game4",
    title: "Puzzle Cube",
    description: "Mind-bending 3D puzzles.",
    icon: "https://i.ibb.co/9yxX91b/puzzle-cube.png",
  }
];

const gameListEl = document.getElementById('game-list');

games.forEach(game => {
  const card = document.createElement('article');
  card.className = 'game-card';
  card.tabIndex = 0;
  card.innerHTML = `
    <img src="${game.icon}" alt="${game.title} icon" class="game-icon" />
    <div class="game-info">
      <h3 class="game-title">${game.title}</h3>
      <p class="game-desc">${game.description}</p>
    </div>
  `;
  // Здесь можно добавить обработчик клика, открывающий модалку и пр.
  gameListEl.appendChild(card);
});
