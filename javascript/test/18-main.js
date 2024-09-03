const unNest = require('../18-un_nest');

const nestArr = [[3, 4, 58], [709, 8, 9, [1000, 11]], [111, 2]]

console.log('Original array:', nestArr);
console.log('Flattened array:', unNest(nestArr));