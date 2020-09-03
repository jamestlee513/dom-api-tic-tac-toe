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
    });
  });

  function checkGameStatus() {}
});
