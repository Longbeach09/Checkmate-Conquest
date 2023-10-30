import { Chess as ChessLibrary } from "chess.js";

import { BehaviorSubject } from "rxjs";

const chess = new ChessLibrary();

export const gameSubject = new BehaviorSubject({
  board: chess.board(),
});

chess.board();

export function move(from, to) {
  const legalMove = chess.move({ from, to });
  if (legalMove) {
    gameSubject.next({ board: chess.board() });
  }
  console.log(legalMove);
}
