import { useState, useEffect } from "react";
import { gameSubject, initGame, resetGame } from "../Game";
import Board from "./Board";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

function ChessApp() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();
  const [turn, setTurn] = useState();
  const playerOne = useSelector((state) => state.whitePlayer);
  const playerTwo = useSelector((state) => state.blackPlayer);
  //lots of use state and some redux to get players username
  useEffect(() => {
    initGame(playerOne, playerTwo);
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board);
      setIsGameOver(game.isGameOver);
      setResult(game.result);
      setTurn(game.turn);
    });
    //this is the initial game when someone first starts the game
    return () => subscribe.unsubscribe();
  }, []);

  return (
    <Container fluid>
      <p>{playerOne}</p>
      <p>{playerTwo}</p>
      <div className="gameRow">
        <div xs={{ span: 2 }} className="gameOverTxt">
          {isGameOver && (
            <h2 className="vertical-text">
              GAME OVER
              <button onClick={resetGame}>
                <span className="vertical-text">NEW GAME</span>
              </button>
            </h2>
          )}
        </div>
        <div className="boardRow">
          <div className="board-container">
            <Board board={board} turn={turn} />
          </div>
        </div>
        <div>{result && <p className="vertical-text">{result}</p>}</div>
      </div>
    </Container>
  );
}
//this is my main chess runner i wanted to display who one and couldnt do that for the life of my kinda pissed me off
export default ChessApp;
