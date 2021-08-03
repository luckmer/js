let arr = [1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]];

function flatten(arr) {
  return arr.reduce(function (acc, next) {
    let isArray = Array.isArray(next);
    return acc.concat(isArray ? flatten(next) : next);
  }, []);
}

if (!Array.prototype.flatten) {
  Array.prototype.flatten = function () {
    return flatten(this);
  };
}

//connect array solution

const Flatten = (arr) => {
  return arr.reduce(function (acc, next) {
    let isArray = Array.isArray(next);
    return acc.concat(isArray ? flatten(next) : next);
  }, []);
};

if (!Array.prototype.Flatten) {
  Array.prototype.Flatten = function () {
    return Flatten(this);
  };
}

const between = (start, end) => {
  return function (value, index) {
    return value > start && value < end;
  };
};
https://codepen.io/MehdiAoussiad/pen/OJXXeMK
const list = [1, 2, 3, 4, 5, 6, 7, 8];
const filteredArray = list.filter(between(3, 6));

//promise from scratch

class CustomPromise {
  state = "PENDING";
  value = undefined;
  thenCallbacks = [];
  errorCallbacks = [];

  constructor(action) {
    action(this.resolver.bind(this), this.reject.bind(this));
  }

  resolver(value) {
    this.state = "RESOLVED";
    this.value = value;
    this.thenCallbacks.forEach((callback) => {
      callback(this.value);
    });
  }

  reject(value) {
    this.state = "REJECTED";
    this.value = value;
    this.errorCallbacks.forEach((callback) => {
      callback(this.value);
    });
  }

  then(callback) {
    this.thenCallbacks.push(callback);
  }

  reject(callback) {
    this.errorCallbacks.push(callback);
    return this;
  }
}

const promise = new CustomPromise((res, reject) => {
  setTimeout(() => {
    const rand = Math.ceil(Math.random(1 * 1 + 6) * 6);
    if (rand > 2) {
      res("success");
    } else {
      reject("Error");
    }
  });
});
