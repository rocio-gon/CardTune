import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Present() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const deckId = searchParams.get("id");

  const [deck] = useState(() => {
    try {
      const savedDecks = JSON.parse(
        localStorage.getItem("cardTuneDecks") || "[]"
      );

      return savedDecks.find((item) => item.id === deckId) || null;
    } catch {
      return null;
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!deck || !deck.cards || deck.cards.length === 0) {
    return (
      <main className="presentation-page">
        <h1>Deck not found</h1>
        <p>Return to My decks and open a saved deck.</p>
        <button onClick={() => navigate("/decks")}>
          Back to My decks
        </button>
      </main>
    );
  }

  const cards = deck.cards;

  return (
    <main className="presentation-page">
      <div className="presentation-top">
        <span>CardTune · {deck.name}</span>
        <span>
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      <section className="presentation-card">
        <h1>{cards[currentIndex]}</h1>
      </section>

      <div className="presentation-controls">
        <button
          onClick={() =>
            setCurrentIndex((index) => Math.max(0, index - 1))
          }
          disabled={currentIndex === 0}
        >
          ← Previous
        </button>

        <button
          onClick={() =>
            setCurrentIndex((index) =>
              Math.min(cards.length - 1, index + 1)
            )
          }
          disabled={currentIndex === cards.length - 1}
        >
          Next →
        </button>
      </div>
    </main>
  );
}

export default Present;



