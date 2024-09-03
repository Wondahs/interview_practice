// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]
const mergeAndSort = (arr1, arr2) => {
  let merged = [...arr1,...arr2];
  return merged.sort((a, b) => a - b);
}

module.exports = mergeAndSort;