const DIMENSION = 480;

const playground = document.querySelector(".playground");
const drawBtn = document.querySelector("#draw-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const grid4 = document.querySelector("#grid4");
const grid8 = document.querySelector("#grid8");
const grid16 = document.querySelector("#grid16");
const grid32 = document.querySelector("#grid32");
let color = "black";
let grid = 16;

drawBtn.addEventListener("click", () => (color = "black"));
eraserBtn.addEventListener("click", () => (color = "whitesmoke"));

grid4.addEventListener("click", () => {
  grid = 4;
  createDivs();
});

grid8.addEventListener("click", () => {
  grid = 8;
  createDivs();
});

grid16.addEventListener("click", () => {
  grid = 16;
  createDivs();
});

grid32.addEventListener("click", () => {
  grid = 32;
  createDivs();
});

function createDivs() {
  for (let height = 0; height < DIMENSION / grid; height++) {
    const container = document.createElement("div");
    for (let width = 0; width < DIMENSION / grid; width++) {
      const insideDiv = document.createElement("div");
      insideDiv.className = `div${grid}`;
      container.appendChild(insideDiv);
    }
    playground.append(container);
  }

  const drawDivs = document.querySelectorAll(`.div${grid}`);
  let system = false;

  drawDivs.forEach((div) => {
    div.addEventListener("mousedown", () => (system = true));
  });

  drawDivs.forEach((div) => {
    div.addEventListener("mouseup", () => (system = false));
  });

  drawDivs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      if (system) {
        e.target.style.backgroundColor = color;
      }
    });
  });

  function clear() {
    drawDivs.forEach((div) => {
      div.style.backgroundColor = "whitesmoke";
    });
  }

  document.getElementById("clear").addEventListener("click", clear);
}

createDivs();
