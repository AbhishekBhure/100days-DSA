const arr = [1, 2, 3, 4, 5];
var eveCount = 0;
var oddCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    eveCount++;
  } else {
    oddCount++;
  }
}
console.log(`Even: ${eveCount} and Odd: ${oddCount}`);
