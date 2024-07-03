import "./HomePage.css";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage">
      <div>Homepage</div>
      <NavLink to={"/game"} className="start-game">
        Start Game
      </NavLink>
    </div>
  );
}

export default HomePage;
