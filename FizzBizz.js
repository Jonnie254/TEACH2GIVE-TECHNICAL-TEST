/*Question 1 - FizzBizz */
function fizzBizz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBizz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Bizz");
    } else {
      console.log(i);
    }
  }
}
