//  15. Given a string, write a javascript function to count the occurrences of each character in the string.
const countOccurrence = (str) => {
  const charCount = {};

  for(let i = 0; i < str.length; i++) {
    let char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

module.exports = countOccurrence;