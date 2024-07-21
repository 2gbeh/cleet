/*JAVASCRIPT
Given an array of integers, keep a total score based on the following:
1. Add 1 point for every even number in the array
2. Add 3 points for every odd number in the array, except for the number "5"
3. Add 5 points every time the number "5" appears in the array

Note that 0 is considered even
Examples:
Input: [1,2,3,4,5]
Output: 13
Input: [17,19,21]
Output: 9

export function find_total( my_numbers ) {
//Insert your code here
}
*/

export function find_total(my_numbers) {
  //Insert your code here
  var score = 0;
  for (let i = 0; i < my_numbers.length; i++) {
    each_number = my_numbers[i];
    if (each_number === 5) {
      score += 5;
    } else if (each_number % 2 === 0) {
      score += 1;
    } else {
      score += 3;
    }
  }
  return score
}

console.log(
  find_total([1,2,3,4,5]),
  find_total([17,19,21])
);
