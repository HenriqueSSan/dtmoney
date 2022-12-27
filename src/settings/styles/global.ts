import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --background: #f0f2f5;
    --shape: #fff;

    --blue: #5429cc;
    --blue-light: #6933ff;

    --red: #e52e4d;

    --text-body: #969cb3;
    --text-title: #363f5f;

    --white: #fff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media screen and (max-width:1080px) {
      font-size: 93.75%; // 15px
    }

    @media screen and (max-width:720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--background);

    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong{
    font-weight: 600;
  }

  body, 
  button, 
  textarea, 
  input {
    font-family:"Poppins", Arial, Helvetica, sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
