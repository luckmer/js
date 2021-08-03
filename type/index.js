const TypeText = document.querySelector(".typed-text");
const data = ["the longest word  .", "some data right here"];

let index = 0;
let char = 0;

const type = () => {
  if (char < data[index].length) {
    TypeText.textContent += data[index][char];
    char++;
    setTimeout(type, 250);
  } else setTimeout(erase, 250);
};

const erase = () => {
  if (char > 0) {
    const result = data[index].substring(0, char - 1);
    TypeText.textContent = result;
    char--;
    setTimeout(erase, 100);
  } else {
    index++;
    if (index >= data.length) index = 0;
    setTimeout(type, 250);
  }
};

if (data.length) setTimeout(type, 250);
