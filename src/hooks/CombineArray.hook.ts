import { UpdateMove } from "./Constants.hook";
import { mapType } from "./Types";
import { BoardType } from "./Types";

import {
  GenerateMap,
  DetectRightCollision,
  SecondRotate,
  DetectLeftCollision,
  ThirdRotate,
  TopGenerator,
  FirstRotate,
} from "./Helper.Hook";

type PropsType = {
  map: mapType | [];
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  points: number;
};

export const CombineArray = (arr: string[][]): string[] => {
  return arr.reduce((array: string[], isArray: string[]) => {
    return array.concat(
      Array.isArray(isArray) ? isArray : array.concat(isArray)
    );
  }, []);
};

export const boardMoved = (original: mapType, updated: BoardType) =>
  JSON.stringify(updated) !== JSON.stringify(original);

export const MergeRightBase = ({ map, setPoints, points }: PropsType) => {
  const UpdateMap = GenerateMap(map);

  let updateMap = UpdateMap as number[][] | string[][];
  const POINTS = { UpdateMap, updateMap, setPoints, points };
  const UpdateResult = DetectRightCollision({ ...POINTS });
  const View = UpdateResult as string[][];

  const Update = SecondRotate(View);
  const Connect = CombineArray(Update);
  const MoveResult = UpdateMove(map, Connect);

  return MoveResult;
};

export const MergeLeftBase = ({ map, setPoints, points }: PropsType) => {
  const UpdateMap = GenerateMap(map);

  const updateMap = UpdateMap as string[][] | number[][];
  const len: number = UpdateMap.length;

  const POINTS = { len, updateMap, setPoints, points };

  const updateResult = DetectLeftCollision({ ...POINTS });
  const Update = ThirdRotate(len, updateResult);
  const Connect = CombineArray(Update);
  const MoveResult = UpdateMove(map, Connect);

  return MoveResult;
};

export function MergeTopBase({ map, setPoints, points }: PropsType) {
  let result: string[][] = [];

  const UpdateMap = TopGenerator(map);

  let updateMap = UpdateMap as number[][] | string[][];
  const POINTS = { UpdateMap, updateMap, setPoints, points };

  const updateResult = DetectRightCollision({ ...POINTS });
  const UpdateResult = FirstRotate(updateResult);

  const View = UpdateResult as string[][];

  for (let i = 0; i < View.length; i++) {
    const row = [];
    for (let j = 0; j < View[i].length; j++) {
      const curr = View[j][i];
      curr === "" ? row.unshift(curr) : row.push(curr);
    }
    result.push(row);
  }

  const updateRotate = FirstRotate(result);
  const Connect = CombineArray(updateRotate as string[][]);
  const MoveResult = UpdateMove(map, Connect);

  return MoveResult;
}

export const MergeBottomBase = ({ map, setPoints, points }: PropsType) => {
  const UpdateMap = TopGenerator(map);

  const len: number = UpdateMap.length;
  const View = UpdateMap as string[][];
  const Update = SecondRotate(View);

  const updateMap = Update as string[][] | number[][];
  const POINTS = { len, updateMap, setPoints, points };

  const updateResult = DetectLeftCollision({ ...POINTS });
  const result = SecondRotate(updateResult);
  const rotateUpdate = FirstRotate(result);

  const Rotate = rotateUpdate.reverse();

  const Connect = CombineArray(Rotate as string[][]);
  const MoveResult = UpdateMove(map, Connect);

  return MoveResult;
};
