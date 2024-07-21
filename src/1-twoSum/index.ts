function twoSum(list: Array<number>, target: number) {
  let [output, found] = [[0, 0], false];
  //
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === target) {
        output = [i, j];
        found = true;
        break;
      }
    }
    //
    if (found) break;
  }
  //
  console.log("🚀", list, target, output, found);
  return output;
}

// TEST
[
  { input: { list: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
  { input: { list: [3, 2, 4], target: 6 }, expected: [1, 2] },
  { input: { list: [3, 3], target: 6 }, expected: [0, 1] },
].map(({ input }) => twoSum(input.list, input.target));
