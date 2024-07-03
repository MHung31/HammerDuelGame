import "./GamePage.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { useEffect } from "react";

function GamePage() {
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key;
      console.log(key);
    };
    document.addEventListener("keydown", handleKey, true);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  });

  return (
    <div className="game-page">
      <div id="left-panel">
        <LeftPanel />
      </div>

      <div id="game-board">
        Game Board
        <div id="game-keys">
          {tiles.map((key) => {
            return (
              <div className="key-tile" key={key}>
                {key}
              </div>
            );
          })}
        </div>
      </div>
      <div id="right-panel">
        <RightPanel />
      </div>
    </div>
  );
}

export default GamePage;
