// 10. Write a JavaScript program to find the maximum number in an array.
const maxArrayNum = (arr) => {
  max = -Infinity;

  arr.forEach(num => {
    if (num > max) {
      max = num;
    }
  });

  return max;
}

module.exports = maxArrayNum;