let greeds = [2, 3, 1, 7, 6, 4],
  sizes = [2, 1, 4, 5, 3, 1];

const maxCount = (greed, size) => {
  greed.sort((a, b) => a - b);
  size.sort((a, b) => a - b);
  let greedIndex = 0,
    sizeIndex = 0,
    count = 0;

  while (greedIndex < greeds.length && sizeIndex < sizes.length) {
    if (greeds[greedIndex] <= sizes[sizeIndex]) {
      count++;
      greedIndex++;
      sizeIndex++;
    } else {
    }
  }
  return count;
};

console.log(maxCount(greeds, sizes));
