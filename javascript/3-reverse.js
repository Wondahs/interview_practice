// 3. Program to find Reverse of a string without using built-in method
const reverseString = (str) => {
  let reversed = '';

  for(let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed
  }

  return reversed;
}

module.exports = reverseString;