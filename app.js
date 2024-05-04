const inputBox = document.querySelector("#input-box");
const resultBox = document.querySelector("#result-box");
const changeColor = () => {
    const input = inputBox.value;
    resultBox.style.backgroundColor = input;
}

inputBox.addEventListener("input", changeColor);