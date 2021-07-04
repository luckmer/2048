import { useState, useEffect } from "react";
import { mapType } from "./Types";
import { Generator } from "./Generator";

const Map = () => {
  const [map, setMap] = useState<mapType | []>([]);

  useEffect(() => {
    const map: mapType = Generator();
    setMap(map);
  }, []);

  return { map, setMap };
};

export default Map;
