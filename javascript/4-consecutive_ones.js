// 4. Find the max count of consecutive 1’s in an array
const consecutiveOnes = (arr) => {
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      let count = 0;
      while(i < arr.length && arr[i] === 1) {
        count++
        i++
      }
      if (count > max) max = count
    }
  }

  return max
}

module.exports = consecutiveOnes;