const findLucky = () => {
  let arr = [2, 2, 3, 4];
  let lucky = [-1];
  let data = {};

  arr.forEach((el) => (data[el] = (data[el] || 0) + 1));

  const key = Object.keys(data);
  const value = Object.values(data);

  for (let num in key) key[num] == value[num] && lucky.push(value[num]);
  return lucky.length === 1 ? lucky : Math.max(...lucky);
};

const luckyNumber = {
  arr: [1, 2, 2, 3, 3, 3],
};

const LuckyNumber = (arr) => {
  let lucky = [-1];
  let data = {};

  arr.forEach((el) => (data[el] = (data[el] || 0) + 1));

  const key = Object.keys(data);
  const value = Object.values(data);

  for (let num in key)
    Number(key[num]) === Number(value[num]) && lucky.push(value[num]);

  return lucky.length === 1 ? lucky : Math.max(...lucky);
};

console.log(LuckyNumber(luckyNumber["arr"]));

const intToRoman = () => {
  let num = 1994;
  const data = [
    { n: 1000, r: "M" },
    { n: 900, r: "CM" },
    { n: 500, r: "D" },
    { n: 400, r: "CD" },
    { n: 100, r: "C" },
    { n: 90, r: "XC" },
    { n: 50, r: "L" },
    { n: 40, r: "XL" },
    { n: 10, r: "X" },
    { n: 9, r: "IX" },
    { n: 5, r: "V" },
    { n: 4, r: "IV" },
    { n: 1, r: "I" },
  ];
  let result = "";

  while (num > 0) {
    const numeral = data.find((el) => el.n <= num);
    result += numeral.r;
    num -= numeral.n;
  }

  return result;
};

const toRoman = {
  data: 1994,
};
const ToRoman = (num) => {
  const data = [
    { n: 1000, r: "M" },
    { n: 900, r: "CM" },
    { n: 500, r: "D" },
    { n: 400, r: "CD" },
    { n: 100, r: "C" },
    { n: 90, r: "XC" },
    { n: 50, r: "L" },
    { n: 40, r: "XL" },
    { n: 10, r: "X" },
    { n: 9, r: "IX" },
    { n: 5, r: "V" },
    { n: 4, r: "IV" },
    { n: 1, r: "I" },
  ];
  let result = "";

  while (num > 0) {
    const res = data.find((el) => el.n <= num);
    result += res.r;
    num -= res.n;
  }

  return result;
};

const Sort = () => {
  const num = [4, 8, 3, 3, 3, 4, 5, 6, 7, 8];
  const normal = num.sort((a, b) => a - b);

  for (let i = 0; i < num.length; i++) {
    let counter = num[i],
      j;

    for (j = i - 1; j >= 0 && num[j] > counter; j--) num[j + 1] = num[j];
    num[j + 1] = counter;
  }

  return num;
};

const sortArray = {
  sort: [1, 5, 6, 7, 6, 2, 2, 9, 1, 1, 0],
};

const SortArray = (num) => {
  for (let i = 0; i < num.length; i++) {
    let counter = num[i],
      j;
    for (j = i - 1; j >= 0 && num[j] > counter; j--) {
      num[j + 1] = num[j];
    }
    num[j + 1] = counter;
  }
  return num;
};
