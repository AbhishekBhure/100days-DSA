const numPalindrome = (n) => {
  let num = n.toString();
  let rev = num.split("").reverse().join("");
  return rev === num;
};

console.log(numPalindrome(-121));
