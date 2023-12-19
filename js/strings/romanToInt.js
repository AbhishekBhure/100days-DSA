symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
// function romanToInt(s) {
//   value = 0;
//   for (let i = 0; i < s.length - 1; i += 1) {
//     symbols[s[i]] < symbols[s[i + 1]]
//       ? (value -= symbols[s[i]])
//       : (value += symbols[s[i]]);
//   }
//   return value + symbols[s[s.length - 1]];
// }

console.log(romanToInt("III"));
