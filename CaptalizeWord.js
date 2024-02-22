/*Question 4: Capitalize Words*/
/*
/**
 * Capitalizes the first letter of each word in a given input string.
 * @param {string} input - The input string.
 * @returns {string} - The input string with each word's first letter capitalized.
 */
function capitalizeWords(input) {
  let words = input.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
//test cases
console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javascript is fun"));
