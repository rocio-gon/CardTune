import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateDeck from "./pages/CreateDeck";
import Present from "./pages/Present";
import MyDecks from "./pages/MyDecks";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateDeck />} />
        <Route path="/present" element={<Present />} />
        <Route path="/decks" element={<MyDecks />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
