const chessboard = document.querySelector(".chessboard-container");

function generateBoard() {
  for (let row = 0; row < 64; row++) {
    const square = document.createElement("div");
    square.classList.add("square");

    chessboard.appendChild(square);
  }
}

generateBoard();
