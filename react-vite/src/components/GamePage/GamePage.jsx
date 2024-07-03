import "./GamePage.css";

function GamePage() {
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="game-page">
      <div id="left-panel">
        Left Panel
        <div className="logo">Logo</div>
        <div id="score">Score</div>{" "}
        <div id="power-up-details">Power Up Details</div>
      </div>

      <div id="game-board">
        Game Board
        {/* <div>{tiles.map(key=>{
          return<div id={key}>{key}</>
        })}</div> */}
      </div>
      <div id="right-panel">
        Right Panel<div id="level">Level</div>
      </div>
    </div>
  );
}

export default GamePage;
