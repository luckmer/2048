import Game from "../views/2048";
import Help from "../views/Help";
import Back from "../views/404";
import StartPanel from "../views/StartPanel";

export const routes = [
  { path: "/", Component: StartPanel, name: "home" },
  { path: "/game", Component: Game, name: "game" },
  { path: "/help", Component: Help, name: "help" },
  { path: "*", Component: Back, name: "404" },
];
