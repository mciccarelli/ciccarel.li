import css from 'styled-jsx/css'

export default css`
  @font-face {
    font-family: 'DINPro';
    src: url('../static/fonts/DINPro-Light.woff2') format('woff2');
    src: url('../static/fonts/DINPro-Light.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'DINPro';
    src: url('../static/fonts/DINPro-Regular.woff2') format('woff2');
    src: url('../static/fonts/DINPro-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'DINPro';
    src: url('../static/fonts/DINPro-Medium.woff2') format('woff2');
    src: url('../static/fonts/DINPro-Medium.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'DINPro';
    src: url('../static/fonts/DINPro-Bold.woff2') format('woff2');
    src: url('../static/fonts/DINPro-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nitti';
    src: url('../static/fonts/NittiPX-Normal.woff2') format('woff2');
    src: url('../static/fonts/NittiPX-Normal.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --black: #070707;
    --white: #feffff;
    --lightGrey: #d2d2d2;
    --darkGrey: #6d6d6d;
    --accent: #ef6807;
    --fontFamilySansSerif: 'DINPro', Arial, Helvetica, sans-serif;
    --fontFamilyMono: 'Nitti', 'Courier New', Courier, monospace;
    --animationDelay: 1.5s;
    --duration: 800ms;
    --iterations: 1;
    --transitionSpeed: 400ms;
    --maxWidth: 960px;
    --mobileBp: '(min-width: 500px)';
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  body {
    background: var(--black);
    color: var(--white);
  }

  p,
  li {
    font: 400 0.875rem/1.5 var(--fontFamilyMono);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font: 700 1.125rem/1.2 var(--fontFamilySansSerif);
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  & ::selection {
    color: var(--white);
    background: var(--accent);
  }
`
