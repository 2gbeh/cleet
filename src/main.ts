export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const listNodeToArray = (listNode: ListNode | null) => {
    let [arr, current] = [[] as Array<number>, listNode];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  };
  const invertArrayValue = (array: Array<number>) =>
    Number(array.join("").split("").reverse().join(""));
  //
  let [arr1, arr2] = [listNodeToArray(l1), listNodeToArray(l2)];
  let [num1, num2] = [invertArrayValue(arr1), invertArrayValue(arr2)];
  let invertedSumArray = (num1 + num2)
    .toString()
    .split("")
    .reverse()
    .map((n) => Number(n));
  //
  let output = new ListNode(invertedSumArray[0]);
  let node = output;
  invertedSumArray.map((n, i) => {
    if (i > 0) {
      let virtualNode = new ListNode(n);
      node.next = virtualNode;
      node = virtualNode;
    }
  });
  console.log("🚀 ~ arr1:", arr1, arr2);
  console.log("🚀 ~ num1:", num1, "+", num2, "=", num1 + num2);
  console.log("🚀 ~ invertedSumArray:", invertedSumArray);
  return output;
}

// TEST
[
  {
    input: {
      l1: new ListNode(2, new ListNode(4, new ListNode(3))),
      l2: new ListNode(5, new ListNode(6, new ListNode(4))),
    },
    expected: [7, 0, 8],
  },
  {
    input: {
      l1: new ListNode(0),
      l2: new ListNode(0),
    },
    expected: [0],
  },
  {
    input: {
      l1: new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
          )
        )
      ),
      l2: new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
    },
    expected: [8, 9, 9, 9, 0, 0, 0, 1],
  },
].map(({ input }) => addTwoNumbers(input.l1, input.l2));
