const stoneGameVII = (piles) => {
  var n = piles.length;
  var preSum = [...Array(n + 1)].fill(0);
  for (var i = 1; i <= n; i++) {
    preSum[i] = preSum[i - 1] + piles[i - 1];
  }

  var dp = new Array(n).fill(0).map((_) => new Array(n).fill(0));
  for (var i = 0; i < n; i++)
    for (var j = i; j >= 0; j--) {
      if (i == j) dp[j][i] = 0;
      else {
        var value1 = preSum[i] - preSum[j] - dp[j][i - 1];
        var value2 = preSum[i + 1] - preSum[j + 1] - dp[j + 1][i];

        dp[j][i] = Math.max(dp[j][i], value1, value2);
      }
    }
  return dp[0][n - 1];
};

// console.log(stoneGameVII([5, 3, 1, 4, 2]));

const exist = (b, w) => {
  const rLen = b.length,
    cLen = b[0].length,
    wLen = w.length;

  const dfs = (r, c, i) => {
    if (i === wLen) return true;
    if (r >= rLen || r < 0 || c >= cLen || c < 0) return false;
    let char = b[r][c];
    if (char !== w[i]) return false;
    b[r][c] = "#";

    if (
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1)
    ) {
      return true;
    }

    b[r][c] = char;
  };

  for (let r = 0; r < rLen; r++) {
    for (let c = 0; c < cLen; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
};

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const Exist = (b, w) => {
  const rLen = b.length,
    cLen = b[0].length,
    wLen = w.length;

  const dfs = (r, c, i) => {
    if (i === wLen) return true;
    if (r >= rLen || r < 0 || c >= cLen || c < 0) return false;
    let char = b[r][c];
    if (char !== w[i]) return false;
    b[r][c] = "#";

    if (
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1)
    ) {
      return true;
    }

    b[r][c] = char;
  };

  for (let r = 0; r < rLen; r++) {
    for (let c = 0; c < cLen; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
};

// console.log(
//   Exist(
//     [
//       ["A", "B", "C", "E"],
//       ["S", "F", "C", "S"],
//       ["A", "D", "E", "E"],
//     ],
//     "ABCB"
//   )
// );

const minMoves = (num) => {
  // var min = num[0];
  // var sum = min;
  // for (let i = 1; i < num.length; i++) {
  //   sum += num[i];
  //   min = num[i] < min ? num[i] : min;
  // }
  // return sum - num.length * min;

  return num.reduce((a, b) => a + Math.abs(), 0);
};

// console.log(minMoves([1, 2, 3]));

const reformatNumber = (a) => {
  // let num = a.split("").filter((d) => d != "-" && d != " ");
  // let result = [];
  // if (num.length <= 3) return num.join("");
  // let len = num.length;
  // let res = [];
  // for (let i = 0; i < num.length; i++) {
  //   if (i + 4 >= len) {
  //     let len = num.slice(i, i + 4).length;
  //     if (len <= 3) {
  //       res.push(num.slice(i, i + 4).join(""));
  //       break;
  //     }
  //     if (len == 4) {
  //       res.push(num.slice(i, i + 2).join(""));
  //       res.push(num.slice(i + 2).join(""));
  //       break;
  //     }
  //   } else {
  //     res.push(num.slice(i, i + 3).join(""));
  //     i += 2;
  //   }
  // }
  // return res.join("-");

  var Reformat = function (a) {
    if (a.length <= 3) return a;
    return a.length === 4
      ? a.substring(0, 2) + "-" + a.substring(2, 4)
      : a.substring(0, 3) + "-" + Reformat(a.substring(3, a.length));
  };

  return Reformat(a.replace(/\D/g, ""));
};

// console.log(reformatNumber("1-23-45 6"));
const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return s === s.split("").reverse().join("");
};

// console.log(isPalindrome("race a car"));

const PalindromeNumber = (x) => {
  let check = x;
  let y = 0,
    a = 0;

  while (x) {
    y = x % 10;
    x = parseInt(x / 10);
    a = a * 10 + y;
  }

  return a === check;
};

// console.log(PalindromeNumber(121));

const XorOperations = (n, start) => {
  let a = start;
  for (let i = 0; i < n; i++) {
    a ^= start + 2 * i;
  }
  return a;
};

// console.log(XorOperations(5, 0));

const WordPattern = (t, s) => {
  s = s.split(" ");

  console.log(s);

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
  }

  return true;
};
// console.log(WordPattern("abba", "dog cat cat dog"));

// const sortByBits = (arr) => {
//   const Bit = (num) => {
//     const bits = num.toString(2);
//     console.log(bits);
//   };

//   return arr.sort((a, b) => Bit(a) - Bit(b) || a - b);
// };

// console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));

const data = {
  0: [
    {
      uuid: "03a4341d-3241-4db6-8bad-324409b75557",
      title: "Velit modi sapiente voluptas.",
      durationInMinutes: 54,
    },
    {
      uuid: "05b7a4c3-ade0-4374-86d5-7b9a1a492c97",
      title: "Eius occaecati ut.",
      durationInMinutes: 164,
    },
  ],
  1: [
    {
      uuid: "212334c7-a24a-45ef-bd19-f36f60fef68e",
      title: "Blanditiis officia aut sed deserunt tempore consequuntur sed.",
      durationInMinutes: 148,
    },
    {
      uuid: "1351ff9a-f254-4b17-88eb-2b9d5df12b0c",
      title: "Nemo corporis non.",
      durationInMinutes: 29,
    },
  ],
  2: [
    {
      uuid: "ac63b211-e562-4099-afcf-ba7cf1342b3b",
      title: "Quia necessitatibus doloribus eligendi enim dicta quis quos.",
      durationInMinutes: 17,
    },
    {
      uuid: "85765557-68ea-49c4-8e26-7813462ecd1b",
      title: "Ex tenetur qui tempore repellendus nobis est.",
      durationInMinutes: 46,
    },
  ],
  3: [
    {
      uuid: "0b086494-4265-43e7-b805-f7ff6f81cb06",
      title: "Nemo est quis eius quos dicta qui qui.",
      durationInMinutes: 128,
    },
    {
      uuid: "60a354a5-ee9f-413d-afbb-fed99090ffb2",
      title:
        "Officiis laboriosam necessitatibus repellendus est soluta et perspiciatis.",
      durationInMinutes: 45,
    },
  ],
  4: [
    {
      uuid: "0ffd3518-85d5-4168-913c-45a9ee20ca76",
      title:
        "Aliquam reprehenderit totam fuga incidunt ad veniam fugit quaerat quae.",
      durationInMinutes: 24,
    },
    {
      uuid: "fa84e8db-2236-4297-9963-3575dd273036",
      title: "Reprehenderit occaecati et nostrum atque nam.",
      durationInMinutes: 48,
    },
  ],
  5: [
    {
      uuid: "7adc0c3e-7aef-4e94-b20f-2aa2c280da16",
      title:
        "Recusandae numquam consequatur voluptas nesciunt cumque tempora aut ipsam.",
      durationInMinutes: 62,
    },
    {
      uuid: "5e537c6f-f836-4f58-8c1f-e1bec5485276",
      title: "Aperiam magnam quaerat perspiciatis et.",
      durationInMinutes: 24,
    },
  ],
  6: [
    {
      uuid: "d55a35eb-ddf7-4a53-a2e4-1527af0f76b1",
      title: "Eligendi quis corrupti praesentium.",
      durationInMinutes: 137,
    },
    {
      uuid: "9b4b740d-1284-481e-86ec-9a525c7e0626",
      title:
        "Exercitationem eos reiciendis ducimus atque illum repudiandae laborum et consequatur.",
      durationInMinutes: 111,
    },
  ],
};

const PlayWithArray = (arr) => {
  const DataResult = [];

  const ConvertTime = (numb) => numb.reduce((a, b) => a + b, 0);

  const TheLongestWord = (Data) =>
    Data.toString()
      .split(" ")
      .sort((a, b) => b.length - a.length)[0]
      .replace(/[ ,.]/g, " ");

  const TheLongestString = (str) =>
    str
      .toString()
      .split(" ")
      .sort((a, b) => b - a)[0];

  for (let key in arr) {
    const data = arr[key];
    if (data && data !== undefined) {
      const Time = data.map(({ durationInMinutes }) => durationInMinutes);
      const Names = data.map(({ title }) => title);
      const TheLongest = TheLongestWord(Names);
      const stringResult = TheLongestString(TheLongest);

      const result = {
        time: ConvertTime(Time),
        id: Number(key),
        name: stringResult,
        events: arr[key].length,
      };
      DataResult.push(result);
    }
  }

  return DataResult.sort((a, b) => b.name.length - a.name.length);
};

// console.log(PlayWithArray(data));

const shiftGrid = (grid, k) => {
  if (k === 0) return grid;
  const rowLength = grid[0].length,
    last = grid[grid.length - 1][rowLength - 1],
    arr = [];

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

const Other = () => {
  // const restaurants = [];
  // let minIndex = Infinity;
  // for (let i = 0; i < list1.length; i++) {
  //   const restaurant = list1[i];
  //   const index = list2.indexOf(restaurant);
  //   if (index >= 0) {
  //     restaurants.push({
  //       index: index + i,
  //       name: restaurant,
  //     });
  //     minIndex = Math.min(minIndex, index + i);
  //   }
  // }
  // return restaurants
  //   .filter((item) => item.index === minIndex)
  //   .map((item) => item.name);
  // const list = {},
  //   common = {};
  // let min = Infinity;
  // list2.forEach((a, i) => (list[a] = i));
  // for (let i = 0; i < list1.length; i++) {
  //   if (list[list1[i]]) {
  //     let sum = i + list[list1[i]];
  //     common[sum] ? common[sum].push(list1[i]) : (common[sum] = [list1[i]]);
  //     min = Math.min(min, sum);
  //   }
  // }
  // return common[min];
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
const longestConsecutive = (array) => {
  array = array.sort((a, b) => a - b);

  if (!array.length) return 0;
  let length = 1,
    ans = 1;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) continue;
    if (array[i + 1] === array[i + 1]) length++;
    else length = 1;
    ans = Math.max(ans, length);
  }

  return ans;
};

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

const numberOfLines = (widths, s) => {
  let lines = 1,
    width = 0;

  for (let c of s) {
    const w = widths[c.charCodeAt() - "a".charCodeAt()];
    width += w;
    if (width > 100) {
      lines += 1;
      width = w;
    }
  }
  return [lines, width];
};

// console.log(
//   numberOfLines(
//     [
//       10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
//       10, 10, 10, 10, 10, 10, 10, 10,
//     ],
//     "abcdefghijklmnopqrstuvwxyz"
//   )
// );

const lemonadeChange = (bills) => {
  let fives = 0;
  let tens = 0;
  for (let char of bills) {
    if (char === 5) {
      fives++;
    } else if (char === 10) {
      if (--fives === 0) return false;
      tens++;
    } else {
      if (tens === 0) {
        if ((fives -= 3) < 3) return false;
      } else {
        if (--fives === 0) return false;
        tens--;
      }
    }
  }
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));

const findRestaurant = (list1, list2) => {
  const result = [];
  let min = Infinity;

  for (let i = 0; i < list1.length; i++) {
    const index = list2.indexOf(list1[i]);
    if (index >= 0) {
      result.push({ id: index + i, i: list1[i] });
      min = Math.min(min, index + i);
    }
  }

  return result.filter(({ id }) => id === min).map(({ i }) => i);
};

// console.log(
//   findRestaurant(
//     ["Shogun", "Tapioca Express", "Burger King", "KFC"],
//     ["KFC", "Burger King", "Tapioca Express", "Shogun"]
//   )
// );

const twoCityShedCost = (costs) => {
  costs = costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  const mid = costs.length / 2;
  return costs.reduce((a, b, i) => (i < mid ? a + b[0] : a + b[1]), 0);
};

console.log(
  twoCityShedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ])
);
