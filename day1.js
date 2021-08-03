const strStr = () => {
  let haystack = "hello",
    needle = "ll";
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

console.log(strStr());
