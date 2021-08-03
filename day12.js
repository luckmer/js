// 1. Please write a function that reverses a string

const string = "reverse ";

const Reverse = (str) => str.split("").reverse().join("");
Reverse(string);

// 2. Please write a function that filters out numbers from a list
const list = [1, 4, 7, 5, 6, 1, "word", "name", ""];
const Filter = (arr) => arr.filter((item) => item !== "" && !isNaN(item));
Filter(list);

// 3. Please write a function that shows the usage of closures

const calculates = () => {
  let x = 42;
  let n = () => {
    x += 1;
    console.log(x);
  };
  return n;
};

let calc = calculates();
// calc();
// calc();
// calc();

// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const array2 = [[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5];

const Concat = (arr) => {
  return arr
    .reduce(
      (flat, flatten) =>
        flat.concat(Array.isArray(flatten) ? Concat(flatten) : flatten),
      []
    )
    .sort((a, b) => a - b);
};

// console.log(Concat(array2));

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const Find = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

// console.log(Find(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"]));

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const FindDifferent = (arr1, arr2) => {
  return arr1
    .filter((a) => !arr2.includes(a))
    .concat(arr2.filter((item) => !arr1.includes(item)));
};

// console.log(FindDifferent(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"]));

// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]

const Input = { color: "Blue", id: "22", size: "xl" };

const Transform = (data) => Object.entries(data);

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }

const InputII = [
  ["color", "blue"],
  ["id", "22"],
  ["size", "xl"],
];

const ReTransform = (data) => Object.fromEntries(data);

// console.log(ReTransform(InputII));

// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const I = [1, 2, 3];
const II = [4, 5, 6, 7];

const Tuples = (arr1, arr2) => {
  const Test =
    arr1.length > arr2.length
      ? arr2.map((el, index) => [arr1[index], el])
      : arr1.map((el, index) => [el, arr2[index]]);

  console.log(Test);
};

// Tuples(I, II);

// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const InputIII = ["a", "b", "c", "d"];
const Obj = { a: { b: { c: { d: "23" } } } };

const GetValue = (path, obj) => {
  const Test = path.reduce((val, index) => val && val[index], obj);
  console.log(Test);
};

// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const obj1 = { a: "b", c: "d" };
const obj2 = { c: "d", a: "b" };

const TestObj = (obj1, obj2) => {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for (let i of key1) {
    if (obj1[i] !== obj2[i]) return false;
  }

  return true;
};

// console.log(TestObj(obj1, obj2));

// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const keys = ["color", "size"];
const objII = { color: "Blue", id: "22", size: "xl" };

const DeleteKey = (key, obj) => {
  for (let i of key) {
    delete obj[i];
  }
  console.log(obj);
};

// 13 find duplicate number
// example nums = [1,3,4,2,2]
// example 2

const numsII = [1, 3, 4, 2, 2];
const findDuplicates = (arr) => {
  let obj = {};

  arr.forEach((el) => (obj[el] = (obj[el] || 0) + 1));

  for (let key in obj) {
    if (obj[key] >= 2) return key;
  }
};

// 14 Longer Contiguous Segments of Ones than Zeros
// Given a binary string s, return true if the longest contiguous segment of 1s is strictly longer than the longest contiguous segment of 0s in s. Return false otherwise.
// For example, in s = "110100010" the longest contiguous segment of 1s has length 2, and the longest contiguous segment of 0s has length 3.
// Note that if there are no 0s, then the longest contiguous segment of 0s is considered to have length 0. The same applies if there are no 1s.
// example input "1101"
// example output true

const checkZero = "1101";
const CheckZero = (arr) => {
  let checkA = 0,
    checkB = 0,
    A = 0,
    B = 0;

  for (let i of arr) {
    A = i === "1" ? A + 1 : 0;
    B = i === "0" ? B + 1 : 0;
    checkA = Math.max(checkA, A);
    checkB = Math.max(checkB, B);
  }

  return checkA > checkB;
};

// 15 Check if Binary String Has at Most One Segment of Ones
// Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.
// Input: s = "1001"
// Output: false
// Explanation: The ones do not form a contiguous segment.

const s = "110";

const CheckOnes = (s) => {
  let calc = 0;
  let flag = false;

  for (let i of s) {
    if (i === "0") {
      flag = true;
    }

    if (flag && i === "1") return false;
  }
  return true;
};

const tokens = ["2", "1", "+", "3", "*"];

const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => ~~(a / b),
};

const EvalValues = (tokens) => {
  const result = [];
  for (let token of tokens) {
    if (ops[token]) {
      const b = result.pop();
      const a = result.pop();
      result.push(ops[token](a, b));
    } else result.push(Number(token));
  }
  return result;
};

// console.log(EvalValues(tokens));

const n = 19;

const countPrimes = (n) => {
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

  for (let i = 2; i < n; i++) {
    if (numbers[i] === 0) numberOfPrimes++;
  }

  return numberOfPrimes;
};

// console.log(countPrimes(n));

const IsHappy = (n) => {
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
console.log(IsHappy(19));
