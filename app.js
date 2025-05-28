const games = [
  {
    name: "Game One",
    image: "https://via.placeholder.com/150",
    url: "https://example.com/game1"
  },
  {
    name: "Game Two",
    image: "https://via.placeholder.com/150",
    url: "https://example.com/game2"
  }
];

const appList = document.getElementById("app-list");

games.forEach(game => {
  const div = document.createElement("div");
  div.className = "app";
  div.innerHTML = `
    <a href="${game.url}" target="_blank">
      <img src="${game.image}" alt="${game.name}" />
      <p>${game.name}</p>
    </a>
  `;
  appList.appendChild(div);
});
