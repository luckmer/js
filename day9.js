const releaseTimes = [12, 23, 36, 46, 62],
  keysPressed = "spuda";

const slowestKey = (releaseTimes, keysPressed) => {
  const Helper = (data) => data.sort((a, b) => a[1] - b[1]).map((el) => el[1]);

  const countNumber = [...keysPressed].map((value, i) => {
    let counter = 0;
    if (releaseTimes[i - 1]) {
      counter += releaseTimes[i] - releaseTimes[i - 1];
    } else counter += releaseTimes[0];

    return [value, counter];
  });

  const Sorted = Helper(countNumber);

  const FindElements = countNumber
    .filter((el) => el[1] === Sorted[Sorted.length - 1])
    .map((el) => el[0])
    .sort();

  return FindElements[FindElements.length - 1];
};

const s = "0";

const isNumber = (s) => {
  const SM = new StateMachine();
  const inputString = s.trim();
  let state = "start";

  for (const char of inputString) {
    try {
      state = SM.states[state][SM.classify(char)];
    } catch (error) {
      return false;
    }
  }
  return state === "integer" || state === "frac" || state === "exp_int";
};

class StateMachine {
  constructor() {
    this.states = {
      start: { sign: "int_sign", digit: "integer", dot: "point" },
      int_sign: { digit: "integer", dot: "point" },
      integer: { digit: "integer", dot: "frac", e: "exp" },
      point: { digit: "frac" },
      frac: { digit: "frac", e: "exp" },
      exp: { digit: "exp_int", sign: "exp_sign" },
      exp_sign: { digit: "exp_int" },
      exp_int: { digit: "exp_int" },
    };
  }

  classify(char) {
    if (!isNaN(parseInt(char))) return "digit";
    if (char === ".") return "dot";
    if (char === "+" || char === "-") return "sign";
    if (char === "e") return "e";
    throw new Error();
  }
}

const MaxDepth = "(1+(2*3)+((8)/4))+1";
const maxDepth = (s) => {
  let count1 = 0,
    count2 = 0;

  for (let i of s) {
    if (i === "(") count1++;
    if (i === ")") count1--;
    if (count1 > count2) count2 = count1;
  }

  return count2;
};

NumberOfMatches = 7;

const numberOfMatches = (n) => {
  let counter = 0;
  while (n > 1) {
    counter += Math.floor(n / 2);
    n = Math.ceil(n / 2);
  }
  return counter;
};

const Interpret = "G()()()()(al)";

const interpret = (command) => {
  let result = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") {
      result += "G";
    } else if (command[i] === "(" && command[i + 1] === ")") {
      result += "O";
    } else if (
      command[i] === "(" &&
      command[i + 1] === "a" &&
      command[i + 2] === "l"
    ) {
      result += "AL";
    }
  }

  return result;
};

const MaximumWealth = [
  [1, 5],
  [7, 3],
  [3, 5],
];
const maximumWealth = (accounts) => {
  const countAccounts = accounts.map((value, i) => {
    let counter = 0;
    for (let row of value) {
      if (row) {
        counter += row;
      }
    }
    return [i, counter];
  });

  const Sorted = countAccounts.sort((a, b) => a[1] - b[1]).map((el) => el[1]);

  return Sorted[Sorted.length - 1];
};

const WiggleSort = [1, 3, 2, 2, 3, 1];

const wiggleSort = (num) => {
  const n = num.length;
  const sorted = num.sort((a, b) => a - b);
  const Copy = [...sorted];
  for (let i = 0, j = n - 1, k = Math.floor((n - 1) / 2); i < n; i++) {
    num[i] = i % 2 === 0 ? Copy[k--] : Copy[j--];
  }
  return sorted;
};

const Wiggle = (num) => {
  const n = num.length;
  const sorted = num.sort();
  const Copy = [...sorted];
  for (let i = 0, j = n - 1, k = Math.floor((n - 1) / 2); i < n; i++) {
    num[i] = i % 2 === 0 ? Copy[k--] : Copy[j--];
  }

  return sorted;
};
const RRR = Wiggle(WiggleSort);

const LicenseKeyFormattingS = "2-5g-3-J";
LicenseKeyFormattingK = 2;

const licenseKeyFormatting = (s, k) => {
  s = s.split("-").join("");
  const Split = s.split("");

  for (let i = s.split("").length - 1 - k; i >= 0; i -= k) {
    Split[i] = `${Split[i]}-`;
  }
  return Split.join("").toUpperCase();
};

const licenceFormat = {
  a: "5F3Z-2e-9-w",
  b: 4,
};
const LicenceFormat = (s, k) => {
  s = s.split("-").join("");
  const Split = s.split("");

  for (let i = s.split("").length - 1 - k; i >= 0; i -= k) {
    Split[i] = `${Split[i]}-`;
  }
  return Split.join("").toUpperCase();
};

console.log(LicenceFormat(licenceFormat.a, licenceFormat.b));

const PowerFullIntegers = {
  x: 2,
  y: 3,
  bound: 10,
};

const powerfulIntegers = (x, y, bound) => {
  // const set = new Set();
  // for (let i = 1; i < bound; i *= x) {
  //   for (let j = 1; i + j <= bound; j *= y) {
  //     set.add(i + j);
  //     if (y === 1) break;
  //   }
  //   if (x === 1) break;
  // }
  // return [...set].sort((a, b) => a - b);

  const ans = new Set();
  for (let i = 0; (i < 20) & (Math.pow(x, i) <= bound); i++) {
    for (let j = 0; (j < 20) & (Math.pow(y, j) <= bound); j++) {
      const v = Math.pow(x, i) + Math.pow(y, j);
      if (v <= bound) ans.add(v);
    }
  }
  return Array.from(ans);
};

const PowerFullInt = (x, y, bound) => {
  const set = new Set();
  for (let i = 1; i < bound; i *= x) {
    for (let j = 1; i + j <= bound; j *= y) {
      set.add(i + j);
      if (y === 1) break;
    }
    if (x === 1) break;
  }
  return [...set].sort((a, b) => a - b);
};

// PowerFullInt(
//   PowerFullIntegers.x,
//   PowerFullIntegers.y,
//   PowerFullIntegers.bound
// )

const SlowestKey = {
  releaseTimes: [9, 29, 49, 50],
  keysPressed: "cbcd",
};

const SlowKey = (releaseTimes, keysPressed) => {
  const Helper = (data) => data.sort((a, b) => a[1] - b[1]).map((el) => el[1]);

  const Filter = (data) =>
    data
      .filter((item) => item[1] === Sort[Sort.length - 1])
      .map((el) => el[0])
      .sort();

  const Calc = [...keysPressed].map((el, i) => {
    let counter = 0;

    counter = releaseTimes[i - 1]
      ? releaseTimes[i] - releaseTimes[i - 1]
      : releaseTimes[0];

    return [el, counter];
  });

  const Sort = Helper(Calc);
  const result = Filter(Calc);

  return result[result.length - 1];
};

const LongestWord = {
  words: ["w", "wo", "wor", "worl", "world"],
};

const longestWord = (words) => {
  if (!words.length || !words) return "";
  let res = "";
  let set = new Set();

  for (let word of words) {
    let prev = word.substring(0, word.length - 1);
    if (word.length === 1 || set.has(prev)) {
      res = word.length > res.length ? word : res;
      set.add(word);
    }
  }
  return res;
};

const FindComplet = {
  num: 5,
};
