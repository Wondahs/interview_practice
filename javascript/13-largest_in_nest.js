// 13. Write a JavaScript program to find the largest element in a nested array.
//  This function uses recursion to check through all levels of nesting.
const largestInNest = (nestArr, largest = -Infinity) => {
  nestArr.forEach(element => {
    if (Array.isArray(element)) {
      largest = largestInNest(element, largest);
    } else if (element > largest) {
      largest = element;
    }
  });

  return largest;
}

module.exports = largestInNest;
