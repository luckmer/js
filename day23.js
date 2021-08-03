const duplicateZeros = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
    }
  }

  return arr;
};

const merge = (nums1, nums2, n) => {
  let counter = 0;

  for (let i of nums1) {
    while (i === 0) {
      counter += 1;

      if (counter === n) nums1.splice(nums1.length - n);
      i--;
    }
  }
  nums1.push(...nums2);
  return nums1.sort((a, b) => a - b);
};

// console.log(merge([1, 2, 3, 0, 0, 0], [2, 5, 6], 3));

var removeElement = function (nums) {
  if (!nums || !nums.length) return nums;
  let unique = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      unique++;
    }
  }
  let result = [...Array(unique).fill()].map((_, i) => i);
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      result[pos] = nums[i];
      pos++;
    }
  }

  return result;
};

// console.log(removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

const findDisappearedNumbers = (nums) => {
  nums.sort((a, b) => a - b);
  const arr = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    arr.set(nums[i], i);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!arr.has(i)) result.push(i);
  }

  return result;
};

const sortedSquares = (nums) => {
  const table = [];
  for (let i of nums) {
    table.push(i ** 2);
  }
  return table.sort((a, b) => a - b);
};

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

function linkedList(arr) {
  return arr.reduceRight((next, value) => ({ value, next }), null);
}

function ListNode(x) {
  this.value = x;
  this.next = null;
}

const removeNthFromEnd = (head, n) => {
  let list = new ListNode(0);
  list.next = head;
  let first = list;
  let second = list;

  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return list.next;
};

// console.log(removeNthFromEnd(linkedList([1, 2, 3, 4, 5]), 2));

const oddEvenList = (head) => {
  if (!head) return head;
  let odd = head,
    even = head.next,
    evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

// console.log(oddEvenList(linkedList([2, 1, 3, 5, 6, 4, 7])));

// odd.next = even.next;
// odd = odd.next;
// even.next = odd.next;
// even = even.next;

const permute = (nums) => {
  const result = [];

  const permute = (arr, m = []) => {
    if (!arr.length) result.push(m);

    for (let i = 0; i < arr.length; i++) {
      // let curr = arr.slice();
      // const next = curr.splice(i, 1);
      // permute(curr, m.concat(next));

      let curr = arr.slice();
      const next = curr.splice(i, 1);

      permute(curr, m.concat(next));
    }
  };

  permute(nums);
  return result;
};

// console.log(permute([1, 2, 3]));

const intToRoman = (num) => {
  const conversionArray = [
    { numb: 1000, roman: "M" },
    { numb: 900, roman: "CM" },
    { numb: 500, roman: "D" },
    { numb: 400, roman: "CD" },
    { numb: 100, roman: "C" },
    { numb: 90, roman: "XC" },
    { numb: 50, roman: "L" },
    { numb: 40, roman: "XL" },
    { numb: 10, roman: "X" },
    { numb: 9, roman: "IX" },
    { numb: 5, roman: "V" },
    { numb: 4, roman: "IV" },
    { numb: 1, roman: "I" },
  ];

  let result = "";

  while (num) {
    const find = conversionArray.find((el) => el.numb <= num);
    result += find.roman;
    num -= find.numb;
  }

  return result;
};

const rotate = (matrix) => {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j) break;
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
};

const grayCode = (n) => {
  const result = [];
  for (let i = 0; i < 1 << n; i++) {
    const gray = i ^ (i >> 1);
    result.push(gray);
  }
  return result;
};

// console.log(grayCode(2));

var wiggleSort = function (nums) {
  const n = nums.length;
  const sorted = nums.sort((a, b) => a - b);
  const copy = [...sorted];

  let k = Math.floor((n - 1) / 2);
  let j = n - 1;

  for (let i = 0; i < n; i++) {
    nums[i] = i % 2 === 0 ? copy[k--] : copy[j--];
  }

  return nums;
};

// console.log(wiggleSort([1, 5, 1, 1, 6, 4]));

var permuteUnique = function (nums) {
  let res = [],
    remain = [],
    set = new Set(nums);
  nums.forEach((num) => (remain[num] ? remain[num]++ : (remain[num] = 1)));

  const permute = (depth, remain, cur) => {
    if (depth == nums.length) {
      res.push(cur.slice());
      return;
    }

    for (let num of set) {
      if (remain[num]) {
        cur.push(num);
        remain[num]--;
        permute(depth + 1, remain, cur);
        cur.pop();
        remain[num]++;
      }
    }
    return res;
  };

  return permute(0, remain, []);
};

// console.log(permuteUnique([1, 1, 2]));

const distributeCandies = (candies, num_people) => {
  const Candies = Array(num_people).fill(0);
  let i = 0;
  let candy = 1;
  while (candies) {
    console.log(candies);
    if (candies <= candy) candy = candies;

    Candies[i] += candy;
    candies -= candy;
    i = (i + 1) % num_people;
    candy++;
  }

  return Candies;
};

console.log(distributeCandies(7, 4));
