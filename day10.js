const IsPrime = {
  one: 12,
  two: 4,
  arr: [1, 3, 3, 3, 1, 5, 6, 7, 8, 1],
};

const isPrime = (n) => {
  let divide = 2;

  while (n > divide) {
    if (n % divide === 0) return false;
    else divide++;
  }
  return true;
};

const primeFactor = (n) => {
  let factors = [],
    divisor = 2;

  while (n > 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n /= divisor;
    } else divisor++;
  }
  return factors;
};

const fibonacci = (n) => {
  let fib = [0, 1];

  if (n <= 2) return 1;

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
};

const GreatestDivisor = (a, b) => {
  let divisor = 2,
    greatestDivisor = 1;

  if (a < 2 || b < 2) return 1;

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) greatestDivisor = divisor;
    divisor++;
  }

  return greatestDivisor;
};

ShortDivider = (a, b) => (b === 0 ? a : ShortDivider(b, a % b));

const removeDuplicate = (arr) => {
  const set = new Set();

  for (let numb of arr) {
    if (!set.has(numb)) set.add(numb);
  }
  return [...set];
};

const mergeSortedArray = (a, b) => {
  let merged = [],
    aElm = a[0],
    bElm = b[0],
    i = 1,
    j = 1;

  if (a.length == 0) return b;
  if (b.length == 0) return a;

  while (aElm || bElm) {
    if ((aElm && !bElm) || aElm < bElm) {
      merged.push(aElm);
      aElm = a[i++];
    } else {
      merged.push(bElm);
      bElm = b[j++];
    }
  }

  return merged;
};

const mergeArrays = {
  one: [1, 2, 3, 4, 5],
  two: [7, 8, 4, 2],
};

const MergeArrays = (a, b) => {
  const result = [];
  let A = a[0];
  let B = b[0];
  let i = 1,
    j = 1;

  while (A || B) {
    if ((A && B) || A < B) {
      result.push(A);
      A = a[i++];
    } else {
      result.push(B);
      B = b[j++];
    }
  }
  return result.sort();
};

const Reverse = (str) => {
  if (!str || typeof str != "string" || str.length < 2) return str;

  let result = "";
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
};

const ReverseWords = (str) => {
  let rev = [],
    wordLen = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == " " || i == 0) {
      rev.push(str.substr(i, wordLen + 1));
      wordLen = 0;
    } else wordLen++;
  }
  return rev.join(" ");
};

const reverseMe = {
  str: "hey there",
};
const ReverseMe = (str) => {
  let prev = [];
  let wordLen = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " " || i === 0) {
      const result = str.substr(i, wordLen + 1);
      wordLen = 0;
      prev.push(result);
    } else wordLen++;
  }
  return prev.join("");
};

const FirstNoneRepeat = (str) => {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }

  for (let result in count) {
    if (count[result] === 1) {
      return result;
    }
  }
};

const removeDuplicateChar = (str) => {
  let count = {};
  const result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }

  for (let key in count) {
    if (count[key] === 1) {
      result.push(key);
    }
  }
  return result.join("-");
};

const deleteTheSameString = {
  str: "321nbguifjbkl",
};
const DeleteTheSameString = (str) => {
  let count = {};
  const result = [];
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    if (!set.has(str[i])) {
      result.push(str[i]);
      set.add(str[i]);
    }
  }

  console.log(result.join(""));
};

const isPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
};

const missingNumber = (arr) => {
  let sum = 0,
    n = arr.length + 1;
  expected = (n * (n + 1)) / 2;

  for (let i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }

  return expected - sum;
};

const findMissingNumber = {
  miss: [1, 2, 3, 5, 6],
};
const FindMissingNumber = (arr) => {
  let sum = 0,
    n = arr.length + 1;
  expected = (n * (n + 1)) / 2;

  for (let i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }

  return expected - sum;
};

const theLongestWord = {
  words: ["w", "wo", "wor", "worl", "world"],
};

const TheLongestWord = (words) => {
  if (!words.length || !words) return "";
  let res = "";
  const set = new Set();

  for (let word of words) {
    const last = word.substring(0, word.length - 1);

    if (word.length === 1 || set.has(last)) {
      res = word.length > res.length ? word : res;
      set.add(word);
    }
  }
  return res;
};

const FindWord = {
  0: [
    { title: "Velit modi sapiente voluptas." },
    { title: "Eius occaecati ut." },
  ],
  1: [
    { title: "Blanditiis officia aut sed deserunt tempore consequuntur sed." },
    { title: "Nemo corporis non." },
  ],
  2: [
    { title: "Quia necessitatibus doloribus eligendi enim dicta quis quos." },
    { title: "Ex tenetur qui tempore repellendus nobis est." },
  ],
  3: [
    { title: "Nemo est quis eius quos dicta qui qui." },
    { title: "Reprehenderit occaecati et nostrum atque nam." },
  ],
  4: [
    { title: "Eligendi quis corrupti praesentium." },
    { title: "Aperiam magnam quaerat perspiciatis et." },
    { title: "Eligendi quis corrupti praesentium." },
  ],
  5: [
    {
      title:
        "Aliquam reprehenderit totam fuga incidunt ad veniam fugit quaerat quae.",
    },
    {
      title:
        "Officiis laboriosam necessitatibus repellendus est soluta et perspiciatis.",
    },
  ],
  6: [
    {
      title:
        "Recusandae numquam consequatur voluptas nesciunt cumque tempora aut ipsam.",
    },
    {
      title:
        "Exercitationem eos reiciendis ducimus atque illum repudiandae laborum et consequatur.",
    },
  ],
};

class Store {
  constructor() {
    this.result = [];
    this.Strings = [];
  }
}

class WordCheck extends Store {
  Calculate = (word) => {
    const Split = word.toString().split(" ");
    const Sort = Split.sort((a, b) => b.length - a.length);
    const DeleteQ = Sort.toString().replace(/[,./;'-=!@#$%^&*(){}:"|<>]/g, " ");
    return DeleteQ;
  };

  Find = (word) => {
    const Split = word.toString().split(" ");
    return Split.sort((a, b) => b.length - a.length)[0];
  };
}

class WordCreator extends WordCheck {
  Create = (words) => {
    for (let key in words) {
      this.result.push(words[key]);
    }

    for (let word of this.result) {
      const title = word.map(({ title }) => title);
      const String = this.Calculate(title);
      const Result = this.Find(String);
      this.Strings.push(Result);
    }

    return this.Strings;
  };
}

const wordsCreator = new WordCreator();

const FindKthPositive = {
  arr: [2, 3, 4, 7, 11],
  k: 5,
};

const WTF = () => {
  let N = 3,
    K = 2;
  const dp = Array.from({ length: N + 1 }, () => new Array(K + 1));
  // /Number of Ways to Rearrange Sticks With K Sticks Visible
  const dfs = (n, k) => {
    if (k > n || k === 0) return 0;
    if (n === 1) return 1;
    if (dp[n][k] !== undefined) return dp[n][k];

    const NS = n - 1,
      TS = dfs(NS, k - 1),
      TNS = dfs(NS, k);

    return (dp[n][k] = (TS + TNS * NS) % 1000000007);
  };

  return dfs(N, K);
};

const FindAndReplacePattern = {
  words: ["abc", "deq", "mee", "aqq", "dkd", "ccc"],
  pattern: "abb",
};

const findAndReplacePattern = (words, pattern) => {
  return words.filter((el) => Find(el, pattern));
};

const Find = (word, Pattern) => {
  if (word.length !== Pattern.length) return false;
  const set = new Set();
  const map = new Map();

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    const pattern = Pattern.charAt(i);

    if (!set.has(char) && !map.has(pattern)) {
      set.add(char);
      map.set(pattern, char);
      continue;
    }

    if (!map.has(pattern)) return false;
    if (map.get(pattern) !== char) return false;
  }
  return true;
};

console.log(
  findAndReplacePattern(
    FindAndReplacePattern.words,
    FindAndReplacePattern.pattern
  )
);
