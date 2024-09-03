// 1. How to check whether a string is a palindrome
const isPalindrome = (string) => {
  strLen = string.length

  for (let i = 0; i < strLen / 2; i++) {
    if (string[i] !== string[strLen - 1 - i]) return false
  }
  return true
}

module.exports = isPalindrome;