import { createGlobalStyle } from "styled-components";
import hogwartsexpress from "./images/hogwartsexpress.webp";

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${hogwartsexpress});
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
  
  fieldset {
    margin: 20px 0;
  }
`;
