(() => {
  let playing = true;
  let activeHole = 0;
  let holeGame = document.querySelector(".hole-game");
  let child = holeGame.children;

  holeGame.onclick = function (event) {
    if (event.target.classList.contains("hole_has-mole")) {
      event.target.classList.remove("hole_has-mole");
      next.clearTimeout;
    }
  };

  let next = () =>
    setTimeout(() => {
      if (!playing) {
        return;
      }
      child[activeHole].className = "hole";
      activeHole = Math.floor(1 + Math.random() * 7);
      child[activeHole].className = "hole hole_has-mole";
      next();
    }, 800);
  next();
})();
