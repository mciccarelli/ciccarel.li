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
    --white: #FEFFFF;
    --light_grey: #D2D2D2;
    --dark_grey: #6D6D6D;
    --accent: #F8C7CC;
    --font_family_sans_serif: 'DINPro', Arial, Helvetica, sans-serif;
    --font_family_mono: 'Nitti', 'Courier New', Courier, monospace;
    --animation_delay: 2s;
    --duration: 800ms;
    --iterations: 1;
    --max_width: 960px;
    --mobile-bp: 'min-width: 500px';
  }

  ::selection {
    color: var(--black);
    background: var(--accent)
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-weight: 400;
    font-family: var(--font_family_sans_serif);
    background: var(--black);
  }

  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  p,
  li {
    font: 400 0.875rem/1.5 var(--font_family_mono);
    color: var(--white);
    text-transform: uppercase;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font: 700 1.125rem/1.5 var(--font_family_sans_serif);
    color: var(--white);
  }

  a {
    text-decoration: none;
    color: var(--white);
    display: inline-block;
    position: relative;

    &:after {
      display: block;
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 1px;
      height: 1px;
      background: var(--dark_grey);
      content: '';
      filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
      opacity: 0;
      transition: width 0.3s cubic-bezier(0.77, 0, 0.175, 1),
        opacity 0.1s linear 0.3s;
    }

    &:hover,
    &:active {
      &:after {
        width: 100%;
        filter: progid: DXImageTransform.Microsoft.Alpha(enabled=false);
        opacity: 1;
        transition-delay: 0s;
      }
    }
  }
`
