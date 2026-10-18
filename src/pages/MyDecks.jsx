import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyDecks() {
  const navigate = useNavigate();

  const [decks, setDecks] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("cardTuneDecks") || "[]"
      );
    } catch {
      return [];
    }
  });

  function deleteDeck(deckId) {
    const updatedDecks = decks.filter(
      (deck) => deck.id !== deckId
    );

    localStorage.setItem(
      "cardTuneDecks",
      JSON.stringify(updatedDecks)
    );

    setDecks(updatedDecks);
  }

  function presentDeck(deckId) {
  navigate(`/present?id=${encodeURIComponent(deckId)}`);
}

  return (
    <main className="main-content">
      <section className="deck-creator">
        <h2>My decks</h2>
        <p>Your five spaces for classroom practice.</p>

        <div className="saved-deck-list">
          {[1, 2, 3, 4, 5].map((number) => {
            const deck = decks[number - 1];

            return (
              <article className="saved-deck-item" key={number}>
                <div>
                  <h3>{deck?.name || `Deck ${number}`}</h3>
                  <p>
                    {deck
                      ? `${deck.cards.length} cards`
                      : "Empty"}
                  </p>
                </div>

                {deck ? (
                  <div className="saved-deck-actions">
                    <button onClick={() => presentDeck(deck.id)}>
                      Present
                    </button>
                    <button
                      onClick={() => deleteDeck(deck.id)}
                      aria-label={`Delete ${deck.name}`}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => navigate("/create")}
                  >
                    Create
                  </button>
                )}
              </article>
            );
          })}
        </div>

        <button
          className="welcome-button"
          onClick={() => navigate("/create")}
          disabled={decks.length >= 5}
        >
          Create a new deck
        </button>
      </section>
    </main>
  );
}

export default MyDecks;




