/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {
  const arr = Array.from({length:matrix[0].length}, () =>
    new Array(matrix.length).fill(0)
  );
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
        arr[col][row]=matrix[row][col];
    }
  }
  return arr
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(matrix));
