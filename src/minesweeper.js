const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++ ) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};
console.log(generatePlayerBoard(3, 3));

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++ ) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    //bombs will be placed ontop of other bombs, will fix later.
  }
  return board;
};
console.log(generateBombBoard(5, 5, 10));
