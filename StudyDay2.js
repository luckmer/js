const twoSum = () => {
  let numbers = [2, 7, 11, 15],
    target = 9;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
};

const reverse = () => {
  let x = -123;
  let y = 0,
    a = 0;

  while (x) {
    y = x % 10;
    x = parseInt(x / 10);
    a = a * 10 + y;
  }

  return a < Math.pow(-2, 31) || Math.pow(2, 31) < a ? 0 : a;
};

const palindrome = () => {
  let x = -121;
  let a = 0;
  let b = x;
  let c = 0;

  while (x > 0) {
    c = c * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  return b === c;
};

const romanToInt = () => {
  let s = "III";
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
    one < two ? (result -= one) : (result += one);
  }
  return result;
};

const longestCommonPrefix = () => {
  const words = ["flower", "flow", "flight"];
  if (words.length < 2) return words.join("");
  let prev = words[0];
  let current = words;
  let result = "";

  for (let i = 0; i < prev.length; i++) {
    for (let j = 1; j < current.length; j++) {
      if (i == current[j].length || current[j][i] != prev[i]) {
        return prev.substring(0, i);
      }
    }
  }
};

const isValid = () => {
  let s = "()[]{}";
  let n = [];
  let N = s.length;
  for (let i = 0; i < N; i++) {
    let a = s[i];
    switch (a) {
      case "(":
        n.push(")");
        break;
      case "{":
        n.push("}");
        break;
      case "[":
        n.push("]");
        break;
      default:
        if (a != n.pop()) {
          return false;
        }
    }
  }
  return n.length == 0;
};

const singleNumber = () => {
  const number = [2, 2, 1];
  const set = new Set();

  number.forEach((num) => (set.has(num) ? set.delete(num) : set.add(num)));
  return [...set][0];
};

const containsDuplicate = () => {
  const numbers = [1, 2, 3, 1].sort();
  const numbersLength = numbers.length - 1;

  for (let i = 0; i < numbersLength; i++) {
    if (numbers[i] == numbers[i + 1]) return true;
  }
  return false;
};

const containsNearbyDuplicate = () => {
  const nums = [1, 2, 3, 1],
    k = 3;

  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) return true;
    map[nums[i]] = i;
  }
  return false;
};

const isIsomorphic = () => {
  const s = "foo",
    t = "foo";

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }
  return true;
};

const isPalindrome = () => {
  let words = "A man, a plan, a canal: Panama";
  const regex = /[^a-zA-Z0-9]/g;
  const lower = words.toLowerCase().replace(regex, "");
  const Reverse = lower.split("").reverse().join("");
  return Reverse === lower;
};

const TwoSumII = () => {
  const numbers = [2, 7, 11, 15],
    target = 9;

  let comp = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (comp[numbers[i]] >= 0) {
      return [comp[numbers[i]], i + 1];
    }
    comp[target - numbers[i]] = i + 1;
  }
};

const reverseVowels = () => {
  const s = "hello";
  const Split = [...s];
  const map = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const Reverse = new Array();
  const Words = new Array();

  for (let i = 0; i < Split.length; i++) {
    if (map.includes(Split[i])) {
      Reverse.push(Split[i]);
      Words.push(i);
    }
  }

  Reverse.reverse();
  for (let i = 0; i < Words.length; i++) {
    Split[Words[i]] = Reverse[i];
  }

  return Split.join("");
};

const kWeakestRows = () => {
  const mat = [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    k = 3;

  return mat
    .map((value, i) => {
      let counter = 0;
      for (let row of value) {
        if (row) {
          counter++;
        }
      }
      return [i, counter];
    })
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map((el) => el[0]);
};

function wordToBin() {
  const string = "man";
  return Array.from(string, (c) => "0" + c.charCodeAt(0).toString(2));
}
const sumEvenAfterQueries = () => {
  let A = [1, 2, 3, 4],
    queries = [
      [1, 0],
      [-3, 1],
      [-4, 0],
      [2, 3],
    ];
  const result = [queries.length];
  let S = A.filter((a) => a % 2 === 0).reduce((a, b) => a + b, 0);

  for (let i = 0; i < queries.length; i++) {
    let val = queries[i][0],
      index = queries[i][1];

    if (A[index] % 2 === 0) S -= A[index];
    A[index] += val;
    if (A[index] % 2 === 0) S += A[index];

    result[i] = S;
  }
  console.log(result);
};

const arrayRankTransform = () => {
  const arr = [40, 10, 20, 30];
};
// Output: [4,1,2,3]
console.log(arrayRankTransform());

const maximumWealth = () => {
  let accounts = [
    [1, 2, 3],
    [3, 2, 1],
  ];

  const countAccounts = accounts.map((value, i) => {
    let counter = 0;
    for (let row of value) {
      if (row) {
        counter += row;
      }
    }
    return [i, counter];
  });

  const sortedArray = countAccounts
    .sort((a, b) => a[1] - b[1])
    .map((el) => el[1]);

  return sortedArray[sortedArray.length - 1];
};

function calculate() {
  let txt = "1plus2plus3plus4";
  const plus = /plus/gi;
  const minus = /minus/gi;
  return eval(txt.replace(plus, "+").replace(minus, "-")).toString();
}
console.log(calculate());
