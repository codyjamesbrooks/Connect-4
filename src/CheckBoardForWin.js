export default checkBoardForWin;

function checkBoardForWin(tokensInPlay) {
  // Scan all the cols and return the largets number of tokens in a row
  let maxInCol, leadingColor;
  [maxInCol, leadingColor] = checkBoardColumns(tokensInPlay);
  if (maxInCol >= 4) return [true, leadingColor];

  // Scan all the rows to see if there are 4 in a row
  let maxInRow;
  [maxInRow, leadingColor] = checkBoardRows(tokensInPlay);
  if (maxInRow >= 4) return [true, leadingColor];

  // Check the lower left diag of every filled space
  let maxInLeftDiag;
  [maxInLeftDiag, leadingColor] = checkBoardLeftDiag(tokensInPlay);
  if (maxInLeftDiag >= 4) return [true, leadingColor];

  // Check the lower right diag of every filled space
  let maxInRightDiag;
  [maxInRightDiag, leadingColor] = checkBoardRightDiag(tokensInPlay);
  if (maxInRightDiag >= 4) return [true, leadingColor];

  return [false, ""];
}

function checkBoardColumns(tokensInPlay) {
  let leadingColorCol;
  let maxInCol = 1;
  let inOrder = 0;
  let current;
  for (let columns of tokensInPlay) {
    inOrder = 0;
    current = undefined;
    for (let i = 0; i <= 6; i++) {
      if (columns[i] === current && columns[i]) {
        inOrder += 1;
        if (inOrder > maxInCol) {
          leadingColorCol = current;
          maxInCol = inOrder;
        }
      } else {
        current = columns[i];
        inOrder = 1;
      }
    }
  }
  return [maxInCol, leadingColorCol];
}

function checkBoardRows(tokensInPlay) {
  let leadingColorRow;
  let maxInRow = 1;
  let inOrder = 0;
  let current;
  for (let i = 0; i <= 6; i++) {
    inOrder = 0;
    current = undefined;
    for (let rows of tokensInPlay) {
      if (rows[i] === current && rows[i]) {
        inOrder += 1;
        if (inOrder > maxInRow) {
          leadingColorRow = current;
          maxInRow = inOrder;
        }
      } else {
        current = rows[i];
        inOrder = 1;
      }
    }
  }
  return [maxInRow, leadingColorRow];
}

function checkBoardLeftDiag(tokensInPlay) {
  let current, downLeft, leadingColorLeftDiag;
  let maxLeftDag = 1;
  let inOrder = 0;
  for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= 5; j++) {
      if (tokensInPlay[i][j]) {
        current = tokensInPlay[i][j];
        downLeft = 1;
        inOrder = 1;
        while (i - downLeft >= 0 && j + downLeft <= 5) {
          if (tokensInPlay[i - downLeft][j + downLeft] === current) {
            inOrder += 1;
            downLeft += 1;
            if (inOrder > maxLeftDag) {
              leadingColorLeftDiag = current;
              maxLeftDag = inOrder;
            }
          } else {
            break;
          }
        }
      }
    }
  }
  return [maxLeftDag, leadingColorLeftDiag];
}

function checkBoardRightDiag(tokensInPlay) {
  let current, downRight, leadingColorRightDiag;
  let maxRightDiag = 1;
  let inOrder = 0;
  for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= 5; j++) {
      if (tokensInPlay[i][j]) {
        current = tokensInPlay[i][j];
        downRight = 1;
        inOrder = 1;
        while (i + downRight <= 6 && j + downRight <= 5) {
          if (tokensInPlay[i + downRight][j + downRight] === current) {
            inOrder += 1;
            downRight += 1;
            if (inOrder > maxRightDiag) {
              leadingColorRightDiag = current;
              maxRightDiag = inOrder;
            }
          } else {
            break;
          }
        }
      }
    }
  }
  return [maxRightDiag, leadingColorRightDiag];
}
