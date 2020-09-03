window.addEventListener("DOMContentLoaded", (event) => {
  const board = document.getElementById("tic-tac-toe-board");
  const xImg =
    "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
  const oImg =
    "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

  let counter = 0;
  const squares = [];
  for (let i = 0; i < 9; i++) {
    squares.push(null);
  }

  board.childNodes.forEach((ele) => {
    ele.addEventListener("click", (event) => {
      if (ele.childNodes.length === 0) {
        const marker = document.createElement("img");
        const index = Number(ele.id[ele.id.length - 1]);
        if (counter % 2 === 0) {
          marker.setAttribute("src", xImg);
          squares[index] = "x";
          console.log(index);
        } else {
          marker.setAttribute("src", oImg);
          squares[index] = "o";
        }
        counter++;
        ele.appendChild(marker);
        console.log(squares);
      }
      checkGameStatus();
    });
  });

  function checkGameStatus() {
    for (let i = 0; i < 9; i += 3) {
      if (
        squares[i] !== null &&
        squares[i] === squares[i + 1] &&
        squares[i + 1] === squares[i + 2]
      ) {
        console.log(squares[i] + " wins!");
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        squares[i] !== null &&
        squares[i] === squares[i + 3] &&
        squares[i + 3] === squares[i + 6]
      ) {
        console.log(squares[i] + " wins!");
      }
    }

    if (
      squares[2] !== null &&
      squares[2] === squares[4] &&
      squares[4] === squares[6]
    ) {
      console.log(squares[2] + " wins!");
    }
    if (
      squares[0] !== null &&
      squares[0] === squares[4] &&
      squares[4] === squares[8]
    ) {
      console.log(squares[0] + " wins!");
    }
  }
});
