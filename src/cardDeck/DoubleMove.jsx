import React, { useState } from "react";
import { Chess } from "chess.js";

// Define a card component
function Card({ card, onUseCard }) {
  return (
    <div className="card">
      <h3>{card.name}</h3>
      <p>{card.description}</p>
      <button onClick={() => onUseCard(card)}>Use Card</button>
    </div>
  );
}

// Initialize a chess instance
const chess = new Chess();

// Function to handle piece movement
function handleMove(from, to) {
  const move = chess.move({ from, to });

  if (move) {
    // Check if the piece can move again in the same turn
    if (move.flags.includes("c")) {
      // Implement the logic for a double move here
      // For example, a double step for pawns
    }
  }
}

// Define your Chess Game component
function ChessGame() {
  // Define your card deck
  const cardDeck = [
    {
      name: "Double Move",
      description: "Allows a piece to move twice in one turn.",
      useCard: handleMove,
    },
    // Add more cards here
  ];

  const [availableCards, setAvailableCards] = useState(cardDeck);

  // Function to use a card
  function useCard(card) {
    const selectedCardIndex = availableCards.indexOf(card);
    if (selectedCardIndex !== -1) {
      card.useCard("e2", "e4"); // Example usage to trigger the effect
      const updatedCards = [...availableCards];
      updatedCards.splice(selectedCardIndex, 1);
      setAvailableCards(updatedCards);
    }
  }

  return (
    <div className="chess-game">
      {/* Render your chessboard and game components */}
      {/* Display the card deck */}
      <div className="card-deck">
        {availableCards.map((card, index) => (
          <Card key={index} card={card} onUseCard={useCard} />
        ))}
      </div>
    </div>
  );
}
