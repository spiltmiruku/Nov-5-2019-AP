console.log("tic tac toe script connected");

var board = [];

function play(clickedId) {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedId);

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedID] = "O";
  }
  console.log(board);

  const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const midLeft = board[3];
  const midCenter = board[4];
  const midRight = board[5];
  const botLeft = board[6];
  const botCenter = board[7];
  const botRight = board[8];

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner!`);
    return;
  }

  if (midLeft !== undefined && midLeft === midCenter && midLeft === midRight) {
    alert(`${midLeft} is the winner!`);
    return;
  }
  if (botLeft !== undefined && botLeft === botCenter && botLeft === botRight) {
    alert(`${botLeft} is the winner!`);
    return;
  }
  if (topLeft !== undefined && midLeft === botLeft && topLeft === botLeft) {
    alert(`${topLeft} is the winner!`);
    return;
  }
  if (
    topCenter !== undefined &&
    topCenter === midCenter &&
    topCenter === botCenter
  ) {
    alert(`${topCenter} is the winner!`);
    return;
  }
  if (
    topRight !== undefined &&
    topRight === midRight &&
    topRight === botRight
  ) {
    alert(`${topRight} is the winner!`);
    return;
  }
  if (topLeft !== undefined && topLeft === midCenter && topLeft === botRight) {
    alert(`${topLeft} is the winner!`);
    return;
  }
  if (
    topRight !== undefined &&
    topRight === midCenter &&
    topRight === botLeft
  ) {
    alert(`${topRight} is the winner!`);
    return;
  }

  let boardFull = true;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("It's a Cat's game! Tied game");
  }
}


//Black Diamond
// 1. Board reset function
// 2. Board reset button
// 3. Override a square that has been played + override
// 4. Stops the game after winner declared