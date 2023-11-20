const Stack = require("./stack");
function secondGreaterEle(nums) {
  let monoStack = new Stack();

  let greater = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    while (!monoStack.isEmpty() && monoStack.top() <= nums[i]) {
      monoStack.pop();
    }
    if (monoStack.isEmpty()) {
      greater[i] = -1;
    } else {
      greater[i] = monoStack.top();
    }
    monoStack.push(nums[i]);
  }
  return greater;
}

console.log(secondGreaterEle([2, 1, 3, 4, 5]));
