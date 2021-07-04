import { Link } from "react-router-dom";
import * as _ from "../css/views/StartPanel.Style";

type typeLinks = {
  [key: string]: string;
};

const StartPanel = () => {
  const links = [
    { name: "game", id: "game" },
    { name: "help", id: "help" },
  ];

  return (
    <_.Section>
      <_.PlayButtonPanel>
        {links.map(({ name, id }: typeLinks) => (
          <Link to={() => `${name}`} key={id}>
            <_.LinkDiv>
              <span>{name}</span>
            </_.LinkDiv>
          </Link>
        ))}
      </_.PlayButtonPanel>
    </_.Section>
  );
};

export default StartPanel;
