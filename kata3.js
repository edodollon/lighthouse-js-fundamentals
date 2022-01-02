const numberOfVowels = function(data) {
  let vowelArray = ['a', 'e', 'i', 'o', 'u'];
  let total = 0;

  for (let vowel of vowelArray) {

    for (let i = 0; i < data.length; i++) {
      if (vowel === data[i]) {
        total++;
      }
    }
  }

  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));