const testString = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.";
const answerString = "PRO-TIP #498: IT'S NICE TO SAY HELLO.";
const cipher = {
  0: "O",
  1: "I",
  2: "Z",
  3: "E",
  4: "h",
  5: "S",
  6: "G",
  7: "L",
  8: "B",
  9: "q",
  O: "0",
  I: "1",
  Z: "2",
  E: "3",
  h: "4",
  S: "5",
  G: "6",
  L: "7",
  B: "8",
  q: "9",
};

function translateString(str) {
  return str.split("").reduce((acc, cur) => {
    if (cur in cipher) {
      return acc + cipher[cur];
    } else {
      return acc + cur;
    }
  }, "");
}

console.log(translateString(testString));
console.log(translateString(testString) === answerString);
