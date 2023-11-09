var createCounter = function (init) {
  let preesentCount = init;
  return {
    increment: () => ++preesentCount,
    resest: () => (preesentCount = init),
    decrement: () => --preesentCount,
  };
};

const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.resest());
console.log(counter.resest());
