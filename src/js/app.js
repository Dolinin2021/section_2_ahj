const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let countDead = 0;
let countLost = 0;

for (let index = 1; index < 10; index++) {
  const getHole = (index) => document.getElementById(`hole${index}`);
  let data = getHole(index);

  data.onclick = () => {
    if (data.classList.contains("hole_has-mole")) {
      dead.textContent = Number(dead.textContent) + 1;
      countDead++;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
      countLost++;
    }
    if (countDead === 10) {
      alert("Вы победили!");
      countDead = 0;
      countLost = 0;
      window.location.reload();
    } else if (countLost === 5) {
      alert("Вы проиграли!");
      countDead = 0;
      countLost = 0;
      window.location.reload();
    }
  };
}

(() => {
  let playing = true,
    activeHole = 1;

  const stop = () => (playing = true),
    getHole = (index) => document.getElementById(`hole${index}`),
    deactivateHole = (index) => (getHole(index).className = "hole"),
    activateHole = (index) => (getHole(index).className = "hole hole_has-mole"),
    next = () =>
      setTimeout(() => {
        if (!playing) {
          return;
        }
        deactivateHole(activeHole);
        activeHole = Math.floor(1 + Math.random() * 9);
        activateHole(activeHole);
        next();
      }, 800);

  next();
})();
