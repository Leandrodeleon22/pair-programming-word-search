// const transpose = function (matrix) {
//   let newMatrix = [];
//   matrix[0].map((x) => newMatrix.push([]));
//   for (let i = 0; i < matrix[0].length; i++) {
//     for (let j = 0; j < matrix.length; j++) {
//       newMatrix[i][j] = matrix[j][i];
//     }
//   }
//   return newMatrix;
// };

const transpose = function (matrix) {
  const newMatrix = matrix[0].map((_, index) => {
    return matrix.map((row) => {
      return row[index];
    });
  });

  return newMatrix;
};

const horizontalJoin = (letters, word) => {
  const rows = letters.map((row) => row.join(""));
  //   const verticalJoin = letters.map((_, index) => {
  //     letters.map((el) => {
  //       return el[index];
  //     });
  //   });
  for (l of rows) {
    if (l.includes(word)) return true;
  }
};

const wordSearch = (letters, word) => {
  if (horizontalJoin(letters, word)) {
    return true;
  }
  const transposedLetters = transpose(letters); // transpose the matrix of letters to transform columns into rows to work with the horizontalJoin function
  console.log(transposedLetters);
  if (horizontalJoin(transposedLetters, word)) {
    return true;
  }
  return false; // did not find any match, return false
};

const result = wordSearch(
  [
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ],
  "ARRY"
);

console.log(result);

module.exports = wordSearch;
