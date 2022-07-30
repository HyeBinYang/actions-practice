function factorial(n) {
  if (n < 0) {
    throw new Error("음수는 안됩니다!");
  }

  if (n == 0) return 1;
  return n * factorial(n - 1);
}

module.exports = factorial;
