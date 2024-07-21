/** TODO
* Write a function that returns the reference ID, encounter ID, and block ID.

* Hint:
* The reference ID will always be the same length.
* The encounter and block ID may have varying lengths.
* The structure of the text will always be the same.
*/

function stringReducer() {
  let text = `<div xmlns=\"http://www.w3.org/1999/xhtml\">Your appointment has been reserved for 2023-06-29 10:00:00. Reference ID is a06876d5-d1e1-4d83-a0e9-6715a6e4cdcc. Appt Block Id is 0. Appt Encounter Id is 31101.</div>`;
  let x = text.split(" ");
  // let y = text.split("Block Id is ");
  // let z = text.split("Encounter Id is ");

  // let refId = arr[1].split(". ");
  // let x = refId[0];
  // let y = refId[1].split(" ").pop();
  // let z = refId[2].split(" ").pop()?.replace(".</div>", "");

  console.log("🚀 ~ stringReducer ~ arr:", x);
}

stringReducer();
