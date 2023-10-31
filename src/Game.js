import { Chess as ChessLibrary } from "chess.js";

import { BehaviorSubject } from "rxjs";

let promotion = "rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5";

const chess = new ChessLibrary(promotion);

export const gameSubject = new BehaviorSubject({
  board: chess.board(),
});

export function initGame() {
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

export function move(from, to) {
  const legalMove = chess.move({ from, to });
  if (legalMove) {
    updateGame();
  }
}

function updateGame(pendingPromotion) {
  const newGame = {
    board: chess.board(),
    pendingPromotion,
  };
  gameSubject.next(newGame);
}
