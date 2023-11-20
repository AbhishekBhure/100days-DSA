const Stack = require("./stack");

let histogram = [2, 1, 5, 6, 2, 3];

function getNextSmallerEleIndex(histogram) {
  let ans = new Array(histogram.length);
  let monoStack = new Stack();

  for (let i = histogram.length - 1; i >= 0; i--) {
    while (!monoStack.isEmpty() && histogram[monoStack.top()] >= histogram[i]) {
      monoStack.pop();
    }
    if (monoStack.isEmpty()) {
      ans[i] = histogram.length;
    } else {
      ans[i] = monoStack.top();
    }
    monoStack.push(i);
  }
  return ans;
}

function getPrevSmallerELeIndex(histogram) {
  let ans = new Array(histogram.length);
  let monoStack = new Stack();

  for (let i = 0; i < histogram.length; i++) {
    while (!monoStack.isEmpty() && histogram[monoStack.top()] >= histogram[i]) {
      monoStack.pop();
    }
    if (monoStack.isEmpty()) {
      ans[i] = -1;
    } else {
      ans[i] = monoStack.top();
    }
    monoStack.push(i);
  }
  return ans;
}

function getMaxArea(histogram, getNextSmallerEleIndex, getPrevSmallerELeIndex) {
  let maxArea = 0;
  for (let i = 0; i < histogram.length; i++) {
    let width = getNextSmallerEleIndex[i] - getPrevSmallerELeIndex[i] - 1;
    let area = histogram[i] * width;
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
}

function largestRectangleArea(histogram) {
  let nextSmallerEleIndex = getNextSmallerEleIndex(histogram);
  let prevSmallerEleIndex = getPrevSmallerELeIndex(histogram);

  return getMaxArea(histogram, nextSmallerEleIndex, prevSmallerEleIndex);
}

console.log(largestRectangleArea(histogram));
