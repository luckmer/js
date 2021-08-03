const SortArray = () => {
  let nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3;

  let i = 0;

  nums1.forEach((data) => {
    while (data === 0) {
      i += 1;
      if (i === n) nums1.splice(nums1.length - n);
      data--;
    }
  });
  nums1 = nums1.concat(...nums2).sort((a, b) => a - b);
};
const SortArrayII = () => {
  let nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3;

  let i = 0;

  nums1 = nums1
    .filter((data) => data !== 0)
    .concat(...nums2)
    .sort((a, b) => a - b);
};

const lengthOfLongestSubstring = () => {
  let s = "pwwkew";
  //string have to be substring  pwwkew => 3x w -> 1 w,k,e
  let set = new Set();
  let r = 0,
    l = 0,
    max = 0;

  while (r < s.length) {
    if (!set.has(s[r])) {
      set.add(s[r]);
      r++;
      max = Math.max(max, set.size);
    } else {
      set.delete(s[l]);
      l++;
    }
  }
};

const intToRoman = () => {
  let num = 1994;
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
    const numeral = data.find((el) => el.n <= num);
    result += numeral.r;
    num -= numeral.n;
  }

  console.log(result);
};
const romanToInt = (s) => {
  let num = "XX";
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = "";

  for (let i = 0; i < num.length; i++) {
    let one = obj[num[i]];
    let two = obj[num[i + 1]];
    one < two ? (result -= one) : (result += one);
  }
  console.log(result);
};

const rotate = () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j) break;
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  console.log(matrix);
};

const Sort = () => {
  const nums = [4, 8, 3, 3, 3, 4, 5, 6, 7, 8];

  for (let i = 0; i < nums.length; i++) {
    let counter = nums[i],
      j;
    for (j = i - 1; j >= 0 && nums[j] > counter; j--) nums[j + 1] = nums[j];
    nums[j + 1] = counter;
  }
  console.log(nums);
};
// Pascal's Triangle

const Pascal = () => {
  n = 5;

  let result = [[1]];

  for (let row = 0; row < n; row++) {
    result[row] = [];
    for (let col = 0; col < row + 1; col++) {
      if (col === 0 || col === row) {
        result[row][col] = 1;
      } else result[row][col] = result[row - 1][col - 1] + result[row - 1][col];
      console.log(result);
    }
  }
};

const PascalII = () => {
  let rowIndex = 3;
  let table = [1];
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
};
