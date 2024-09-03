// 17. Write a javascript function that sorts an array of numbers in descending order.
const descendingSort = (arr) => {
  return arr.sort((a, b) => b - a);
}

module.exports = descendingSort;