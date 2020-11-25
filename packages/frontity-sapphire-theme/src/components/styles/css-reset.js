import { css } from "frontity";

const cssReset = css`
  * {
    -moz-box-sizing: border-box; /* Firefox 1, probably can drop this */
    -webkit-box-sizing: border-box; /* Safari 3-4, also probably droppable */
    box-sizing: border-box; /* Everything else */
  }
  html {
    color: pink;
  }
  body {
    margin: 0;
  }
  ${
    "" /* pre {
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
  } */
  }
  img,
  svg,
  video {
    max-width: 100%;
    height: auto;
  }
`;

export default cssReset;
