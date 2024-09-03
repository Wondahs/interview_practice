//  14. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
const fibonacci = (n) => {
  fib = [0, 1]
  for (let i = 1; i < n; i++) {
    fib[i + 1] = fib[i] + fib[i - 1];
  }

  return fib;
}

module.exports = fibonacci;