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
  const fragment = document.createDocumentFragment();
  let size = 30;
  if (1 <= amount && amount <= 100) {
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      fragment.appendChild(box);
      size += 10;
    }
  }
  boxes.innerHTML = "";
  boxes.appendChild(fragment);
}

controls[1].addEventListener("click", destroyBoxes);

function destroyBoxes() {
   boxes.innerHTML = "";
}



  