const alphabet = [...Array(26).keys()].map((el) => [
  String.fromCharCode(el + 97),
  el,
]);

const Last = alphabet[alphabet.length - 1];
const Pop = alphabet.pop();
const AA = alphabet.unshift();

const DividingNumbers = (arr) => {
  const result = [];

  for (let i of arr) {
    if (PossibleDivision(i)) result.push(i);
  }
  return result;
};

const PossibleDivision = (arr) => {
  let temp = arr;
  while (temp) {
    let calc = temp % 10;
    if (calc === 0 || arr % calc !== 0) return false;
    temp = Math.floor(temp / 10);
  }
  return true;
};

// console.log(DividingNumbers([2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

const Power = (x, y, bound) => {
  const set = new Set();

  for (let i = 1; i < bound; i *= x) {
    for (let j = 1; i + j < bound; j *= y) {
      set.add(i + j);
      if (y === 1) break;
    }
    if (x === 1) break;
  }
  return [...set].sort((a, b) => a - b);
};
// console.log(Power(2, 3, 10));

const MinInsert = (s) => {
  let left = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") left++;

    if (char === ")") {
      left === 0 ? count++ : left--;
      s[i + 1] != ")" ? count++ : i++;
    }
  }
  return count + left * 2;
};

// console.log(MinInsert("())))()"));

const ClimbStair = (cost) => {
  let a = cost[0];
  let b = cost[1];

  // for (let i = 2; i < cost.length; i++) {
  //   let temp = b;
  //   b = Math.floor(Math.abs(a, b) + cost[i]);
  //   a = temp;
  // }
  // return Math.min(a, b);

  for (let i = 2; i < cost.length; i++) {
    const temp = b;
    b = Math.floor(~~(a, b) + cost[i]);
    a = temp;
  }

  return Math.min(a, b);
};
// console.log(ClimbStair([10, 15, 20]));

const maxCalc = (s) => {
  let count1 = 0,
    count2 = 0;
  for (let i of s) {
    if (i === "(") count1++;
    if (i === ")") count1--;
    if (count1 > count2) count2 = count1;
  }

  return count2;
};

// console.log(maxCalc("(1+(2*3)+((8)/4))+1"));dsa

const calcSum = (arr) => {
  let sum = 0;

  arr.reduce(function (acc, currentVal) {
    const isArray = Array.isArray(currentVal);
    if (isArray) {
      return acc.concat(calcSum(currentVal));
    } else {
      sum += currentVal;
      console.log(currentVal);
      return acc.concat(currentVal);
    }
  }, []);

  return sum;
};

// console.log(calcSum([4, 5, 7, 8, [5, 7, 9, [3, 5, 7]]]));

const obj = {
  level1: {
    level2: {
      level3: {
        more: "stuff",
        other: "otherz",
        level4: {
          the: "end",
        },
      },
    },
    level2still: {
      last: "one",
    },
    am: "bored",
  },
  more: "what",
  ipsum: {
    lorem: "latin",
  },
};

const flatten = {};
const removeFlat = (obj) => {
  for (let key in obj) {
    typeof obj[key] === "object"
      ? removeFlat(obj[key])
      : (flatten[key] = obj[key]);
  }
  return flatten;
};

// console.log(removeFlat(obj));

function Base(name) {
  this.name = name;
}
function Child(name) {
  Base.call(this, name);
}

Child.prototype = new Base();

Base.prototype.getName = function () {
  return "Hello " + this.name;
};

var base = new Base("Java");
var child = new Child("Java8");

// alert(base.getName());
// alert(child.getName());

const kWeakestRows = (mat, k) => {
  const soldiers = mat.map((el, i) => {
    let counter = 0;
    for (let row of el) {
      if (row) counter++;
    }
    return [i, counter];
  });

  return soldiers
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map((el) => el[0]);
};

// console.log(
//   kWeakestRows(
//     [
//       [1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 0],
//       [1, 0, 0, 0, 0],
//       [1, 1, 0, 0, 0],
//       [1, 1, 1, 1, 1],
//     ],
//     3
//   )
// );
const findPoisonedDuration = (a, duration) => {
  if (!a.length) return 0;
  let ans = duration;

  for (let i = 0; i < a.length - 1; i++) {
    ans += Math.min(a[i + 1] - a[i], duration);
  }

  return ans;
};

// console.log(findPoisonedDuration([1, 4], 2));

const wordPattern = (t, s) => {
  s = s.split(" ");

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    console.log(s.indexOf(s[i]), t.indexOf(t[i]));
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }

  return true;
};

// console.log(wordPattern("abba", "dog cat cat dog"));

const xorOperation = (n, start) => {
  let a = start;
  for (let i = 1; i < n; i++) a ^= start + 2 * i;
  return a;
};

// console.log(xorOperation(4, 3));

const numWaterBottles = (numBottles, numExchange) => {
  let drank = numBottles;
  let empty = numBottles;

  while (empty >= numExchange) {
    let Full = Math.floor(empty / numExchange);
    drank += Full;
    empty = (empty % numExchange) + Full;
  }

  return drank;
};

// console.log(numWaterBottles(9, 3));
const isPerfectSquare = (num) => {
  if (num < 2) return true;
  let calc = Math.floor(num / 2);
  while (calc >= 0) {
    if (calc * calc == num) return true;
    calc--;
  }

  return false;
};

// console.log(isPerfectSquare(1));

const isRoman = (num) => {
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
    const Find = data.find((el) => el.n <= num);
    result += Find.r;
    num -= Find.n;
  }
  return result;
};

// console.log(isRoman(1994));

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
// console.log(LuckyNumber([1, 2, 2]));

const MaxAccount = (accounts) =>
  accounts
    .map((value, i) => {
      let counter = 0;
      for (let row of value) row ? (counter += row) : "";
      return [i, counter];
    })
    .sort((a, b) => a[1] - b[1])
    .map((el) => el[1])
    .pop();

// console.log(
//   MaxAccount([
//     [1, 5],
//     [7, 3],
//     [3, 5],
//   ])
// );

const TwoArraysCalc = (arr1, arr2) => {};

console.log(TwoArraysCalc([2, 4, 3], [5, 6, 4]));

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;

  while (l1 || l2) {
    let x = l1 ? p.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p) l1 = p.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) curr.next = new ListNode(carry);
  return dummyHead.next;
};
