"use strict";
function groupAnagram(arr) {
  const newArr = arr.slice();

  newArr.map((ele, index) => {
    newArr[index] = ele.split("").sort().join("");
  });

  const groups = {};
  newArr.forEach((ele, index) => {
    if (!groups[ele]) {
      groups[ele] = [arr[index]];
    } else {
      groups[ele].push(arr[index]);
    }
  });

  return Object.values(groups);
}

console.log(groupAnagram(["eat", "tan", "ate", "nat", "bat", "tea"]));
