import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html, * {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;
  }
`;

export const theme = {
  colors: {
    primary: "#2f2f2f",
    secondary: "#1f1f1f",
    text1: "LightGray",
  },
};
