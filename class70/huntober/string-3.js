// example key characters -> 'A','_','K','E','Y','!'

// const keyedString =
//   "AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters";
// implement key replacement function
// const solvedString =
//   " you could think this is hard to read before replacing the key characters";

function removeChars(str) {
  return str.replace(/[Space]/g, " ");
}

// console.log(removeChars(keyedString));
// console.log(solvedString === removeChars(keyedString));
