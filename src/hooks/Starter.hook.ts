import { mapType, TypeGenerator } from "./Types";

export const Starter = (map: mapType, RandomNumber: number[]) => {
  let Generate1 = RandomNumberGenerator(map);
  let Generate2 = RandomNumberGenerator(map);

  if (Generate1 && Generate2) {
    if (Generate2.id === Generate1.id) {
      Generate1 = RandomNumberGenerator(map);
      Generate2 = RandomNumberGenerator(map);
    }

    if (Generate2.id !== Generate1.id) {
      Generator(Generate1, RandomNumber);
      Generator(Generate2, RandomNumber);
    }
  }
};

export const Generator = (
  Generate: TypeGenerator,
  RandomNumber: number[]
): number =>
  (Generate.number =
    RandomNumber[Math.floor(Math.random() * RandomNumber.length)]);

export const RandomNumberGenerator = (map: mapType) =>
  map[Math.floor(Math.random() * map.length)];
