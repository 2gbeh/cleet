function main(s: string) {
  let [arr, char] = [s.trim().split(""), ""];
  let [chunks, chunk] = [[] as Array<string[]>, [] as string[]];
  // extract chunks
  for (let i = 0; i < arr.length; i++) {
    char = arr[i];
    if (!chunk.includes(char)) {
      chunk.push(char);
    }
    for (let j = i + 1; j < arr.length; j++) {
      char = arr[j];
      if (chunk.includes(char)) {
        chunks.push(chunk);
        chunk = [];
        break;
      }
      chunk.push(char);
    }
  }
  // get max
  let [len, max, output] = [0, 0, { substr: "", count: 0 }];
  chunks.map((chunk) => {
    len = chunk.length;
    if (len > max) {
      max = len;
      output = { substr: chunk.join(""), count: len };
    }
  });

  console.log("🚀 ~ main ~ s:", s, chunks, output);
  return output.count;
}

// TEST
[
  { input: { s: "abcabcbb" }, expected: 3 },
  { input: { s: "bbbbb" }, expected: 1 },
  { input: { s: "pwwkew" }, expected: 3 },
].map(({ input }) => main(input.s));
