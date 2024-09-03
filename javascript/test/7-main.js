const squaredArray = require('../7-squared_array');

const arr1 = [2, 3, 4, 5]
const squaredArr1 = arr1.map((value) => value ** 2);
const arr2 = [2, 9, 8, 25]

console.log('Array 1:', arr1);
console.log('Squared Array 1:', squaredArr1);
console.log('Array 2:', arr2);
console.log('Is Squared Array 1 squared array of Array 1?', squaredArray(arr1, squaredArr1));
console.log('Is array 2 squared array of array 1?', squaredArray(arr1, arr2));