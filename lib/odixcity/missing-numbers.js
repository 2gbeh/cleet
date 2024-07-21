/* let arr = [1,2,3,4,5,6,7,8,10]; Given an array of numbers, 
write a function that returns an array of the missing numbers within the range. */
function missingNumbers() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  let numberLine = [...Array(10)].map((_, i) => i + 1);
  let missing = [];

  numberLine.map((n) => {
    !data.includes(n) && missing.push(n);
  });

  console.log("missingNumbers", numberLine, data, missing);
}

missingNumbers()