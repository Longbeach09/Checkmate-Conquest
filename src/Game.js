import { Chess as ChessLibrary } from "chess.js";

import { BehaviorSubject } from "rxjs";

// let promotion = "rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5";
// let staleMate = "4k3/4P3/4K3/8/8/8/8/8 b - - 0 78";
// let checkMate = "rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3";
// let insuficcientMaterial = "k7/8/n7/8/8/8/8/7K b - - 0 1";
// let playerOne = "";
// let playerTwo = "";
// need to figure out how to get the player one and two in the initial game adn then put there wins and loses in the database
const chess = new ChessLibrary();

export const gameSubject = new BehaviorSubject({
  board: chess.board(),
});

// To wire this up to the server, instead of getting `saveGame` from local storage, you will have a form that takes in the gameId
// And then use that game id to call a get request to `/games` which will then pass back the game
export function initGame() {
  const savedGame = localStorage.getItem("savedGame");
  if (savedGame) {
    chess.load(savedGame);
  }
  updateGame();
}

export function resetGame() {
  chess.reset();
  updateGame();
}

export function handleMove(from, to) {
  const promotions = chess.moves({ verbose: true }).filter((m) => m.promotion);
  console.table(promotions);
  if (promotions.some((p) => `${p.from}:${p.to}` === `${from}:${to}`)) {
    const pendingPromotion = { from, to, color: promotions[0].color };
    updateGame(pendingPromotion);
  }
  const { pendingPromotion } = gameSubject.getValue();

  if (!pendingPromotion) {
    move(from, to);
  }
}

export function move(from, to, promotion) {
  let tempMove = { from, to };
  if (promotion) {
    tempMove.promotion = promotion;
  }
  const legalMove = chess.move(tempMove);
  if (legalMove) {
    updateGame();
  }
}

// To wire this up to the server you just need to instead of pushing game state into local storage, use a `PUT` request
// to `/games` and pass the gameId, gameState
function updateGame(pendingPromotion) {
  const isGameOver = chess.game_over();
  const newGame = {
    board: chess.board(),
    pendingPromotion,
    isGameOver,
    turn: chess.turn(),
    result: isGameOver ? getGameResult() : null,
  };
  localStorage.setItem("savedGame", chess.fen());
  function getGameResult() {
    // const playerOne = useSelector((state) => state.whitePlayer);
    // const playerTwo = useSelector((state) => state.blackPlayer);
    if (chess.in_checkmate()) {
      const winner = chess.turn() === "w" ? "BLACK" : "WHITE";
      return `CHECKMATE - WINNER - ${winner}`;
    } else if (chess.in_draw()) {
      let reason = "50 - MOVES - RULE";
      if (chess.in_stalemate()) {
        reason = "STALEMATE";
      } else if (chess.in_threefold_repetition()) {
        reason = "REPETITION";
      } else if (chess.insufficient_material()) {
        reason = "INSUFFICIENT MATERIAL";
      }
      return `DRAW - ${reason}`;
    } else {
      return "UNKNOWN REASON ";
    }
  }

  gameSubject.next(newGame);
}
