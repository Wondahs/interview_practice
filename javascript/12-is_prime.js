// 12. Write a JavaScript function to check if a given number is prime.
const isPrime = (n) => {
  const sqrt = n ** (1/2);

  for(let i = 2; i <= sqrt + 1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = isPrime;
