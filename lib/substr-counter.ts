function subStrCounter(s: string) {
  let [arr, obj] = [s.split(""), {} as Record<string, number>];
  // count chars
  arr.map((char) => (char in obj ? (obj[char] += 1) : (obj[char] = 1)));
  // get max
  let [max, output] = [0, { char: "", count: 0 }];
  Object.entries(obj).map(([char, count]) => {
    if (count >= max) {
      max = count;
      output = { char, count };
    }
  });

  console.log("🚀 ~ subStrCounter ~ s:", s, obj, output);
  return output;
}

// TEST
[
  { input: { s: "abcabcbb" }, expected: { char: "b", count: 4 } },
  { input: { s: "bbbbb" }, expected: { char: "b", count: 5 } },
  { input: { s: "pwwkew" }, expected: { char: "w", count: 3 } },
].map(({ input }) => subStrCounter(input.s));
