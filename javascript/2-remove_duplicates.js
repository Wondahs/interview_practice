// 2. Program to remove duplicates from an array

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
}

module.exports = removeDuplicates;