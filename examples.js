console.log("script2 is running");
// This is a simplified example of a recursive function.  It counts to 10. The base case is when the start variable is equal to 10.  The recursive case is when the start variable is less than 10.  The function calls itself with the start variable incremented by 1. The function will continue to call itself until the base case is met. The function will then return the value of the base case.

//This code is not a good example of functional programming because it is not pure.  It has side effects.  It logs to the console.  It is also not declarative.  It is imperative.  It tells the computer how to do something.  It is not declarative.  It does not tell the computer what to do. It is also not immutable.  The start variable is mutable.  It is reassigned each time the function is called. It is a simple example of recursion.

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
