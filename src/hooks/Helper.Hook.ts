import { mapType } from "./Types";

type PointsType = {
  UpdateMap: string[][];
  updateMap: string[][] | number[][];
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  points: number;
};

type LeftType = {
  len: number;
  updateMap: string[][] | number[][];
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  points: number;
};

export const FirstRotate = (array: string[][] | number[][]) => {
  const displayResult: string[][] = [];
  for (let j = array.length - 1; j >= 0; j--) {
    let row: (string | number)[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
      row.unshift(array[i][j]);
    }
    displayResult.push(row as string[]);
  }
  return displayResult;
};

export const DetectRightCollision = ({
  UpdateMap,
  updateMap,
  setPoints,
  points,
}: PointsType) => {
  for (let i = 0; i < UpdateMap.length; i++) {
    for (let j = UpdateMap[i].length - 1; j >= 0; j--) {
      if (updateMap[i][j] > 0 && UpdateMap[i][j] === UpdateMap[i][j - 1]) {
        const Calc = UpdateMap[i][j] + UpdateMap[i][j - 1];
        setPoints((points) => points + Number(Calc));
        UpdateMap[i][j] = Calc;
        UpdateMap[i][j - 1] = "";
      }
    }
  }
  return updateMap;
};

export const DetectLeftCollision = ({
  len,
  updateMap,
  setPoints,
  points,
}: LeftType) => {
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const curr = updateMap[i][j];
      const prev = updateMap[i][j + 1];
      if (curr > 0 && curr === prev) {
        const Calc = (updateMap[i][j] as number) * 2;
        setPoints((points) => points + Number(Calc));
        updateMap[i][j] = Calc;
        updateMap[i][j + 1] = "";
      }
    }
  }

  return updateMap as string[][];
};

export const GenerateMap = (map: mapType) => {
  const size: number = 16;
  const UpdateMap: string[][] = [];
  for (let i = 0; i < size; i++) {
    if (map[i]) {
      const Grid: number[] = i % 4 === 0 ? [i, i + 1, i + 2, i + 3] : [];
      const FillEmpty: string[] = GridFinderCreator(map, Grid);
      if (i % 4 === 0) UpdateMap.push(FillEmpty);
    }
  }
  return UpdateMap;
};

export const SecondRotate = (View: string[][]) => {
  const Update: string[][] = [];
  for (let i = 0; i < View.length; i++) {
    const result = [];
    for (let j = 0; j < View[i].length; j++) {
      const obj = View[i][j];
      obj === "" ? result.unshift(obj) : result.push(obj);
    }
    Update.push(result);
  }
  return Update;
};

export const ThirdRotate = (len: number, UpdateMap: string[][]) => {
  const Update: string[][] = [];
  for (let i = 0; i < len; i++) {
    const array = [];
    for (let j = UpdateMap[i].length - 1; j >= 0; j--) {
      const cur = UpdateMap[i][j];
      cur === "" ? array.push(cur) : array.unshift(cur);
    }
    Update.push(array);
  }
  return Update;
};

export const TopGenerator = (map: mapType | []) => {
  const size: number = 4;
  let UpdateMap: string[][] = [];

  for (let i = 0; i < size; i++) {
    if (map[i]) {
      const Grid: number[] = [i, i + size, i + size * 2, i + size * 3];
      const FillEmpty: string[] = GridFinderCreator(map, Grid);
      UpdateMap.push(FillEmpty);
    }
  }
  return UpdateMap;
};

const GridFinderCreator = (map: mapType | [], Grid: number[]) => {
  const Find: (string | number)[] = map
    .filter((item) => Grid.includes(item.id))
    .map(({ number }) => number)
    .filter((num) => num);

  const Fill = 4 - Find.length;
  const FillEmpty: string[] = Array(Fill).fill("").concat(Find);

  return FillEmpty;
};
