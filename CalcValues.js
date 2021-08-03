const addAB = "2+2 &2 ";
const Add = "2*6";
const normalString = "2*7+ 321-20*4";
// +321+4-5*22

const SumAB = (str) => {
  const noWsStr = str.replace(/\s/g, "");
  const operators = noWsStr.replace(/[\d.,]/g, "").split("");
  const operands = noWsStr
    .replace(/[+/%*-]/g, " ")
    .replace(/\,/g, ".")
    .split(" ")
    .map(parseFloat)
    .filter((it) => it);

  while (operators.includes("*")) {
    let opIndex = operators.indexOf("*");
    operands.splice(opIndex, 2, operands[opIndex] * operands[opIndex + 1]);
    operators.splice(opIndex, 1);
  }

  while (operators.includes("/")) {
    let opIndex = operators.indexOf("/");
    operands.splice(opIndex, 2, operands[opIndex] / operands[opIndex + 1]);
    operators.splice(opIndex, 1);
  }

  while (operators.includes("%")) {
    let opIndex = operators.indexOf("%");
    operands.splice(opIndex, 2, operands[opIndex] % operands[opIndex + 1]);
    operators.splice(opIndex, 1);
  }

  let result = operands[0];

  for (let i = 0; i < operators.length; i++) {
    operators[i] === "+"
      ? (result += operands[i + 1])
      : (result -= operands[i + 1]);
  }

  return result;
};

const Result = (a, op, b) => {
  (a *= 1), (b *= 1);
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
    default:
      null;
  }
};

const Operators = () => {
  let operator = [[["*"], ["/"], ["+"], ["-"]]];
  return operator;
};

const Req = (f, i) => {
  const operators = "([\\" + f[i].join("\\") + "])";
  const numbers = "(\\d+\\.?\\d*)";
  return new RegExp(numbers + operators + numbers);
};

const calculate = (input) => {
  const operator = Operators();
  input = input.replace(/[^0-9%^*\/()\-+.]/g, "");

  let output;
  for (let i = 0, n = operator.length; i < n; i++) {
    const req = Req(operator, i);
    req.lastIndex = 0;

    while (req.test(input)) {
      output = Result(RegExp.$1, RegExp.$2, RegExp.$3);
      if (isNaN(output) || !isFinite(output)) return output;
      input = input.replace(req, output);
    }
  }
  return output;
};
