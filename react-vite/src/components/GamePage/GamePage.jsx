import "./GamePage.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import { useEffect, useState } from "react";

function GamePage() {
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  let oneTimeout;
  let twoTimeout;
  let threeTimeout;
  let fourTimeout;
  let fiveTimeout;
  let sixTimeout;
  let sevenTimeout;
  let eightTimeout;
  let nineTimeout;

  useEffect(() => {
    const handleKey = (e) => {
      let key = e.key;
      if (key === "1" && !one) {
        setOne(true);
        clearTimeout(oneTimeout);
        oneTimeout = setTimeout(() => setOne(false), 1000);
      }
      if (key === "2") {
        setTwo(true);
        clearTimeout(twoTimeout);
        twoTimeout = setTimeout(() => setOne(false), 1000);
      }
      if (key === "3") {
        setThree(true);
        clearTimeout(threeTimeout);
        threeTimeout = setTimeout(() => setOne(false), 1000);
      }
      if (key === "4") {
        setFour(true);
        clearTimeout(fourTimeout);
        fourTimeout = setTimeout(() => setOne(false), 1000);
      }
      if (key === "5") {
        setFive(true);
        clearTimeout(fiveTimeout);
        fiveTimeout = setTimeout(() => setOne(false), 1000);
      }
      if (key === "6") {
        setSix(true);
        clearTimeout(sixTimeout);
        sixTimeout = setTimeout(() => setOne(false), 1000);
      }
      if (key === "7") {
        setSeven(true);
        clearTimeout(sevenTimeout);
        sevenTimeout = setTimeout(() => setOne(false), 1000);
        () => setSeven(false), 1000;
      }
      if (key === "8") {
        setEight(true);
        clearTimeout(eightTimeout);
        eightTimeout = setTimeout(() => setOne(false), 1000);
      }
      if (key === "9") {
        setNine(true);
        clearTimeout(nineTimeout);
        nineTimeout = setTimeout(() => setOne(false), 1000);
      }
    };
    document.addEventListener("keyup", handleKey, true);

    return () => {
      document.removeEventListener("keyup", handleKey);
    };
  }, []);

  return (
    <div className="game-page">
      <div id="left-panel">
        <LeftPanel />
      </div>
      <div id="game-board">
        Game Board
        <div id="game-keys">
          <div className="key-tile" id={`seven-${seven}`}>
            7
          </div>
          <div className="key-tile" id={`eight-${eight}`}>
            8
          </div>
          <div className="key-tile" id={`nine-${nine}`}>
            9
          </div>
          <div className="key-tile" id={`four-${four}`}>
            4
          </div>
          <div className="key-tile" id={`five-${five}`}>
            5
          </div>
          <div className="key-tile" id={`six-${six}`}>
            6
          </div>
          <div className="key-tile" id={`one-${one}`}>
            1
          </div>
          <div className="key-tile" id={`two-${two}`}>
            2
          </div>
          <div className="key-tile" id={`three-${three}`}>
            3
          </div>
        </div>
      </div>
      <div id="right-panel">
        <RightPanel />
      </div>
    </div>
  );
}

export default GamePage;
