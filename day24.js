const romanToInt = (s) => {
  const obj = {
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

const longestCommonPrefix = (str) => {
  if (str.length < 2) return str.join("");
  let prev = str[0];
  let current = str;

  for (let i = 0; i < prev.length; i++) {
    for (let j = 1; j < current.length; j++) {
      if (i === current[j].length || current[j][i] !== prev[i]) {
        return prev.substr(0, i);
      }
    }
  }
};

const isPalindrome = (x) => {
  let b = x;
  let c = 0;

  while (x > 0) {
    c = c * 10 + (x % 10);
    x = parseInt(x / 10);
  }

  return b === c;
};

const merge = (nums1, m, nums2, n) => {
  let counter = 0;
  for (let i of nums1) {
    while (i === 0) {
      counter++;
      if (counter === n) nums1.splice(nums1.length - n);
      i--;
    }
  }

  console.log();
};

const permute = (nums) => {
  const result = [];

  const permute = (arr, m = []) => {
    if (!arr.length) result.push(m);

    for (let i = 0; i < arr.length; i++) {
      let curr = arr.slice();
      const next = curr.splice(i, 1);

      permute(curr, m.concat(next));
    }
  };

  permute(nums);
  return result;
};

// console.log(permute([1, 2, 3]));

var removeDuplicates = function (s, b) {
  // let table = [],
  //   a = s.length;
  // for (let i = 0; i < a; i++) {
  //   table[b[i]] = s[i];
  // }
  // return table.join("");

  const arr = [...Array(b.length).fill()].map((_, i) => b[i]);

  let a = s.length;
  for (let i = 0; i < a; i++) {
    arr[b[i]] = s[i];
  }

  return arr.join("");
};

// console.log(removeDuplicates("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

const shuffle = (nums, n) => {
  const table = [];
  const length = nums.length / 2;

  for (let i = 0; i < length; i++) {
    table.push(nums[i], nums[i + n]);
  }

  return table;

  //
};

// console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

const smallerNumbersThanCurrent = (nums) => {
  return nums.map((el) => nums.filter((n) => n < el).length);
};

const decode = (encoded, first) => {
  let result = [first];
  for (let i = 0; i < encoded.length; i++) {
    let encode = encoded[i] ^ result[i];
    result.push(encode);
  }
  return result;
};

// console.log(decode([1, 2, 3], 4));

const buildArray = (nums) => nums.map((el) => nums[el]);
// console.log(buildArray([0, 2, 1, 5, 3, 4]));

const runningSum = (nums) => {
  const result = [...Array(nums.length).fill(0)].map((_, i) =>
    i === 0 ? nums[0] : 0
  );

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] + nums[i];
  }

  return result;
};

const maximumWealth = (accounts) => {
  const calc = accounts.map((el) => {
    return el.reduce((a, b) => a + b, 0);
  });

  return Math.max(...calc);
};

// console.log(
//   maximumWealth([
//     [1, 5],
//     [7, 3],
//     [3, 5],
//   ])
// );

const kidsWithCandies = (candies, extraCandies) => {
  const top = Math.max(...candies);

  return candies.map((val) => val + extraCandies >= top);
};
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

const numIdenticalPairs = (nums) => {
  // nums = nums.sort((a, b) => a - b);
  let a = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        a.push([i, j]);
      }
    }
  }

  return a.length;
};
// console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));

const decompressRLElist = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const data = [
      ...result,
      ...Array(nums[2 * i]).fill(nums[2 * i + 1]),
    ].filter((item) => item !== undefined);

    result = data;
  }

  return result;
};

// console.log(decompressRLElist([1, 2, 3, 4]));

var createTargetArray = function (nums, index) {
  const table = [];

  for (let i = 0; i < nums.length; i++) {
    table.splice(index[i], 0, nums[i]);
  }

  return table;
};

// console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

const countMatches = (items, ruleKey, ruleValue) => {
  const i = { type: 0, color: 1, name: 2 }[ruleKey];

  return items.filter((item) => item[i] === ruleValue).length;
};

// console.log(
//   countMatches(
//     [
//       ["phone", "blue", "pixel"],
//       ["computer", "silver", "lenovo"],
//       ["phone", "gold", "iphone"],
//     ],
//     "color",
//     "silver"
//   )
// );

const maxProductDifference = (nums) => {
  nums.sort((a, b) => a - b);

  return nums.pop() * nums.slice(-1)[0] - nums[0] * nums[1];
};

// console.log(maxProductDifference([1, 6, 7, 5, 2, 4, 10, 6, 4]));

const sumOddLengthSubarrays = (arr) => {
  let L = arr.length;
  let sum = 0;
  for (let i = 0; i < L; i++) {
    let total = i * (L - i) + (L - i);
    sum += Math.ceil(total / 2) * arr[i];
  }

  return sum;
};

// console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));

const arrayStringsAreEqual = (word1, word2) => {
  console.log(word1.join("") === word2.join(""));
};

// console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));

var truncateSentence = function (s, k) {
  let str = s.split(" ").slice(0, k).join(" ");

  console.log(str);
};

// console.log(truncateSentence("Hello how are you Contestant", 4));

const countGoodTriplets = (arr, a, b, c) => {
  let count = 0;

  const Calc = (arr, i, j, a, k, b, c, count) => {
    if (
      Math.abs(arr[i] - arr[j]) <= a &&
      Math.abs(arr[j] - arr[k]) <= b &&
      Math.abs(arr[i] - arr[k]) <= c
    ) {
      count++;
    }
    return count;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        count = Calc(arr, i, j, a, k, b, c, count);
      }
    }
  }
  return count;
};

// console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));

const uniqueMorseRepresentations = (words) => {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const arr = [];
  for (let i = 0; i < words.length; i++) {
    let char = words[i];
    let str = "";

    for (let i = 0; i < char.length; i++) {
      str += morse[char[i].charCodeAt() - 97];
    }

    arr.push(str);
  }

  return [...new Set(arr)].length;
};

// console.log(uniqueMorseRepresentations(["a"]));

const minTimeToVisitAllPoints = (points) => {};

// console.log(
//   minTimeToVisitAllPoints([
//     [1, 1],
//     [3, 4],
//     [-1, 0],
//   ])
// );

const largestAltitude = (gain) => {
  const result = [0];
  for (let i = 0; i < gain.length; i++) {
    const value = gain[i] + result[i];
    result.push(value);
  }
  return Math.max(...result);
};

//

// console.log(largestAltitude([-5, 1, 5, 0, -7]));

const countGoodRectangles = (rectangles) => {
  const obj = {};
  let max = 0;

  for (let [l, w] of rectangles) {
    const calc = Math.min(l, w);
    max = Math.max(max, calc);
    obj[calc] = obj[calc] + 1 || 1;
  }

  return obj[max];
};

// console.log(
//   countGoodRectangles([
//     [5, 8],
//     [3, 9],
//     [5, 12],
//     [16, 5],
//   ])
// );

const diagonalSum = (mat) => {};

// console.log(
//   diagonalSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

const subsetXORSum = (nums) => {
  let result = 0;

  nums.forEach((char) => (result |= char));
  return Math.floor(result * Math.pow(2, nums.length - 1));
};

// console.log(subsetXORSum([1, 3]));

const oddCells = (m, n, indices) => {
  const matrix = [];

  for (let i = 0; i < m; i++) {
    const table = [];
    for (let i = 0; i < n; i++) {
      table.push(0);
    }
    matrix.push(table);
  }
  let odd = 0;

  let row = Array(n).fill(0);
  // let col = ;

  let mat = Array(m).fill(0);
  for (let pair of indices) {
    mat[pair[0]]++;
    mat[pair[1]]++;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) odd += mat[i][j] & 1;
  }
  // return odd;

  console.log(row, col);
};

// console.log(
//   oddCells(2, 3, [
//     [0, 1],
//     [1, 1],
//   ])
// );

const maxProduct = (nums) => {
  nums.sort((a, b) => a - b);
  const calc = (i) => nums.slice(i)[0];

  return (calc(-1) - 1) * (calc(-2) - 1);
};
// console.log(maxProduct([1, 5, 4, 5]));

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));

const sortArrayByParity = (nums) => {
  const a = nums.filter((a) => a % 2 === 0);
  const b = nums.filter((a) => a % 2 !== 0);

  return [...a, ...b];
};

// console.log(sortArrayByParity([3, 1, 2, 4]));

const countNegatives = (grid) => {
  let negative = 0;

  for (let i of grid) {
    for (let col of i) {
      if (col < 0) negative++;
    }
  }

  return negative;
};

// console.log(
//   countNegatives([
//     [4, 3, 2, -1],
//     [3, 2, 1, -1],
//     [1, 1, -1, -2],
//     [-1, -1, -2, -3],
//   ])
// );

const finalPrices = (prices) => {
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        prices[i] = Math.abs(prices[i] - prices[j]);
        break;
      }
    }
  }
  return prices;
};

// console.log(finalPrices([8, 4, 6, 2, 3]));

const sumOfUnique = (nums) => {
  let map = {},
    calc = 0;

  nums.forEach((item) => (map[item] = ~~map[item] + 1));

  Object.keys(map)
    .filter((key) => map[key] === 1)
    .map((el) => {
      calc += Number(el);
    });

  return calc;
};

// console.log(sumOfUnique([1, 2, 3, 2]));

const replaceElements = (arr) => {
  const result = [-1];

  arr.reverse();

  for (let i = 0; i < arr.length; i++) {
    arr[i] > result[i] ? result.push(arr[i]) : result.push(result[i]);
  }

  result.pop();
  result.reverse();
  return result;
};

// console.log(replaceElements([17, 18, 5, 4, 6, 1]));
// \

const arrayPairSum = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const counter = nums[i];
    let j;
    for (j = i - 1; j >= 0 && nums[j] > counter; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = counter;
  }

  return nums.reduce((a, b, c) => {
    return a + (c % 2 === 0) * b;
  });
};

// console.log(arrayPairSum([1, 4, 3, 2]));

const heightChecker = (heights) => {
  const expected = heights.slice().sort((a, b) => a - b);
  let counter = 0;

  heights.forEach((_, i) => {
    if (heights[i] !== expected[i]) {
      counter++;
    }
  });

  return counter;
};

// console.log(heightChecker([1, 1, 4, 2, 1, 3]));

var subsetsWithDup = function (nums) {};
