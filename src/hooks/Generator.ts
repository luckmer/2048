import { Starter } from "./Starter.hook";
import { PROPS } from "./Props.hook";
import { mapType } from "./Types";

export const Generator = () => {
  const RandomNumber = [
    PROPS.numbers[Math.floor(Math.random() * PROPS.numbers.length)],
    PROPS.numbers[Math.floor(Math.random() * (PROPS.numbers.length - 2))],
  ];

  const map: mapType = Array(PROPS.size)
    .fill({})
    .map((_, i) => {
      return {
        id: i,
        _id: i,
        number: "",
      };
    });

  Starter(map, RandomNumber);
  return map;
};
