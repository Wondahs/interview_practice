//  5. Find the factorial of given number
const factorial = (n) => {
  if (n < 0) throw new Error('Input must be a non-negative integer');
  if (n === 0) return 0
  if (n === 1) return 1
  return n * factorial(n - 1);
}

module.exports = factorial;