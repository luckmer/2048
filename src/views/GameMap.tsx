import { ArrayType } from "../hooks/Types";
import { Div } from "../css/views/Main.Style";

const GameMap = (id: number, number: string | number) => {
  const Colors: ArrayType = {
    "": "#1A1E27",
    2: "#EDEDED",
    4: "#B5EAEA",
    8: "#E1701A",
    16: "#ffcea4",
    32: "#F7A440",
    64: "#ffab6e",
    128: "#fd9982",
    256: "#ead79c",
    512: "#76DAFF",
    1024: "#beeaa5",
    2047: "#d7d4f0",
  };

  return (
    <Div key={id} id={id.toString()} Color={Colors[number]}>
      <p>{number}</p>
    </Div>
  );
};
export default GameMap;
