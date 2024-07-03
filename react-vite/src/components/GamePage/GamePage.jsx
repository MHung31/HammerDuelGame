import "./GamePage.css";
import LeftPanel from "./LeftPanel";

function GamePage() {
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
              <div className="key-tile" id={key}>
                {key}
              </div>
            );
          })}
        </div>
      </div>
      <div id="right-panel">
        Right Panel<div id="level">Level</div>
      </div>
    </div>
  );
}

export default GamePage;
