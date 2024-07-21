class ListNode {
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
  let output = new ListNode();
  let current = l1;
  while (current) {
    console.log(current.val);
    current = current.next;
  }

  return l1;
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
