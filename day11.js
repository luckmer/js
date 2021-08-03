let arr = [1, 3, 1, 5, 2];
let n = arr.length;
let MAX = 50;
let dp = new Array(MAX);

for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(2);
}

for (let i = 0; i < dp.length; i++) {
  for (let j = 0; j < dp.length; j++) {
    dp[i][j] = 0;
  }
}

const Solve = (dp, a, low, high, turn) => {
  if (low === high) {
    return Math.floor(a[low] * turn);
  }

  if (dp[low][high] != 0) {
    return dp[low][high];
  }

  dp[low][high] = Math.max(
    Math.floor(a[low] * turn) + Solve(dp, a, low + 1, high, turn + 1),
    Math.floor(a[high] * turn) + Solve(dp, a, low, high - 1, turn + 1)
  );

  return dp[low][high];
};

console.log(Solve(dp, arr, 0, n - 1, 1));
