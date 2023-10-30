import React, { useState, useEffect } from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

function Piece({ piece: { type, color }, position }) {
  const [pieceImg, setPieceImg] = useState(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: "piece",
    item: { id: `${position}-${type}-${color}.png` },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  useEffect(() => {
    import(`./assets/${type}-${color}.png`)
      .then((image) => {
        setPieceImg(image.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [type, color]);

  return (
    <div>
      <DragPreviewImage connect={preview} src={pieceImg} />
      <div
        className="piece-container"
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        {pieceImg && <img src={pieceImg} alt="" className="piece" />}
      </div>
    </div>
  );
}

export default Piece;
