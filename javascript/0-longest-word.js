// 0. Program to find the longest word in a given sentence
const longestWord = (sentence) => {
  const words = sentence.split(' ')
  let longest = '';

  for (const word of words) {
    if (word.length > longest.length) longest = word;
  }

  return longest
}

module.exports = longestWord;