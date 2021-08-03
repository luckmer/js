let word1 = "abc",
  word2 = "pqr";

const mergeAlternately = (word1, word2) => {
  let result = [];
  let wLong = word1.length < word2.length ? word2 : word1;

  for (let i = 0; i < wLong.length; i++) {
    if (word1.length > i) result.push(word1[i]);
    if (word2.length > i) result.push(word2[i]);
  }
  return result;
};

const MergeAlternately = (a, b) =>
  a.length ? [a[0], ...MergeAlternately(b, a.slice(1))] : b;

const GetMaxNumber = () => {
  const x = [1, 4, 5, 8, 7, 4];

  if (x.length === 1) {
    return x[0];
  } else {
    for (let i = 1; i < x.length - 1; i++) {
      if (x[i - 1] < x[i] && x[i] > x[i + 1]) {
        console.log(x[i]);
      }
    }
  }
};

//find three elements that sum to the given target

const calculate = (l, r, current, x, target, found) => {
  while (l < r) {
    const total = current + x[l] + x[r];
    if (total === target) found.push([current, x[l], x[r]]);
    total > target ? r-- : l++;
  }
};

const FindThreeSum = () => {
  let x = [1, 2, 3, 4, 5];
  let target = 7;
  let found = [];

  for (let i = 0; i < x.length; i++) {
    const current = x[i];
    let leftPointer = i + 1;
    let rightPointer = x.length - 1;

    if (current + x[leftPointer] + x[rightPointer] === target) {
      found.push([current, x[leftPointer], x[rightPointer]]);
    } else calculate(leftPointer, rightPointer, current, x, target, found);
  }
  return typeof found[0] === undefined ? found[0] : [];
};

//Calculate the sum of all elements in a multidimensional array of infinite depth.

const CalculateSum = {
  arr: [4, 5, 7, 8, [5, 7, 9, [3, 5, 7]]],
  sum: 0,
};

const calculateSum = (arr) => {
  return arr.reduce(function (acc, currentVal) {
    const isArray = Array.isArray(currentVal);
    if (isArray) {
      return acc.concat(calculateSum(currentVal));
    } else {
      CalculateSum.sum += currentVal;
      return acc.concat(currentVal);
    }
  }, []);
};
calculateSum(CalculateSum.arr);

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

let flattenedObj = {};
var removeNesting = function (obj, parent) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      removeNesting(obj[key], `${parent}.${key}`);
    } else {
      flattenedObj[key] = obj[key];
    }
  }
};

removeNesting(obj, "");

const list = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

const ReverseList = (root) => {
  let current = root;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  console.log(prev);
};

//hard text reverse solution
// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

const reverseOnlyLetters = () => {
  const S = "a-bC-dEf-ghIj";
  const array = S.split("");
  let start = 0;
  let end = array.length - 1;
  const regex = /[a-zA-Z]/;

  while (start <= end) {
    if (!regex.test(array[start])) {
      start++;
      continue;
    }

    if (!regex.test(array[end])) {
      end--;
      continue;
    }

    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
};

//Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]

const minimumAbsDifference = (data) => {
  const arr = data ? data : [4, 2, 1, 3];
  const result = [];
  let diff = Infinity;
  const Sort = arr.sort((a, b) => a - b);

  Sort.map((val, i) => {
    const calc = Math.abs(Sort[i], val);
    diff = Math.min(diff, calc);
  });

  for (let i = 0; i < arr.length - 1; i++) {
    const calc = arr[i + 1] - arr[i];
    if (diff === calc) {
      result.push([arr[i], arr[i + 1]]);
    }
  }

  return result;
};
const Data = minimumAbsDifference();

const ReturnNumbers = (arr) => {
  return arr.reduce((acc, b) => {
    const isArray = Array.isArray(b);
    if (isArray) return acc.concat(calculateSum(b));
  }, []);
};

const connectedNumbers = ReturnNumbers(Data);

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

console.log(slowestKey(releaseTimes, keysPressed));
