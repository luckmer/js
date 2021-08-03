// 1. Please write a function that reverses a string
const string = "reverse";
const Reverse = (string) => string.split("").reverse().join("");

// 2. Please write a function that filters out numbers from a list
const number = 2;
const array = [1, 2, 3, 4, 5, 6, 7, "word", " "];

const filter = (data) => data.filter((el) => el !== " " && !isNaN(el));

// 3. Please write a function that shows the usage of closures

const calculates = () => {
  let x = 42;
  let inc = function () {
    x += 1;
    console.log(x);
  };
  return inc;
};
// let calc = calculates();
// calc();
// calc();
// calc();

// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const array2 = [[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5];

const flatten = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
};

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const a = ["b", 3, 4, 76, "c"];
const b = ["a", "b", 4, 76, 21, "e"];

const FindCommonElement = (arr1, arr2) =>
  arr1.filter((item) => arr2.includes(item));

// FindCommonElement(a,b)

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const a1 = ["b", 3, 4, 76, "c"];
const b1 = ["a", "b", 4, 76, 21, "e"];

const FindDifferentElements = (arr1, arr2) => {
  return arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));
};

// FindDifferentElements(a1, b1)

// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]

const Input = { color: "Blue", id: "22", size: "xl" };

const Transform = (data) => Object.entries(data);

// Transform(Input);

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }
const InputII = [
  ["color", "blue"],
  ["id", "22"],
  ["size", "xl"],
];

const ReTransform = (data) => Object.fromEntries(data);
// ReTransform(InputII)

// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const InputIII = ["a", "b", "c", "d"];
const Obj = { a: { b: { c: { d: "23" } } } };

const GetValue = (data, obj) => data.reduce((a, b) => a && a[b], obj);

// GetValue(InputIII, Obj);

// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const obj1 = { a: "b", c: "d" };
const obj2 = { c: "d", a: "b" };

const CheckObj = (obj1, obj2) => {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false;

  for (let i of key1) {
    if (obj1[i] !== obj2[i]) return false;
  }

  return true;
};

console.log(CheckObj(obj1, obj2));

// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const keys = ["color", "size"];
const objII = { color: "Blue", id: "22", size: "xl" };

const DeleteKey = (keys, obj) => {
  for (let key of keys) {
    delete obj[key];
  }
  return obj;
};

console.log(DeleteKey(keys, objII));
