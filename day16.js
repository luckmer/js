// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));

function bark() {
  console.log("Woof!");
}

bark.animal = "dog";

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// console.log(member.getFullName());

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

function getPersonInfo(one, two, three) {
  // console.log(one);
  // console.log(two);
  // console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

// console.log(
//   obj.hasOwnProperty("1"),
//   obj.hasOwnProperty(1),
//   set.has("1"),
//   set.has(1)
// );

String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

// console.log(name.giveLydiaPizza());

// const a = {};
// const b = { key: 567 };
// const c = { keyType: 999 };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b], a);

const settings = {
  username: "lydiahallie",
  level: {
    one: "dsa",
  },
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

const car = {
  brand: "Mercedes",
  color: "czerwony",
  showText() {
    // console.log(`${this.brand} koloru ${this.color}`);
  },
};

car.drive = function () {
  // console.log(this.brand);
};

car.showText();
car.drive();

// const ob = {
//   show() {
//     console.log(this); //ob
//     console.log(globalThis); //window
//     console.log(globalThis);
//   },
// };

// ob.show();
const o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};

// console.log(o.f());

const das = { prop: 312 };
const independent = () => this.prop;

das.f = independent;

// console.log(o.f());

// console.log(new Int16Array(321).fill(1));

const sortSentence = (s) =>
  s
    .split(" ")
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .join(" ")
    .replace(/[0-9]/g, "");

// console.log(sortSentence(""));
//hard for me right now

const shortestToChar = (s, c) => {
  const a = [];
  const b = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) a.push(i);
  }

  for (let i = 0; i < s.length; i++) {
    b[i] = Number.POSITIVE_INFINITY;
    for (let j = 0; j < a.length; j++) {
      b[i] = Math.min(Math.abs(i - a[j]), b[i]);
    }
  }
  return b;
};

// console.log(shortestToChar("loveleetcode", "e"));

const firstUniqChar = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};

console.log(firstUniqChar("aabb"));

function Base(name) {
  this.name = name;
}

function Child(name) {
  Base.call(this, name);
}
Child.prototype = new Base();

Base.prototype.getName = function () {
  return "Hello " + this.name;
};

var base = new Base("Java");
var child = new Child("Java8");
// alert(base.getName());
// alert(child.getName());

const jump = (nums) => {
  let max = 0;
  let now = 0;
  let result = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === now) {
      now = max;
      result++;
      now = max;
    }
  }
  return result;
};
