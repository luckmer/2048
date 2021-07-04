import { mapType, ElType } from "../hooks/Types";

export const UpdateMove = (map: mapType | [], Connect: string[]) => {
  return map.map((el: ElType, index: number) => {
    return {
      ...el,
      number: Connect[index],
    };
  });
};
