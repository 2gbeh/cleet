function twoSum(nums: Array<number>, target: number) {
  let [output, found] = [[0, 0], false];
  //
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output = [i, j];
        found = true;
        break;
      }
    }
    //
    if (found) break;
  }
  //
  console.log("🚀", nums, target, output, found);
  return output;
}

// TEST
[
  { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
  { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
  { input: { nums: [3, 3], target: 6 }, expected: [0, 1] },
].map(({ input }) => twoSum(input.nums, input.target));
