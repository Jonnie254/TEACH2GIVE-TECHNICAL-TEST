/*Question 3 - Power of Two */
function powerOfTwo(integer) {
  if (integer <= 0) {
    return false;
  }
  return (integer & (integer - 1)) === 0;
}
//test cases
console.log(powerOfTwo(8));
console.log(powerOfTwo(3));
