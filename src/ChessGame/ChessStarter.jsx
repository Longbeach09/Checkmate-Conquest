import { useState, useEffect } from "react";
import { gameSubject, initGame, resetGame } from "../Game";
import Board from "./Board";
import { useSelector } from "react-redux";

function ChessApp() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  const [turn, setTurn] = useState();
  const playerOne = useSelector((state) => state.whitePlayer);
  const playerTwo = useSelector((state) => state.blackPlayer);
  //lots of use state and some redux to get players username
  useEffect(() => {
    initGame();
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board);
      setIsGameOver(game.isGameOver);
      setResult(game.result);
      setTurn(game.turn);
    });
    //this is the innitual game when somoene first starts the game
    return () => subscribe.unsubscribe();
  }, []);

  return (
    <div className="container">
      {isGameOver && (
        <h2 className="vertical-text">
          GAME OVER
          <button onClick={resetGame}>
            <span className="vertical-text">NEW GAME</span>
          </button>
        </h2>
      )}
      <p>{playerOne}</p>
      <p>{playerTwo}</p>
      <div className="board-container">
        <Board board={board} turn={turn} />
      </div>
      {result && <p className="vertical-text">{result}</p>}
    </div>
  );
}
//this is my main chess runner i wanted to display who one and couldnt do that for the life of my kinda pissed me off
export default ChessApp;
