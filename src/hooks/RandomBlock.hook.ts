import { mapType } from "./Types";

const SetRandomNumber = (map: mapType | []) => {
  let randomNumber = Math.floor(Math.random() * map.length);
  if (randomNumber) {
    map[randomNumber].number === ""
      ? (map[randomNumber].number = 2)
      : SetRandomNumber(map);
  }
};

export default SetRandomNumber;
