const Reverse = (x) => {
  let y = 0;
  let a = 0;

  while (x) {
    y = x % 10;
    x = parseInt(x / 10);
    a = a * 10 + y;
  }

  return a < Math.pow(-2, 31) || Math.pow(2, 31) < a ? 0 : a;
};

const strStr = (haystack, needle) => {
  const haystackLength = haystack.length;
  const needleLength = needle.length;
  if (!needleLength) return 0;

  for (let i = 0; i < haystackLength; i++) {
    for (let j = 0; j < needleLength; j++) {
      if (i + j === haystackLength) return -1;
      if (haystack[i + j] !== needle[j]) break;
      if (j === needleLength - 1) return i;
    }
  }

  return -1;
};

const lemonadeChange = (bills) => {
  let fives = 0;
  let tens = 0;
  for (let char of bills) {
    if (char === 5) {
      fives++;
    } else if (char === 10) {
      if (fives == 0) return false;
      fives--;
      tens++;
    } else {
      if (tens === 0) {
        if ((fives -= 3) < 3) return false;
      } else {
        if (fives === 0) return false;
        fives--;
        tens--;
      }
    }
  }

  return true;
};

const countMatches = (items, ruleKey, ruleValue) => {
  const i = { type: 0, color: 1, name: 2 }[ruleKey];

  return items.filter((item) => item[i] === ruleValue).length;
};

// console.log(
//   countMatches(
//     [
//       ["lrllrl", "l", "l"],
//       ["l", "l", "lrllrl"],
//       ["lrllrl", "lrllrl", "lrllrl"],
//       ["l", "l", "lrllrl"],
//       ["lrllrl", "l", "lrllrl"],
//       ["l", "l", "l"],
//       ["l", "lrllrl", "l"],
//     ],
//     "name",
//     "lrllrl"
//   )
// );

const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b);

  // let i = 0;
  // let j = people.length - 1;
  // let ans = 0;

  // while (i <= j) {
  //   ans++;
  //   people[i] + people[j] <= limit ? i++ : 0;
  //   j--;
  // }

  // return ans;

  let count = 0,
    end = people.length - 1;

  for (let i = 0; i <= end; i++) {
    if (people[i] + people[end] <= limit) end--;
    count++;
  }
  return count;
};

// console.log(numRescueBoats([3, 5, 3, 4], 5));

const containsNearbyAlmostDuplicate = (nums, k, t) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) return true;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
    }
  }

  return false;
};

// console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));

const findContentChildren = (g, s) => {
  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);
  let A = 0,
    B = 0;

  while (A < g.length && B < s.length) {
    s[B] >= g[A] ? (B++, A++) : B++;
  }

  return A;
};

// console.log(findContentChildren([1, 2, 3], [1, 1]));

var shortestCompletingWord = function (licensePlate, words) {
  const one = `/\b[${licensePlate}]+\b/i`;

  const check = [licensePlate];
  return words.filter((item) => check.some((el) => el.includes(item)));
};

// console.log(
//   shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
// );

const numEquivDominoPairs = (dominoes) => {
  // let counter = 0;
  // let obj = {};
  // dominoes.forEach((domino) => {
  //   let char = domino.sort((a, b) => a - b).join("");
  //   if (obj.hasOwnProperty(char)) {
  //     counter += obj[char];
  //     obj[char]++;
  //   }
  //   obj[char] = 1;
  // });
  // return counter;
};

// console.log(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], (1)[(5, 6)]]));

const shortestToChar = (S, C) => {
  const ans = [];
  let prev = -Infinity;
  let next = Infinity;

  for (let i = 0; i < S.length; ++i) {
    if (S.charAt(i) === C) prev = i;
    ans[i] = i - prev;
  }

  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === C) next = i;

    ans[i] = Math.min(ans[i], next - i);
  }
  return ans;
};

// console.log(shortestToChar("aaba", "b"));

const reformatNumber = (number) => {
  let num = number.replace(/-/g, "").replace(/ /g, "").split("");
  if (num.length <= 3) return num.join("");

  let len = num.length;
  let res = [];

  for (let i = 0; i < num.length; i++) {
    if (i + 4 >= len) {
      let len = num.slice(i, i + 4).length;
      if (len <= 3) {
        res.push(num.slice(i, i + 4).join(""));
        break;
      }
      if (len === 4) {
        res.push(num.slice(i, i + 2).join(""));
        res.push(num.slice(i + 2).join(""));
        break;
      }
    } else {
      res.push(num.slice(i, i + 3).join(""));
      i += 2;
    }
  }

  return res.join("-");
};

// console.log(reformatNumber("1-23-45 6"));

const nextGreaterElement = (nums1, nums2) => {
  const data = [];

  for (let num of nums1) {
    const start = nums2.indexOf(num);
    let flag = false;

    for (let j = start + 1; j < nums2.length; j++) {
      const char = nums2[j];

      if (char > num) {
        data.push(char);
        flag = true;
        break;
      }
    }

    if (!flag) data.push(-1);
  }

  return data;
};

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

const nextGreaterElements = (nums) => {
  const findNumbers = (_, i) => {
    for (let j = 1; j < nums.length; j++) {
      if (nums[(i + j) % nums.length] > nums[i]) {
        return nums[(i + j) % nums.length];
      }
    }
    return -1;
  };

  return nums.map(findNumbers);
};

// console.log(nextGreaterElements([1, 2, 3, 4, 3]));

const replaceDigits = (s) => {
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    ans += i & 1 ? shift(s[i - 1], s[i]) : s[i];
  }

  return ans;
};

const shift = (char, num) =>
  String.fromCharCode(char.charCodeAt() + Number(num));

// console.log(replaceDigits("a1b2c3d4e"));

const RotateMatrix = (matrix, target) => {
  if (!matrix || !matrix.length) return false;

  let j = matrix[0].length - 1;
  let counter = 0;

  while (counter < matrix.length && j >= 0) {
    if (target === matrix[counter][j]) return true;
    target < matrix[counter][j] ? j-- : counter++;
  }

  return false;
};

console.log(
  RotateMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
);
