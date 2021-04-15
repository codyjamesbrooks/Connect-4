export default checkBoardForWin;

function checkBoardForWin(tokensInPlay) {
  console.log("in win check function");
  let maxInRow;
  // Scan all the columns to see if there are 4 in a row
  let inRow = 0;
  let current;
  for (let columns of tokensInPlay) {
    inRow = 0;
    current = undefined;
    for (let i = 0; i <= 6; i++) {
      if (columns[i] === current) {
        inRow += 1;
        maxInRow = Math.max(maxInRow, inRow);
      } else {
        current = columns[i];
        inRow = 1;
      }
    }
  }
  console.log(maxInRow);
  if (maxInRow >= 4) return true;
}
