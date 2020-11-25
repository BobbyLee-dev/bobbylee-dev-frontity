import { css } from "frontity";
import cssVars from "./css-vars";
import cssReset from "./css-reset";

const globalStyles = css`
  ${cssReset}
  html {
    font: 16px/24px ${cssVars.defaultFont};
  }

  body {
    color: ${cssVars.defaultColor};
    font: 16px/24px ${cssVars.defaultFont};
    font-weight: ${cssVars.light};
    line-height: 1.9em;
    min-width: 320px;
    ${
      "" /* text-align: center; */
    }// -moz-osx-font-smoothing: grayscale;
    // -webkit-font-smoothing: antialiased;;
  }

  p {
    margin: 0 0 1em;
  }

  ul,
  ol,
  dl {
  }

  li {
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${cssVars.secondaryFont};
    color: ${cssVars.primaryColor};
    font-weight: ${cssVars.thin};
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1em;
    margin-bottom: 0.5em;
    line-height: 100%;
  }

  h1 {
    font-size: 40px;
    line-height: 1.1.em;
    @media (min-width: ${cssVars.desktop}) {
      font-size: 50px;
    }
  }

  h2 {
    font-size: 32px;
    @media (min-width: ${cssVars.desktop}) {
      font-size: 40px;
      line-height: 1.45em;
    }
  }

  h3 {
    @media (min-width: ${cssVars.desktop}) {
      font-size: 34px;
      line-height: 1.25em;
    }
  }

  h4,
  h5,
  h6 {
    @media (min-width: ${cssVars.desktop}) {
      font-size: 26px;
    }
  }

  a {
    color: ${cssVars.primaryColor};
    text-decoration: underline;
    &:focus {
      outline: none;
      text-decoration: none;
    }
  }

  section,
  main {
    padding: 20px;
    @media (min-width: ${cssVars.desktop}) {
      padding: 20px 40px;
    }
    @media (min-width: ${cssVars.full}) {
      padding: 40px calc(40px + (50vw - (${cssVars.full} / 2)));
    }
  }
`;

export default globalStyles;
