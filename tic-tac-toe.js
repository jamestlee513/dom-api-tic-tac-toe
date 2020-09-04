window.addEventListener("DOMContentLoaded", (event) => {
  const board = document.getElementById("tic-tac-toe-board");
  const xImg =
    "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
  const oImg =
    "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";
  const buttons = document.querySelectorAll("button");
  const newGameBtn = buttons[0];
  const giveUpBtn = buttons[1];
  const announcement = document.getElementById("game-status");

  let counter = 0;
  let squares = [];
  let isGameOver = false;

  for (let i = 0; i < 9; i++) {
    squares.push(null);
  }

  if (localStorage.getItem("saveState") !== null) { 
    loadGame(); 
  };

  board.addEventListener("click", (event) => {
    const square = event.target;
    if (event.target.value === undefined && isGameOver === false) {
      const marker = document.createElement("img");
      const index = Number(square.id[square.id.length - 1]);
      if (counter % 2 === 0) {
        marker.setAttribute("src", xImg);
        squares[index] = "x";
      } else {
        marker.setAttribute("src", oImg);
        squares[index] = "o";
      }
      counter++;
      square.appendChild(marker);
      checkGameStatus();
      saveGame();
    }
  });

  newGameBtn.addEventListener("click", (event) => {
    if (isGameOver === true) {
      newGame();
    }
  });

  giveUpBtn.addEventListener("click", (event) => {
    if (isGameOver === false) {
      if (counter % 2 === 0) {
        announcement.innerText = "Winner: O";
      } else {
        announcement.innerText = "Winner: X";
      }
      isGameOver = true;
    }
  });

  function newGame() {
    isGameOver = false;
    announcement.innerText = "";

    for (let i = 0; i < 9; i++) {
      squares[i] = null;
    }

    board.childNodes.forEach((square) => {
      square.innerHTML = "";
    });

    counter = 0;
  }

  function checkGameStatus() {
    //Checks for a row victory
    for (let i = 0; i < 9; i += 3) {
      if (
        squares[i] !== null &&
        squares[i] === squares[i + 1] &&
        squares[i + 1] === squares[i + 2]
      ) {
        gameEnd(squares[i]);
      }
    }
    //Checks for a column victory
    for (let i = 0; i < 3; i++) {
      if (
        squares[i] !== null &&
        squares[i] === squares[i + 3] &&
        squares[i + 3] === squares[i + 6]
      ) {
        gameEnd(squares[i]);
      }
    }
    //Checks for either diagonal victories
    if (
      squares[2] !== null &&
      squares[2] === squares[4] &&
      squares[4] === squares[6]
    ) {
      gameEnd(squares[2]);
    }
    if (
      squares[0] !== null &&
      squares[0] === squares[4] &&
      squares[4] === squares[8]
    ) {
      gameEnd(squares[0]);
    }

    //Checks for a tie
    if (counter > 8 && !isGameOver) {
      gameEnd("none");
    }
  }

  //winner could be "x", "o", "none"
  function gameEnd(winner) {
    isGameOver = true;
    announcement.innerText = `Winner: ${winner}`;
  }

  function saveGame() {
    const serialize = JSON.stringify(squares);
    localStorage.setItem("saveState", serialize);
  }
  function loadGame() {
    squares = JSON.parse(localStorage.getItem("saveState"));
    for(let i = 0; i < board.children.length; i++) {
      let square = board.children[i]
      if (squares[i] == "x") {
        const marker = document.createElement("img");
        marker.setAttribute("src", xImg);
        square.appendChild(marker);
      } else if (squares[i] === "o") {
        const marker = document.createElement("img");
        marker.setAttribute("src", oImg);
        square.appendChild(marker);
      }
    };
  }
});
