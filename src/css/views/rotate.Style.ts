import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0%{
    opacity:0
  }

  50%{
    opacity:0.5;
  }

  75%{
    opacity:1;
  }

  90%{
    opacity:0.5;
  }
`;

const Test = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

export const Section = styled.section`
  max-width: 1800px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  width: 100%;
  height: auto;
`;

export const NavDiv = styled.div`
  padding: 20px;
  text-align: right;
`;

export const NavP = styled.p`
Font family: Roboto;
  
  font-weight:bold;
  letter-spacing: 1.2px;
  line-height: 0.8;
  a{
    cursor:pointer;
    color:#F93176;
    text-decoration:none;
  }
`;

export const HelpContainer = styled.section`
  padding-top: 5vh;
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

type Img = {
  img: string;
};

export const IMG = styled.div<Img>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-position: 0px 0px;
  background-repeat: repeat-x;
  image-rendering: -webkit-optimize-contrast;
  background-size: 100%;
  width: 100%;
  height: 20px;
  opacity: 0;
  animation: ${rotate} 2s infinite;
`;

export const Description = styled.section`
  padding: 0 20px 0 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  color: #f93176;
  &&:nth-child(2) {
    justify-content: flex-start;
  }
  div {
    text-align: center;
    min-width: 150px;
  }

  @media screen and (max-width: 540px) {
    padding-bottom: 30px;
  }
`;

export const Mobile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 540px) {
    width: 100%;
    height: 100vh;
  }
`;

export const MobileContent = styled.div`
  padding-top: 5%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MobileHeader = styled.header`
  word-break: break-word;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: #ffffff;
  border-left: 1px solid white;
  @media screen and (min-width: 540px) {
    padding-top: 10px;
    padding-left: 40px;
  }

  @media screen and (max-width: 540px) {
    padding: 20px;
    display: flex;
    align-items: center;
  }
`;

export const MobileMove = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-position: 0px 0px;
  background-repeat: repeat-x;
  animation: ${Test} 1s linear;
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  background-position-y: center;
  background-position-x: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 896px) {
    background-size: 70%;
  }

  @media screen and (max-width: 540px) {
    background-size: calc(65% - 5vw);
    image-rendering: -webkit-optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
    height: 50vh;
    width: 100%;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    min-height: 300px;
  }
`;

export const DivImg = styled.div`
  width: 100%;
  height: 100%;
`;

export const DivHeader = styled.div`
  width: 100%;
  height: auto;
`;
