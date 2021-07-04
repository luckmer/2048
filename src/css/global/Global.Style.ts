import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
body{
  background-color:#1A1E27;
  user-select: none;
  -webkit-user-select: none; 
  -khtml-user-select: none;
  -moz-user-select: none; 
  -ms-user-select: none;

::-webkit-scrollbar {
    width: 0px;
  }
::-webkit-scrollbar-track {
    background-color:#1A1E27;
}
::-webkit-scrollbar-thumb {
    background-color: #f93176
  }
}
`;

export default GlobalStyle;
