function findMedianSortedArrays(nums1: number[], nums2: number[]) {
  const union = nums1.concat(nums2);
  let [output, len, i] = [0, union.length, 0];

  union.sort((a, b) => a - b);
  if (len % 2 !== 0) {
    // odd size
    i = (len - 1) / 2;
    output = union[i];
  } else {
    // even size
    i = len / 2;
    output = (union[i - 1] + union[i]) / 2;
  }

  console.log("🚀 ~ findMedianSortedArrays ~ union:", union, output);
  return output;
}

// TEST
[
  { input: { nums1: [1, 3], nums2: [2] }, expected: 2 },
  { input: { nums1: [1, 2], nums2: [3, 4] }, expected: 2.5 },
  { input: { nums1: [3], nums2: [-2, -1] }, expected: 1 },
  { input: { nums1: [1], nums2: [2, 3, 4, 5, 6, 7, 8, 9, 10] }, expected: 5.5 },
].map(({ input }) => findMedianSortedArrays(input.nums1, input.nums2));
