/*Question 5: Count Vowels*/
/*Write a program that accepts a string as input and returns the number of vowels in the string.*/
function vowelInWord(words) {
  let vowelCount = 0;
  let wordLowerCase = words.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < wordLowerCase.length; i++) {
    if (vowels.includes(wordLowerCase[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}
//test cases
console.log("Vowels in the word I 'love javascript really much!' is:");
console.log(vowelInWord("I love javascript really much!"));
