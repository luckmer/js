const ops = document.querySelectorAll(".ops");
const number = document.querySelectorAll(".numb");
const result = document.querySelector(".panel");
const equal = document.querySelector(".equals");
const ClearResult = document.querySelector("#menu");

let resultNum = "";
let operator = "";
let Result;

const SetNumber = (e) => {
  result.innerHTML += e.target.innerHTML;
};

const SetOps = (e) => {
  const currentString = result.innerHTML;
  const lastChar = currentString[currentString.length - 1];
  if (!currentString.length) return;
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    const newText =
      currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
    result.innerHTML = newText;
  } else result.innerHTML += e.target.innerHTML;
};

const Calculate = () => {
  const currentString = result.innerHTML;
  result.innerHTML = Math.floor(eval(currentString));
};

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (e) => SetNumber(e));
}

for (let i = 0; i < ops.length; i++) {
  ops[i].addEventListener("click", (e) => SetOps(e));
}

equal.addEventListener("click", Calculate);

ClearResult.addEventListener("click", () => {
  result.innerHTML = "";
});
