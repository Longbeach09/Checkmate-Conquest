import React, { useEffect, useState } from "react";
import Square from "./Square";
import Piece from "./Piece";
import { useDrop } from "react-dnd";
import { handleMove } from "../Game";
import { gameSubject } from "../Game";
import Promote from "./Promote";
import Promotion from "./Promote";
function BoardSquare({ piece, black, position }) {
  const [promotion, setPromotion] = useState(null);
  const [, drop] = useDrop({
    accept: "piece",
    drop: (item) => {
      const [fromPosition] = item.id.split("-");
      handleMove(fromPosition, position);
    },
  });

  useEffect(() => {
    const subscribe = gameSubject.subscribe(({ pendingPromotion }) =>
      pendingPromotion && pendingPromotion.to == position
        ? setPromotion(pendingPromotion)
        : setPromotion(null)
    ); // this is a ternerary for if a pawn is trying to pramote becausel if it was we would need to display a different piece
    return () => subscribe.unsubscribe();
  }, [position]);

  return (
    <div className="board-square" ref={drop}>
      <Square black={black}>
        {promotion ? (
          <Promote promotion={promotion} />
        ) : piece ? (
          <Piece piece={piece} position={position} />
        ) : null}
      </Square>
    </div>
  );
}
//this does all of the work for each individual piece
export default BoardSquare;
