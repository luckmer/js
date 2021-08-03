const multipleRefs = () => {
  const array = [
    { id: Math.random(), name: Math.random() },
    { id: Math.random(), name: Math.random() },
    { id: Math.random(), name: Math.random() },
    { id: Math.random(), name: Math.random() },
    { id: Math.random(), name: Math.random() },
    { id: Math.random(), name: Math.random() },
  ];

  const refs = [];

  const length = array.length;

  refs.push(
    Array(length)
      .fill()
      .map((_, i) => length[i] || Math.random())
  );

  return refs;
};

const checkOnesSegment = () => {
  const s = "110";
  let flag = false;

  for (let i = 0; i < s.length; i++) {
    const x = s.charAt(i);

    if (x === "0") flag = true;
    if (flag && x === "1") return false;
  }

  return true;
};

// console.log(checkOnesSegment());

const makeEqual = (words) => {
  if (!words.length) return false;
  const options = {};
  // const test = words.map((el) => el.split(""));
  // const items = test
  //   .map((category) => category)
  //   .reduce((prev, current) => [...prev, ...current])
  //   .map((e) => e);
  // items.forEach((element) => (options[element] = (options[element] || 0) + 1));

  words.forEach((word) => {
    const Word = word.split("");
    Word.forEach((element) => (options[element] = (options[element] || 0) + 1));
  });

  for (let key in options) {
    if (options[key] % words.length) return false;
  }

  return true;
};

// console.log(makeEqual(["ab", "a"]));

const minNumberOfFrogs = (croak) => {
  const idx = new Map([
    ["c", 0],
    ["r", 1],
    ["o", 2],
    ["a", 3],
    ["k", 4],
  ]);

  const counter = new Array(5).fill(0);
  let frog = 0;

  for (c of croak) {
    counter[idx.get(c)]++;
    for (let j = 0; j < idx.get(c); j++) {
      if (counter[j] < counter[idx.get(c)]) return -1;
    }

    if (c === "k") {
      frog = Math.max(counter[0], frog);
      for (let j = 0; j < 5; j++) counter[j]--;
    }
  }

  return counter.reduce((s, c) => s + c, 0) ? -1 : frog;
};

// console.log(minNumberOfFrogs("crcoakroak"));

const Update = (char, i, Sort) => {
  let C = char[i];
  C = Sort[C];
  return C;
};

var isAlienSorted = function (words, order) {
  const Sort = {};
  const Result = [];

  for (let i = 0; i < [...order].length; i++) {
    if (order[i]) {
      const Words = String.fromCharCode(i + 97);
      Sort[order[i]] = Words;
    }
  }

  for (let i = 0; i < words.length; i++) {
    const char = words[i];
    const Arr = [];

    for (let i = 0; i < char.length; i++) {
      let C = Update(char, i, Sort);
      Arr.push(C);
    }

    const Join = Arr.join("");
    Result.push(Join);
  }

  return Result.join() === Result.sort().join();
};

// console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));

const reformat = (s) => {
  const Format = (s) => s.split("").toString();
  let a = Format(s)
    .replace(/[a-zA-Z,]/g, "")
    .split("");

  let b = Format(s)
    .replace(/[0-9,]/g, "")
    .split("");

  if (a.length < b.length) [a, b] = [b, a];

  return a.length - b.length <= 1
    ? a.map((x, i) => x + (b[i] ? b[i] : "")).join("")
    : "";
};

// console.log(reformat("covid2019"));

const generate = (n) => {
  let result = [[1]];
  for (let row = 0; row < n; row++) {
    result[row] = [];
    for (let col = 0; col < row + 1; col++) {
      col === 0 || col === row
        ? (result[row][col] = 1)
        : (result[row][col] = result[row - 1][col - 1] + result[row - 1][col]);
    }
  }
  return result;
};

// console.log(generate(5));

const isValid = (s) => {
  const data = [];

  const legends = {
    "(": "(",
    "{": "{",
    "[": "[",
  };

  const check = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (legends[char] === char) {
      data.push(char);
    } else if (check[data.pop()] !== s[i]) {
      return false;
    }
  }
  return data.length ? 0 : 1;
};

const IsPalindrome = (x) => {
  let check = x;
  let y = 0,
    a = 0;

  while (x) {
    y = x % 10;
    x = parseInt(x / 10);
    a = a * 10 + y;
  }

  return a === check;
};

// console.log(IsPalindrome(121));

const TwoSum = (num, target) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[i] + num[j] === target) return [i, j];
    }
  }
};

// console.log(TwoSum([2, 7, 11, 15], 9));

const longestCommonPrefix = (str) => {
  if (str.length < 2) return str.join("");
  let prev = str[0];
  let current = str;

  for (let i = 0; i < prev.length; i++) {
    for (let j = 1; j < current.length; j++) {
      if (i === current[j].length || current[j][i] !== prev[i]) {
      }
    }
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

const intToRoman = (num) => {
  const integer = [
    { numb: 1000, roman: "M" },
    { numb: 900, roman: "CM" },
    { numb: 500, roman: "D" },
    { numb: 400, roman: "CD" },
    { numb: 100, roman: "C" },
    { numb: 90, roman: "XC" },
    { numb: 50, roman: "L" },
    { numb: 40, roman: "XL" },
    { numb: 10, roman: "X" },
    { numb: 9, roman: "IX" },
    { numb: 5, roman: "V" },
    { numb: 4, roman: "IV" },
    { numb: 1, roman: "I" },
  ];

  let result = "";

  while (num > 0) {
    const Find = integer.find((el) => el.numb <= num);
    result += Find.roman;
    num -= Find.numb;
  }
};

console.log(intToRoman(3));

const romanToInt = (s) => {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let one = obj[s[i]];
    let two = obj[s[i + 1]];
    result = one < two ? result - one : result + one;
  }

  return result;
};

// console.log(romanToInt("III"));

const removeDuplicates = (nums) => {
  let counter = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[counter]) {
      counter++;
      nums[counter] = nums[i];
    }
  }

  return counter;
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

const floodFill = (image, sr, sc, newColor) => {
  let color = image[sr][sc];
  if (color != newColor) dfs(image, sr, sc, color, newColor);
  return image;
};

const dfs = (image, r, s, color, newColor) => {
  if (image[r][s] === color) {
    image[r][s] = newColor;
    if (s >= 1) dfs(image, r, s - 1, color, newColor);
    if (s + 1 < image[0].length) dfs(image, r, s + 1, color, newColor);
    if (r >= 1) dfs(image, r - 1, s, color, newColor);
    if (r + 1 < image[0].length) dfs(image, r, s + 1, color, newColor);
  }

  return image;
};

// console.log(
//   floodFill(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// );

const findRotation = (g, t) => {
  for (let i = 1; i <= 4; i++) {
    rotate(g);
    if (Check(g, t)) return true;
  }
  return false;
};

const Check = (g, t) => {
  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g.length; j++) {
      if (g[i][j] !== t[i][j]) return false;
    }
  }
  return true;
};

const rotate = (matrix) => {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

// console.log(
//   findRotation(
//     [
//       [0, 1],
//       [1, 0],
//     ],
//     [
//       [1, 0],
//       [0, 1],
//     ]
//   )
// );

const RemoveDuplicates = (str) => {
  const result = [];
  str
    .split("")
    .forEach((i) =>
      i !== result[result.length - 1] ? result.push(i) : result.pop()
    );

  return result.join("");
};

const canBeIncreasing = (nums, target, start) => {
  let min = +Infinity;

  // for (let i = 0; i < nums.length; i++) {
  //   const char = nums[i];
  //   if (char === target) {
  //     if (Math.abs(i - start) < min) min = Math.abs(i - start);
  //   }
  // }

  nums.forEach((el, i) => {
    const Calc = Math.abs(i - start);
    if (el === target) {
      if (Calc < min) {
        min = Calc;
      }
    }
  });

  return min;
};

console.log(canBeIncreasing([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 9));
