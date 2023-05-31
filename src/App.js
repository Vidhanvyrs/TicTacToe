import React from "react";
import Logoo from "./Logoo";
import Square from "./Square";
import Winner from "./Winner";
import Alert from "./Alert";
import { useState } from "react";
function Board() {
  //using state to ask the user whether to play as x or o
  const [player, setPlayer] = useState(null);
  const oclicker = () => {
    setPlayer("O");
  };
  const xclicker = () => {
    setPlayer("X");
  };
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) return; //so that we wont overwrite the X or O of one block which is already been filled
    const nextSquares = squares.slice(); //slice copies the squares array so that the changes can be done to it instead of the real one which is squares
    if (xIsNext) {
      nextSquares[i] = player;
    } else {
      nextSquares[i] = opposite;
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    //The handleClick function creates a copy of the squares array (nextSquares) with the JavaScript slice() Array method. Then, handleClick updates the nextSquares array to add X to the first ([0] index) square.
    //Calling the setSquares function lets React know the state of the component has changed. This will trigger a re-render of the components that use the squares state (Board) as well as its child components (the Square components that make up the board).
  }
  const winner = calculateWinner(squares);
  let status;
  let opposite;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.every(Boolean)) {
    status = "Draw";
  } else {
    if (player === "X") opposite = "O";
    if (player === "O") opposite = "X";
    status = (xIsNext ? player : opposite) + " : " + "TURN";
  }
  if (!player) {
    return <Alert Oclicker={oclicker} Xclicker={xclicker} />;
  }
  return (
    <div>
      <Logoo />
      <div className="maingame">
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bangers&family=Bungee+Spice&family=Climate+Crisis&family=Fredoka+One&family=Inspiration&family=Modak&family=Press+Start+2P&family=Shadows+Into+Light&family=Silkscreen&family=Smokum&display=swap"
          rel="stylesheet"
        />
        <Winner
          outcome={status}
          style={{
            color: !xIsNext ? "rgb(49,196,190)" : "rgb(243, 179, 66)",
          }}
        />
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          {/* we cannot directly do handleClick(0) because it creates an infinite loop of re-rendering process 
       Why didn’t this problem happen earlier?
      When you were passing onSquareClick={handleClick}, you were passing the handleClick function down as a prop. You were not calling it! But now you are calling that function right away—notice the parentheses in handleClick(0)—and that’s why it runs too early. You don’t want to call handleClick until the user clicks! 
      so to solve this we need to make handleClick(0) as a function the we need to pass it as prop and the same goes for the rest of 8 squares but doing it causes a lot of trouble in naming so we did like this*/}
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>

        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      (squares[a] === "X" && squares[b] === "X" && squares[c] === "X") ||
      (squares[a] === "O" && squares[b] === "O" && squares[c] === "O")
    ) {
      return squares[a];
    }
  }
  return null;
}
export default Board;
