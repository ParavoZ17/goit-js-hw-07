function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelectorAll("#controls button");
const boxes = document.querySelector("#boxes");
const inputName = document.querySelector("input");


controls[0].addEventListener("click", createBoxes);
function createBoxes() {
  const amount = inputName.value;
  boxes.innerHTML = "";
  let width = 30;
  let height = 30;
  if (1 <= amount && amount <= 100) {
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      width = width + i * 10;
      height = height + i * 10;
      box.style.width = `${width}px`;
      box.style.height = `${height}px`;
      boxes.appendChild(box);
    }
  }
}

controls[1].addEventListener("click", destroyBoxes);

function destroyBoxes() {
   boxes.innerHTML = "";
}










