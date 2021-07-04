import styled, { keyframes } from "styled-components";

interface Color {
  Color: string;
}

const Test = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

export const Main = styled.main`
  max-width: 1500px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Board = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  order: 1;
  width: 450px;
  height: 450px;
  padding: 5px;
  background-color: #baa;
  border-radius: 7px;
  outline: none;
  position: relative;
`;

export const Div = styled.div<Color>`
  animation: ${Test} 2s linear;
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    display: none;
  }
  background-color: ${({ Color }) => Color};
  p {
    background: none;
    color: ${({ Color }) => Color};
    mix-blend-mode: difference;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 14vh;
  width: 17vw;
  max-width: 100px;
  max-height: 100px;
  flex: 19%;
  margin: 5px;
  line-height: 90px;
  font-size: 55px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  font-family: "Clear Sans";
  @media screen and (max-width: 280px) {
    height: 22vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 8vw;
  }
`;

export const P = styled.p`
Font family: Roboto;
  font-weight:bold;
  letter-spacing: 1.2px;
  line-height: 0.8;
  cursor:pointer;
  a{
    color:#F93176;
    text-decoration:none;
  }
`;

export const Panel = styled.section`
  width: 100%;
  height: auto;
`;
export const GameDiv = styled.div`
  width: 100%;
  height: 100%;
`;
export const Back = styled.div`
  padding: 20px;
  text-align: right;
`;

export const GamePanel = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    display: none;
  }

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const GameCreator = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
export const GameData = styled.div`
  animation: ${Test}1s linear;
  margin: 10px;
  @media screen and (min-width: 355px) {
    padding: 0 10px 0 10px;
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    width: 100%;
    div {
      cursor: pointer;
      text-align: center;
      padding: 10px 40px 10px 40px;
      border-bottom: 1px solid #f7318b;
      border-top: 1px solid #f7318b;
      border-radius: 3px;
      text-align: left;
      transition: 0.5s;

      &:hover {
        background-color: #f7318b;
        color: #fff;
      }
    }
    label,
    p {
      padding: 2px;
      background: none;
      color: #fff;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 355px) {
    padding: 0 10px 0 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border-radius: 0;
    div {
      text-align: center;
      padding: 10px 40px 10px 40px;
      border-bottom: 1px solid #f7318b;
      border-top: 1px solid #f7318b;
      text-align: left;
      margin: 5px;
    }
    label,
    p {
      cursor: pointer;
      word-break: break-all;
      padding: 2px;
      background: none;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const GameOver = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  word-break: break-word;
  color: #fff;
  h1 {
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #f7318b;
    border-top: 1px solid #f7318b;
  }
`;
