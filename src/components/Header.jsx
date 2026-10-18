import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <NavLink
        className="brand"
        to="/"
        aria-label="CardTune home"
      >
        <div className="brand-icon">CT</div>

        <div className="brand-text">
          <h1>CardTune</h1>
          <p>Fluency at your Fingertips.</p>
        </div>
      </NavLink>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/create">
          Create a deck
        </NavLink>

        <NavLink to="/decks">
          My decks
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
