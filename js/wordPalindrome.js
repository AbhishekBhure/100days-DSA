const wordPalindrome = (word) => {
  let reverseWord = word.split("").reverse().join("");
  return reverseWord === word;
};

console.log(wordPalindrome("racecar"));
