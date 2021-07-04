export type mapType = {
  id: number;
  _id: number;
  number: string | number;
}[];

export type PropsType = {
  size: number;
  numbers: number[];
  UpdateMap: string[][];
  Update: string[][];
};

export type TypeGenerator = {
  _id: number;
  number: string | number;
  id: number;
};

export type UpdateType = {
  number: string;
  id: number;
  _id: number;
}[];

export type ObjType = {
  id: number;
  _id: number;
  number: string | number;
};

export type ElType = {
  id: number;
  _id: number;
  number: string | number;
};

export type BoardType = {
  number: string;
  id: number;
  _id: number;
}[];

export type Type = {
  map: mapType | [];
  setMap: React.Dispatch<React.SetStateAction<mapType | []>>;
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  gameOver: {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
  };
  setGameOver: React.Dispatch<
    React.SetStateAction<{
      top: boolean;
      bottom: boolean;
      left: boolean;
      right: boolean;
    }>
  >;
};

export type PRType = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  documentWidth: number;
};

export type ControlTypes = {
  map: mapType | [];
  setMap: React.Dispatch<React.SetStateAction<mapType | []>>;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  points: number;
  gameOver: {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
  };
  setGameOver: React.Dispatch<
    React.SetStateAction<{
      top: boolean;
      bottom: boolean;
      left: boolean;
      right: boolean;
    }>
  >;
};

export type ArrayType = {
  [key: string]: string;
};
export type HookType = {
  [key: string]: boolean;
};
