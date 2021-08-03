const IsSumEqual = {
  firstWord: "acb",
  secondWord: "cba",
  targetWord: "cdb",
};

const isSumEqual = (firstWord, secondWord, targetWord) => {
  const alphabet = [...Array(26).keys()].map((i) => [
    String.fromCharCode(i + 97),
    i,
  ]);

  const Find = (s) =>
    s.split("").map((word) => alphabet.find((el) => el[0] === word));

  const Concat = (arr) => {
    return arr.reduce(
      (flat, flatten) =>
        flat.concat(Array.isArray(flatten) ? Concat(flatten) : flatten),
      []
    );
  };

  const One = Concat(Find(firstWord));
  const Two = Concat(Find(secondWord));
  const Result = Concat(Find(targetWord));

  const Helper = (arr) =>
    arr.filter((item) => item !== "" && !isNaN(item)).join("");

  return +Helper(Result) === +Helper(One) + +Helper(Two);
};

// console.log(
//   isSumEqual(IsSumEqual.firstWord, IsSumEqual.secondWord, IsSumEqual.targetWord)
// );

//permutations

const PermutI = (nums) => {
  const result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(nums);
  return [result];
};

const PermutIA = (nums) => {
  const result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(nums);
  return result;
};

console.log(PermutIA([1, 1, 2]));

// console.log(PermutI([1, 1, 2]));

const PermutII = (permutation) => {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
};

// console.log(PermutII([1, 1, 2]));

const PermutIII = (arr) => {
  var permutations = [];
  if (arr.length === 1) {
    return [arr];
  }

  for (var i = 0; i < arr.length; i++) {
    var subPerms = PermutIII(arr.slice(0, i).concat(arr.slice(i + 1)));
    for (let j = 0; j < subPerms.length; j++) {
      subPerms[j].unshift(arr[i]);

      permutations.push(subPerms[j]);
    }
  }
  return permutations;
};

const thousandSeparator = (n) => {
  // let result = "";
  // const String = n.toString().match(/.{1,3}/g);
  // String.forEach((el) => (result += `${el}.`));
  // while (result[result.length - 1] === ".") result = result.slice(0, -1);
  // return result;

  if (!n) return "0";
  let arr = [];
  n = n.toString();

  for (let i = n.length - 1; i >= 0; i--) {
    (n.length - i) % 3 == 0 && i != 0 ? arr.push(n[i], ".") : arr.push(n[i]);
  }
  return arr.reverse().join("");
};
// console.log(thousandSeparator(0));

const longestConsecutive = (array) => {
  array = array.sort((a, b) => a - b);
  if (array.length == 0) return 0;
  let length = 1;
  let ans = 1;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] == array[i + 1]) continue;
    if (array[i] + 1 == array[i + 1]) length++;
    else length = 1;

    ans = Math.max(ans, length);
  }
  return ans;
};

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

const summaryRanges = (nums) => {
  if (!nums.length) return nums;
  if (nums.length <= 1) return [`${nums}`];
  let j = 0;
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] !== nums[i] + 1) {
      res.push(i === j ? `${nums[i]}` : `${nums[j]}->${nums[i]}`);
      j = i + 1;
    }
  }
  return res;
};

const Ranges = (nums) => {
  if (!nums.length) return nums;
  if (nums.length <= 1) return [`${nums}`];
  let j = 0;
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] !== nums[i] + 1) {
      res.push(i === j ? `${nums[i]}` : `${nums[j]}->${nums[i]}`);
      j = i + 1;
    }
  }
  return res;
};

// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));

var isRectangleOverlap = function (rec1, rec2) {
  if (!rec1 || !rec2 || rec1.length == 0 || rec2.length == 0) return false;

  const [x1, y1, x2, y2] = rec1;
  const [x3, y3, x4, y4] = rec2;

  if (
    x2 <= x3 ||
    y2 <= y3 ||
    x1 >= x4 ||
    y1 >= y4 ||
    x1 === x2 ||
    y1 === y2 ||
    x3 === x4 ||
    y3 === y4
  )
    return false;
  return true;
};

// console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
// Wiggle Sort II

// [1,6,1,5,1,4]
const WiggleSort = (arr) => {
  const n = arr.length;
  const Sort = arr.sort((a, b) => a - b);
  const copy = [...Sort];

  for (let i = 0, j = n - 1, k = Math.floor((n - 1) / 2); i < n; i++) {
    arr[i] = i % 2 === 0 ? copy[k--] : copy[j--];
  }
  return Sort;
};

// console.log(WiggleSort([1, 5, 1, 1, 6, 4]));

const subarraySum = (arr, k) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;

    for (let j = i; j < arr.length; j++) {
      counter += arr[j];
      if (counter === k) sum++;
    }
  }

  return sum;
};

// console.log(subarraySum([1, 2, 3], 3));

const PermuteIV = (nums) => {
  const result = [];

  // const permute = (arr, m = []) => {
  //   if (arr.length === 0) {
  //     result.push(m);
  //   } else {
  //     for (let i = 0; i < arr.length; i++) {
  //       const curr = arr.slice();
  //       const next = curr.splice(i, 1);
  //       permute(curr.slice(), m.concat(next));
  //     }
  //   }
  // };

  // permute(nums);

  const permute = (arr, m = []) => {
    if (!arr.length) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(nums);
  return result;
};

// console.log(PermuteIV([1, 2, 3]));

const SearchMatrix = {
  matrix: [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target: 5,
};

const searchMatrix = (matrix, target) => {
  // if (!matrix || !matrix.length) return false;

  // let j = matrix[0].length - 1;
  // let counter = 0;

  // while (counter < matrix.length && j >= 0) {
  //   if (target === matrix[counter][j]) return true;
  //   target < matrix[counter][j] ? j-- : counter++;
  // }

  // return false;

  let i = 10;
  while (i >= 0) {
    console.log("ds");
    i--;
  }
};

// console.log(searchMatrix(SearchMatrix.matrix, SearchMatrix.target));

const PowerFullIntegers = {
  x: 2,
  y: 3,
  bound: 10,
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

// console.log(
//   PowerFullInt(
//     PowerFullIntegers.x,
//     PowerFullIntegers.y,
//     PowerFullIntegers.bound
//   )
// );

const sumEqual = {
  firstWord: "acb",
  secondWord: "cba",
  targetWord: "cdb",
};

const SumEqual = (firstWord, secondWord, targetWord) => {
  const alphabet = [...Array(26).keys()].map((i) => [
    String.fromCharCode(i + 97),
    i,
  ]);

  const Find = (word) =>
    word.split("").map((words) => alphabet.find((el) => el[0] === words));

  const Concat = (arr) => {
    return arr.reduce(
      (flat, flatten) =>
        flat.concat(Array.isArray(flatten) ? Concat(flatten) : flatten),
      []
    );
  };

  const one = Concat(Find(firstWord));
  const two = Concat(Find(secondWord));
  const result = Concat(Find(targetWord));

  const helper = (arr) =>
    arr.filter((item) => item !== "" && !isNaN(item)).join("");

  return +helper(result) === +helper(one) + +helper(two);
};

// console.log(
//   SumEqual(sumEqual.firstWord, sumEqual.secondWord, sumEqual.targetWord)
// );

const minInsertions = (s) => {
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

const Insertion = (s) => {
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

// console.log(Insertion("())))()"));

// console.log(minInsertions("())"));

var minCostClimbingStairs = function (cost) {
  // let a = 0,
  //   b = 0;
  // for (let i = 2; i < cost.length + 1; i++) {
  //   const temp = a;
  //   a = Math.min(a + cost[i - 1], b + cost[i - 2]);
  //   b = temp;
  // }
  // return a;

  let a = cost[0];
  let b = cost[1];

  for (let i = 2; i < cost.length; i++) {
    const temp = b;
    b = Math.min(a, b) + cost[i];
    a = temp;
  }

  return Math.min(a, b);
};
// console.log(minCostClimbingStairs([10, 15, 20]));

const CheckNumbers = (left, right) => {
  let result = [];
  for (let i = left; i <= right; i++) {
    if (selfDividingNumber(i)) result.push(i);
  }
  return result;
};

const selfDividingNumber = (num) => {
  let temp = num;
  while (temp) {
    let calc = temp % 10;
    if (calc === 0 || num % calc !== 0) return false;
    temp = Math.floor(temp / 10);
  }
  return true;
};

const CheckNumber = (left, right) => {
  const result = [];

  for (let i = left; i <= right; i++) {
    if (DivideByTheSameNumber(i)) result.push(i);
  }
  return result;
};

const DivideByTheSameNumber = (num) => {
  let temp = num;

  while (temp) {
    const calc = temp % 10;
    if (calc === 0 || num % calc !== 0) return false;
    temp = Math.floor(temp / 10);
  }
  return true;
};

// console.log(CheckNumber(15, 50));
