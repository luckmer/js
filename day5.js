const powerfulIntegers = () => {
  let x = 2,
    y = 3,
    bound = 10;
  const set = new Set();
  for (let i = 1; i < bound; i = i * x) {
    for (let j = 1; i + j <= bound; j = j * y) {
      set.add(i + j);
      if (y === 1) break;
    }
    if (x === 1) break;
  }

  return [...set].sort((a, b) => a - b);
};

console.log(powerfulIntegers());
