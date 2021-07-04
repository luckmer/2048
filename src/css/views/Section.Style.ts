import styled from "styled-components";

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
  color:#F93176;
  font-weight:bold;
  letter-spacing: 1.2px;
  line-height: 0.8;
  cursor:pointer;

`;
export const HelpContainer = styled.section`
  padding-top: 5vh;
  width: 100%;
  height: 100%;
  display: flex;
`;
export const IMG = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  background-size: 100%;
  width: 100%;
  height: 20px;
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
`;
export const Mobile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  padding-top: 10px;
  padding-left: 40px;
`;
export const MobileMove = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  background-position-y: center;
  background-position-x: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 896px) {
    background-size: calc(70%);
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
