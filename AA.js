const tokens = ["2", "1", "+", "3", "*"];

const evalRPN = (tokens) => {
  const options = ["+", "-", "*", "/"];
  const result = [];

  for (let i = 0; i < tokens.length; i++) {
    const data = tokens[i];
    if (options.includes(data)) {
      const A = result.pop();
      const B = result.pop();
      const test = ~~eval(`(${A})${data}(${B})`);
      result.push(test);
    } else {
      result.push(data);
    }
  }
  return result;
};

const EvalValues = (tokens) => {
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => ~~(a / b),
  };

  const stack = [];

  for (let n of tokens) {
    if (ops[n]) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(ops[n](a, b));
    } else {
      stack.push(Number(n));
    }
  }
  return stack;
};

var countPrimes = function (n) {
  if (n <= 2) return 0;

  const numbers = new Array(n).fill(0);
  const upper = Math.sqrt(n);
  let numberOfPrimes = 0;

  for (let p = 2; p <= upper; ++p) {
    if (numbers[p] === 0) {
      for (let j = p * p; j < n; j += p) {
        numbers[j] = 1;
      }
    }
  }

  for (let i = 2; i < n; i++) if (numbers[i] === 0) numberOfPrimes++;

  return numberOfPrimes;
};

const IsHappyNumber = (n) => {
  const set = new Set();

  while (n !== 1) {
    const arr = n.toString().split("");
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      count += parseInt(Math.pow(arr[i], 2));
    }
    if (set.has(count)) return false;
    set.add(count);
    n = count;
  }

  return true;
};

const OtherWay = (n, check = {}) => {
  if (n === 1) return true;
  if (check[n]) return false;

  check[n] = n;
  const arr = n.toString().split("");
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter += parseInt(Math.pow(arr[i], 2));
  }

  return OtherWay(counter, check);
};

var nextGreatestLetter = function (letters, target) {
  // letters = letters.sort();

  // let low = 0,
  //   high = letters.length - 1,
  //   length = letters.length - 1,
  //   mid;

  // if (target < letters[low] || target >= letters[high]) return letters[low];

  // while (low < high) {
  //   mid = Math.floor((high - low) / 2);

  //   if (letters[mid] <= target) {
  //     if (mid + 1 < letters.length && target < letters[mid + 1])
  //       return letters[mid + 1];

  //     low = mid + 1;
  //   } else high = mid;
  // }

  // return letters[mid];

  for (let i of letters) {
    if (i > target) return i;
  }
  return letters[0];
};

let dividend = 10,
  divisor = 3;

const Divide = (dividend, divisor) => {
  if (dividend <= -2147483648 && divisor == -1) return 2147483647;
  let sign = Math.sign(dividend) == Math.sign(divisor) ? 1 : -1;
  [dividend, divisor] = [Math.abs(dividend), Math.abs(divisor)];

  if (divisor == 1 || divisor == -1) return sign * dividend;
  let result = 0;

  while (divisor <= dividend) {
    let double = divisor,
      count = 1;
    while (double <= dividend >> 1) {
      double <<= 1;
      count <<= 1;
    }
    result += count;
    dividend -= double;
  }
  return sign * result;
};

const luckyNumber = {
  arr: [1, 2, 2, 3, 3, 3],
};

const LuckyNumber = (arr) => {
  let lucky = [-1];
  let data = {};

  arr.forEach((el) => (data[el] = (data[el] || 0) + 1));

  const key = Object.keys(data);
  const values = Object.values(data);

  for (let num in key) {
    Number(key[num]) === Number(values[num]) && lucky.push(values[num]);
  }

  return lucky.length === 1 ? lucky : Math.max(...lucky);
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

const binary = {
  num: [-1, 0, 3, 5, 9, 12],
  target: 9,
};
const BinarySearch = (num, target) => {
  let pivot,
    left = 0,
    right = num.length - 1;

  while (left <= right) {
    pivot = Math.floor(left + (right - left) / 2);
    if (num[pivot] == target) return pivot;
    if (target < num[pivot]) right = pivot - 1;
    else left = pivot + 1;
  }
  return -1;
};

console.log(BinarySearch(binary.num, binary.target));
