console.log("script2 is running");
// This is a simplified example of a recursive function

function countTo10(start) {
  // Base case
  if (start === 10) {
    return console.log(start);
  }
  // Recursive case
  console.log(start);
  countTo10(start + 1);
}

countTo10(1);
