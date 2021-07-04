import line from "../img/Line_1.png";
import mobile from "../img/mobile.png";
import computer from "../img/pc.png";
import * as _ from "../css/views/rotate.Style";
import { Link } from "react-router-dom";

const Help = () => {
  const content = [
    {
      header: "MOBILE",
      desc: "to play on a mobile device, slide your finger across the screen",
      img: line,
      move: mobile,
    },
    {
      header: "COMPUTER",
      desc: "to play on the computer use the arrows on the keyboard ",
      img: line,
      move: computer,
    },
  ];

  return (
    <_.Section>
      <_.Nav>
        <_.NavDiv>
          <div>
            <_.NavP>
              <Link to="/">HOME</Link>
            </_.NavP>
          </div>
        </_.NavDiv>
      </_.Nav>
      <_.Description>
        <div>
          <h1>HOW TO PLAY</h1>
          <label>
            <_.IMG img={line} />
          </label>
        </div>
      </_.Description>
      <_.HelpContainer id="here">
        {content.map((el, i) => (
          <_.Mobile key={i}>
            <_.Description>
              <div>
                <h1>{el.header}</h1>
                <label>
                  <_.IMG img={line} />
                </label>
              </div>
            </_.Description>
            <_.MobileContent>
              <_.DivHeader>
                <_.MobileHeader>{el.desc}</_.MobileHeader>
              </_.DivHeader>
              <_.DivImg>
                <_.MobileMove img={el.move} />
              </_.DivImg>
            </_.MobileContent>
          </_.Mobile>
        ))}
      </_.HelpContainer>
    </_.Section>
  );
};

export default Help;
