// 11. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const evenOnly = (arr) => {
  return arr.filter(num => num % 2 === 0);
}

module.exports = evenOnly;