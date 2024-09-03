// Create a function which will accepts two arrays arr1 and arr2.
// The function should return true if every value in arr1 has its corresponding value squared in array2.
// The frequency of values must be same.
const squaredArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) throw new Error('Both arrays must have the same length');
  return arr1.every((value, index) => value ** 2 === arr2[index])
}

module.exports = squaredArray;