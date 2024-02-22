/* question 4: Reverse Integer */
/*Write a program that takes an integer as input and returns an integer with reversed digit
ordering.*/
function reverseInteger(integer) {
  let absoluteValue = Math.abs(integer);
  let numString = String(absoluteValue);
  let numArray = numString.split("");
  let revArray = numArray.reverse();
  let revString = revArray.join("");
  let revInt = parseInt(revString);
  if (integer < 0) {
    return -revInt;
  }
  return revInt;
}
//test cases
console.log(reverseInteger(123));
console.log(reverseInteger(-456));
