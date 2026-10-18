import { useNavigate } from "react-router-dom";
import DeckCreator from "../components/DeckCreator";

function CreateDeck() {
  const navigate = useNavigate();

  return (
    <main className="main-content">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to home
      </button>

      <DeckCreator />
    </main>
  );
}

export default CreateDeck;
