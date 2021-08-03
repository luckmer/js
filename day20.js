const longestOnes = (A, K) => {
  // let maxLen = 0;
  // let countZero = 0;
  // for (let i = 0; i < A.length; i++) {
  //   for (let j = i; j < A.length; j++) {
  //     if (A[j] === 0) countZero++;
  //     if (countZero > K) break;
  //     if (j - i + 1 > maxLen) maxLen = j - i + 1;
  //   }
  //   countZero = 0;
  // }
  // return maxLen;

  let max = 0;
  let count = 0;
  let len = A.length;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (A[j] === 0) count += 1;
      if (count > K) break;
      if (j - i + 1 > max) max = j - 1 + 1;
    }
    count = 0;
  }
  return max;
};

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
);
