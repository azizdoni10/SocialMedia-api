import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-width: 530px;
    margin: 0;
    font-family: "Inter";
    background-image: url(https://w.forfun.com/fetch/e6/e66b2398c09a239b6b438dbe86371028.jpeg);
    background-size: cover;
    z-index: 0;
    color: var(--text-color);
  }

  button,
  input {
    border: 1px solid transparent;
    outline: 0;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    
    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: var(--text-color);
    }
  }

  ._no-select {
    -webkit-touch-callout: none; //? iOS Safari
    -webkit-user-select: none; //? Safari
    -khtml-user-select: none; //? Konqueror HTML
    -moz-user-select: none; //? Old versions of Firefox
    -ms-user-select: none; //? Internet Explorer/Edge
    user-select: none; //? Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
  }
`