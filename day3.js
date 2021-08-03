const maximumWealth = () => {
  let accounts = [
    [1, 5],
    [7, 3],
    [3, 5],
  ];

  const map = [];
  const result = [];

  for (let i = 0; i < accounts.length; i++) {
    let value = accounts[i];
    let counter = 0;

    for (let row of value) {
      if (row) {
        counter += row;
      }
    }
    map.push([i, counter]);
  }

  for (let data of map) {
    const value = data.sort((a, b) => a[1] - b[1]);
    result.push(value[1]);
  }
  const sortedArray = result.sort((a, b) => a - b);

  return sortedArray[sortedArray.length - 1];
};

const maximumWealthII = (accounts) => {
  const countAccounts = accounts.map((value, i) => {
    let counter = 0;
    for (let row of value) {
      if (row) {
        counter += row;
      }
    }
    return [i, counter];
  });

  const sortedArray = countAccounts
    .sort((a, b) => a[1] - b[1])
    .map((el) => el[1]);

  return sortedArray[sortedArray.length - 1];
};

const searchRange = () => {
  let num = [5, 7, 7, 8, 8, 10],
    target = 8;
  return [num.indexOf(target), num.lastIndexOf(target)] || [-1, -1];
};

const minOperations = () => {
  let count = 0;
  let n = [1, 1, 1];

  for (let i = 0; i < n.length; i++) {
    if (n[i] >= n[i + 1]) {
      count += n[i] - n[i + 1] + 1;
      n[i + 1] = n[i] + 1;
    }
  }
};

minOperations();
