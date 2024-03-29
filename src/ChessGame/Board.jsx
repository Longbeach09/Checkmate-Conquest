import React, { useEffect, useState } from "react";
import BoardSquare from "./BoardSquare";
function Board({ board, turn }) {
  const [currBoard, setCurrBoard] = useState([]);
  useEffect(() => {
    setCurrBoard(turn === "w" ? board.flat() : board.flat().reverse());
  }, [board, turn]); //turns the board when someone plays there move
  function getXYPosition(i) {
    const x = turn === "w" ? i % 8 : Math.abs((i % 8) - 7);
    const y =
      turn === "w" ? Math.abs(Math.floor(i / 8) - 7) : Math.floor(i / 8);
    return { x, y }; //sets the square spots for when the board switches so when it switches it doesnt think its blacks position
  }
  function isBlack(i) {
    const { x, y } = getXYPosition(i);
    return (x + y) % 2 === 1;
  }
  function getPosition(i) {
    const { x, y } = getXYPosition(i);
    const letter = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
    return `${letter}${y + 1}`;
  } //as the title says this gets the position for the chess library
  return (
    <div className="board">
      {currBoard.map((piece, i) => (
        <div key={i} className="square">
          <BoardSquare
            piece={piece}
            black={isBlack(i)}
            position={getPosition(i)}
          />
        </div>
      ))}
    </div>
  );
}
//this whole pages function is mostly getting the main setup for the board
export default Board;
