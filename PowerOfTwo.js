/*Question 3 - Power of Two */
/*Write a program that takes an integer as input and returns true if the input is a power of two.*/

//function to check if a number is a power of two
/**
 * Checks if a given integer is a power of two.
 * @param {number} integer - The integer to check.
 * @returns {boolean} - True if the integer is a power of two, false otherwise.
 */
function powerOfTwo(integer) {
  if (integer <= 0) {
    return false;
  }
  return (integer & (integer - 1)) === 0;
}
//test cases
console.log(powerOfTwo(8));
console.log(powerOfTwo(3));
