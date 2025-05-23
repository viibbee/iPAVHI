const games = [
  {
    name: "Super Runner",
    icon: "assets/icons/runner.png",
    downloadLink: "https://example.com/super-runner.ipa"
  },
  {
    name: "Puzzle Pro",
    icon: "assets/icons/puzzle.png",
    downloadLink: "https://example.com/puzzle-pro.ipa"
  }
];

const catalog = document.getElementById("catalog");
const modal = document.getElementById("modal");
const modalIcon = document.getElementById("modal-icon");
const downloadBtn = document.getElementById("download-btn");

games.forEach(game => {
  const div = document.createElement("div");
  div.className = "game";
  div.innerText = game.name;
  div.onclick = () => {
    modal.classList.remove("hidden");
    modalIcon.src = game.icon;
    downloadBtn.onclick = () => window.open(game.downloadLink, "_blank");
  };
  catalog.appendChild(div);
});

modal.onclick = () => {
  modal.classList.add("hidden");
};
