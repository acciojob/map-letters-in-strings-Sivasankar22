//your JS code here. If required.
function mapLetters(word) {
  // Initialize an empty object to store the result
  const result = {};

  // Iterate over each character in the word
  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    // Check if the character already exists in the result object
    if (result[char]) {
      // If it exists, push the index into the array
      result[char].push(i);
    } else {
      // If it doesn't exist, create a new array with the index
      result[char] = [i];
    }
  }

  return result;
}

// // Test cases
// console.log(mapLetters("dodo")); // ➞ { d: [0, 2], o: [1, 3] }
// console.log(mapLetters("froggy")); // ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// console.log(mapLetters("grapes")); // ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

