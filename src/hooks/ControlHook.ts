import { useCallback, useMemo } from "react";
import { mapType, ControlTypes } from "./Types";
import {
  MergeRightBase,
  boardMoved,
  MergeLeftBase,
  MergeTopBase,
  MergeBottomBase,
} from "./CombineArray.hook";

function ControlHook({
  map,
  setMap,
  setPoints,
  points,
  gameOver,
  setGameOver,
}: ControlTypes) {
  const PROPS = useMemo(
    () => Props(map, setPoints, points),
    [map, setPoints, points]
  );

  const moveRight = useCallback(() => {
    const MoveResult = MergeRightBase({ ...PROPS });

    if (MoveResult.length > 0) {
      setGameOver({
        ...gameOver,
        right: boardMoved(map, MoveResult) === false ? false : true,
      });

      if (boardMoved(map, MoveResult)) setMap([...MoveResult]);
    }
  }, [map, setMap, PROPS, gameOver, setGameOver]);

  const moveLeft = useCallback(() => {
    const MoveResult = MergeLeftBase({ ...PROPS });

    if (MoveResult.length > 0) {
      setGameOver({
        ...gameOver,
        left: boardMoved(map, MoveResult) === false ? false : true,
      });

      if (boardMoved(map, MoveResult)) setMap([...MoveResult]);
    }
  }, [map, setMap, PROPS, gameOver, setGameOver]);

  const moveUp = useCallback(() => {
    const MoveResult = MergeTopBase({ ...PROPS });

    if (MoveResult.length > 0) {
      setGameOver({
        ...gameOver,
        top: boardMoved(map, MoveResult) === false ? false : true,
      });

      if (boardMoved(map, MoveResult)) setMap([...MoveResult]);
    }
  }, [map, setMap, PROPS, gameOver, setGameOver]);

  const moveDown = useCallback(() => {
    const MoveResult = MergeBottomBase({ ...PROPS });

    if (MoveResult.length > 0) {
      setGameOver({
        ...gameOver,
        bottom: boardMoved(map, MoveResult) === false ? false : true,
      });

      if (boardMoved(map, MoveResult)) setMap([...MoveResult]);
    }
  }, [map, setMap, PROPS, gameOver, setGameOver]);

  return { moveRight, moveLeft, moveUp, moveDown };
}

export default ControlHook;

const Props = (
  map: mapType | [],
  setPoints: React.Dispatch<React.SetStateAction<number>>,
  points: number
) => {
  return { map, setPoints, points };
};
