function Flashcard({ cards, currentIndex, onNext, onPrevious }) {
  const currentCard = cards[currentIndex];

  if (!currentCard) return null;

  return (
    <section className="flashcard">
      <div className="card-top">
        <span>LEARNING DECK</span>
        <span className="card-count">
          {currentIndex + 1} / {cards.length}
        </span>
      </div>

      <div className="card-content">
        <h2>{currentCard}</h2>
      </div>

      <div className="card-controls">
        <button onClick={onPrevious} disabled={currentIndex === 0}>
          Previous
        </button>

        <button
          onClick={onNext}
          disabled={currentIndex === cards.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Flashcard;