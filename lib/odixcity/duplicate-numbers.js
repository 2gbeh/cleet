/* let arr = [1,2,3,1,4,5,6,7,7,8,10]; Given an array of numbers, 
write a function that returns an array of all the duplicate numbers.
*/
function duplicategNumbers() {
  let data = [1, 2, 3, 1, 4, 5, 6, 7, 7, 8, 10];
  let duplicates = [];

  data.map((i) => {
    let arr = data.filter((j) => j === i);
    if (arr.length > 1 && !duplicates.includes(i)) {
      duplicates.push(i);
    }
  });

  console.log("duplicategNumbers", data, duplicates);
}

duplicategNumbers()