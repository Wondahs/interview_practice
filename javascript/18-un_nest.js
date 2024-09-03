// 20. Implement a javascript function that flattens a nested array into a single-dimensional array.
const unNest = (nestArr, flattened = []) => {
  nestArr.forEach(element => {
    if (Array.isArray(element)) {
      flattened = unNest(element, flattened);
    } else {
      flattened.push(element);
    }
  });

  return flattened;
}

module.exports = unNest;