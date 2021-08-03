// while (divide != -1) {
//   numberResult.splice(
//     divide,
//     2,
//     parseFloat(numberResult[divide] + numberResult[divide + 1])
//   );
//   operatorResult.splice(divide, 1);
//   divide = operatorResult.indexOf("+");
// }

// var subtract = operatorResult.indexOf("-");
// while (subtract != -1) {
//   numberResult.splice(
//     subtract,
//     2,
//     numberResult[subtract] - numberResult[subtract + 1]
//   );
// operatorResult.splice(subtract, 1);
// subtract = operatorResult.indexOf("-");
// }

// var add = operatorResult.indexOf("+");
// while (add != -1) {
//   numberResult.splice(
//     add,
//     2,
//     parseFloat(numberResult[add]) + parseFloat(numberResult[add + 1])
//   );
//   operatorResult.splice(add, 1);
//   add = operatorResult.indexOf("+");
// }

// const numberResult = currentString.split(/\+|\-|\*|\%/g);
// const operatorResult = currentString.replace(/[0-9]|\./g, "").split("");
