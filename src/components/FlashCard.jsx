import { useState } from "react";

function FlashCard({ flashCard }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className={`flashcard${isFlipped ? " flip" : ""}`}
    >
      <div className="front-side">{flashCard.word}</div>
      <div className="back-side">{flashCard.persianEquivalent}</div>
    </div>
  );
}

export default FlashCard;
