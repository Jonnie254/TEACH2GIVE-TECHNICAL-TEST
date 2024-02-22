/* Question 2 - Fibonacci Sequence */
/*Write a program to generate the Fibonacci sequence up to 100. */

/**
 * Generates a Fibonacci sequence up to a maximum value of 100.
 * @returns {void}
 */
function fibonacci() {
  let fibArray = [0, 1];
  //loop through the array and add the last two numbers to get the next number
  for (let i = 2; fibArray[i - 1] + fibArray[i - 2] <= 100; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  console.log("Question 2 - Fibonacci Sequence");
  console.log(fibArray.join(", "));
}
// Call the function
fibonacci();
