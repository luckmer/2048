import { useEffect } from "react";
import SetRandomNumber from "./RandomBlock.hook";
import ControlHook from "./ControlHook";
import { PRType, Type } from "./Types";

const Props = () => {
  const documentWidth: number = window.screen.availWidth;
  let startX: number = 0;
  let startY: number = 0;
  let endX: number = 0;
  let endY: number = 0;
  return { startX, startY, endX, endY, documentWidth };
};

const ControlMoves = ({
  map,
  setMap,
  points,
  setPoints,
  gameOver,
  setGameOver,
}: Type) => {
  const PROPS = { map, setMap, points, setPoints, gameOver, setGameOver };
  const { moveRight, moveLeft, moveUp, moveDown } = ControlHook({ ...PROPS });
  var { startX, startY, endX, endY, documentWidth }: PRType = Props();

  const control = (e: KeyboardEvent) => {
    if (e.repeat) return;

    switch (e.keyCode) {
      case 39: {
        SetRandomNumber(map);
        moveRight();
        break;
      }
      case 37:
        SetRandomNumber(map);
        moveLeft();
        break;
      case 38:
        SetRandomNumber(map);
        moveUp();
        break;
      case 40:
        SetRandomNumber(map);
        moveDown();
        break;

      default:
        break;
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    startX = e.changedTouches[0].pageX;
    startY = e.changedTouches[0].pageY;
  };

  const controlTouchMove = (e: TouchEvent) => {
    if (e.changedTouches.length > 1) e.preventDefault();
  };

  const handleTouchEnd = (e: TouchEvent) => {
    endX = e.changedTouches[0].pageX;
    endY = e.changedTouches[0].pageY;

    let deltaX = endX - startX;
    let deltaY = endY - startY;

    const check =
      Math.abs(deltaX) < 0.07 * documentWidth &&
      Math.abs(deltaY) < 0.07 * documentWidth;

    if (!check) {
      const Move: boolean = Math.abs(deltaX) >= Math.abs(deltaY);
      if (Move) {
        if (deltaX > 0) {
          SetRandomNumber(map);
          moveRight();
        } else {
          SetRandomNumber(map);
          moveLeft();
        }
      } else {
        if (deltaY > 0) {
          SetRandomNumber(map);
          moveDown();
        } else {
          SetRandomNumber(map);
          moveUp();
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", control);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", controlTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("keydown", control);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", controlTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  });
};

export default ControlMoves;
