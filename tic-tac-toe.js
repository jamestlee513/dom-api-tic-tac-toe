window.addEventListener("DOMContentLoaded", (event) => {
  const board = document.getElementById("tic-tac-toe-board");
  const xImg =
    "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
  const oImg =
    "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";

  let counter = 0;

  board.childNodes.forEach((ele) => {
    ele.addEventListener("click", (event) => {
      if (ele.childNodes.length === 0) {
        const marker = document.createElement("img");
        if (counter % 2 === 0) {
          marker.setAttribute("src", xImg);
        } else {
          marker.setAttribute("src", oImg);
        }
        counter++;
        ele.appendChild(marker);
      }
    });
  });
});
