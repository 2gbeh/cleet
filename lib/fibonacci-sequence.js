// Compute the first 12 terms of the Fibonacci sequence
function getFibonacci(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    i < 2 ? arr.push(i) : arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log("🚀 ~ getFibonacci ~ arr:", arr);
  return arr;
}

// TEST
[{ input: { n: 12 }, expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] }].map(
  ({ input }) => getFibonacci(input.n)
);
