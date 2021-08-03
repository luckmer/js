var findLength = function (nums1, nums2) {
  let maxSum = -Infinity;

  const dp = [...Array(nums1.length + 1)].map(() =>
    Array(nums2.length + 1).fill(0)
  );

  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      maxSum = Math.max(maxSum, dp[i][j]);
    }
  }

  return maxSum;
};

// console.log(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]));

const lengthOfLIS = (nums) => {
  let dp = [...Array(nums.length)].fill(1);

  for (let i = 1; i < nums.length; i++) {
    let maxLen = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        maxLen = Math.max(maxLen, dp[j] + 1);
      }
    }
    dp[i] = maxLen;
  }
  return Math.max(...dp);
};

// console.log(lengthOfLIS([1, 1, 1]));

const findLongestChain = (pairs) => {
  pairs = pairs.sort((a, b) => a[0] - b[0]);

  let dp = [...Array(pairs.length)].fill(1);

  for (let i = 0; i < dp.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) max = Math.max(max, dp[j]);
    }
    dp[i] = max + 1;
  }

  return Math.max(...dp);
};

// console.log(
//   findLongestChain([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ])
// );

const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let front = 0; front < nums.length - 3; front++) {
    if (nums[front] === nums[front - 1]) continue;

    for (let back = nums.length - 1; back > front + 2; back--) {
      if (nums[back] === nums[back + 1]) continue;

      let left = front + 1;
      let right = back - 1;

      while (left < right) {
        let sum = nums[front] + nums[left] + nums[right] + nums[back];
        if (sum === target) {
          result.push([nums[front], nums[left], nums[right], nums[back]]);
        }

        sum < target ? left++ : right--;

        while (left - 1 !== front && nums[left] === nums[left - 1]) left++;
        while (right + 1 !== back && nums[right] === nums[right + 1]) right--;
      }
    }
  }
  return result;
};

const numDecodings = (s) => {
  const alphabet = [...Array(26)].map((q, w) => {
    const result = {
      name: String.fromCharCode(w + 97),
      num: w + 1,
    };
    return result;
  });

  let counter = 0;

  while (s) {
    const Find = alphabet.find((el) => el.num <= s);
    counter += Find.name;
    s -= Find.num;
  }

  return counter;
};

const shiftGrid = (grid, k) => {
  if (!grid.length || !k) return grid;
  const rowLength = grid[0].length;
  const last = grid[grid.length - 1][grid[0].length - 1];
  const arr = [];

  for (let i = 0; i < grid.length; i++) {
    let temp = new Array(rowLength).fill(0);
    arr.push(temp);

    for (let j = 0; j < rowLength; j++) {
      if (i === 0 && j === 0) {
        arr[i][j] = last;
      } else if (grid[i][j - 1] !== undefined) {
        arr[i][j] = grid[i][j - 1];
      } else {
        arr[i][j] = grid[i - 1][rowLength - 1];
      }
    }
  }

  return shiftGrid(arr, k - 1);
};

// console.log(
//   shiftGrid(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     1
//   )
// );
