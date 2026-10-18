import { useState } from "react";

function DeckCreator() {
  const [deckName, setDeckName] = useState("");
  const [text, setText] = useState("");
  const [savedDeckId, setSavedDeckId] = useState(null);
  const [message, setMessage] = useState("");

  function createDeck() {
    const newCards = text
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    if (newCards.length === 0) {
      setMessage("Enter at least one letter, sound, or word.");
      return;
    }

    const savedDecks = JSON.parse(
      localStorage.getItem("cardTuneDecks") || "[]"
    );

    if (savedDecks.length >= 5) {
      setMessage(
        "You already have 5 saved decks. Open My decks to manage them."
      );
      return;
    }

    const newDeck = {
      id: Date.now().toString(),
      name: deckName.trim() || `Deck ${savedDecks.length + 1}`,
      cards: newCards,
    };

    savedDecks.push(newDeck);

    localStorage.setItem(
      "cardTuneDecks",
      JSON.stringify(savedDecks)
    );

    setSavedDeckId(newDeck.id);
    setMessage(`Saved ${newDeck.name} with ${newCards.length} cards.`);
  }

  function presentDeck() {
    if (!savedDeckId) return;

    window.open(
      `/present?id=${encodeURIComponent(savedDeckId)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="deck-creator">
      <h2>Create your deck</h2>
      <p>Enter one letter, sound, or word per line.</p>

      <label htmlFor="deck-name">Deck name</label>
      <input
        id="deck-name"
        className="deck-name-input"
        value={deckName}
        onChange={(event) => setDeckName(event.target.value)}
        placeholder="e.g. Deck 1"
      />

      <label htmlFor="deck-cards">Your cards</label>
      <textarea
        id="deck-cards"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          setSavedDeckId(null);
          setMessage("");
        }}
        placeholder={"sh\nch\nship\nshop"}
        rows={8}
      />

      <button className="create-button" onClick={createDeck}>
        Save deck
      </button>

      {savedDeckId && (
        <button className="present-button" onClick={presentDeck}>
          Present cards ↗
        </button>
      )}

      {message && <p className="deck-message">{message}</p>}
    </section>
  );
}

export default DeckCreator;


