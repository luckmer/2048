import { useState, useEffect } from "react";
import MapGenerator from "../hooks/Map.hook";
import ControlMoves from "../hooks/ControlMoves";
import { HookType, mapType } from "../hooks/Types";
import { Generator } from "../hooks/Generator";
import * as Main from "../css/views/Main.Style";
import { Link } from "react-router-dom";
import GameMap from "./GameMap";

const Game = () => {
  const [points, setPoints] = useState<number>(0);
  const [off, setOff] = useState(false);
  const [gameOver, setGameOver] = useState({
    top: true,
    bottom: true,
    left: true,
    right: true,
  });
  const { map, setMap } = MapGenerator();
  const PROPS = { map, setMap, points, setPoints, gameOver, setGameOver };

  ControlMoves({ ...PROPS });

  useEffect(() => {
    const { top, bottom, left, right }: HookType = gameOver;
    if (!top && !bottom && !left && !right) {
      if (!off) setOff(true);
    }
  }, [map, gameOver, off, setMap]);

  const handleClick = () => {
    const map: mapType = Generator();
    setMap(map);
    setOff(false);
    setGameOver({
      top: true,
      bottom: true,
      left: true,
      right: true,
    });
    setPoints(0);
  };

  return (
    <Main.Main>
      <Main.Panel>
        <Main.Back>
          <div>
            <Main.P>
              <Link to="/">HOME</Link>
            </Main.P>
          </div>
        </Main.Back>
      </Main.Panel>
      <Main.GameDiv>
        <Main.GamePanel>
          <Main.GameData>
            <div onClick={handleClick}>
              <p>New Game</p>
            </div>
            <div>
              <p>Points {points}</p>
            </div>
          </Main.GameData>
          <Main.GameCreator>
            {off ? (
              <Main.GameOver>
                <h1> GAME OVER</h1>
              </Main.GameOver>
            ) : (
              map.map((el, i) => {
                const id = el.id;
                const number = el.number;
                return GameMap(id, number);
              })
            )}
          </Main.GameCreator>
        </Main.GamePanel>
      </Main.GameDiv>
    </Main.Main>
  );
};

export default Game;
