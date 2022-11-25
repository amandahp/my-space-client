import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
    
  }
  button {
    cursor: pointer;
    text-decoration: none;
    background-color: white;
    border: none;
}
`;

export default GlobalStyle;
