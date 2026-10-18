import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="welcome-section">
      <span className="welcome-label">
        YOUR CLASSROOM TOOLKIT
      </span>

      <h2>
        Learning, one <span>card</span> at a time.
      </h2>

      <p className="welcome-description">
        Create simple, engaging flashcards for your next
        small-group or whole-class lesson.
      </p>

      <button
        className="welcome-button"
        onClick={() => navigate("/create")}
      >
        Create a deck <span aria-hidden="true">↗</span>
      </button>

      <div className="feature-grid" id="how-it-works">
        <article className="feature-card">
          <div className="feature-icon">✳</div>
          <h3>Quick deck</h3>
          <p>
            Type or paste your letters, words, or phrases.
            Your cards are ready in seconds.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">↔</div>
          <h3>Present & practice</h3>
          <p>
            Move through your cards one at a time
            during your lessons.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Home;
