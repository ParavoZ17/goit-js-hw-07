const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
inputName.addEventListener("input", handelinput);
function handelinput(event) { 
    const trimtValue = event.target.value.trim();
    if (trimtValue) {
      return (nameOutput.textContent = trimtValue);
    };
    return nameOutput.textContent = "Anonymous" ;
};

