let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [13, 15],
  [11, 14],
];

function mergeInterval(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
}

console.log(mergeInterval());
