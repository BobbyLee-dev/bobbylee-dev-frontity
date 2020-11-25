import React from "react";
import { connect, Global, css, styled } from "frontity";
import Link from "./link";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          html {
            font-family: sans-serif;
            body {
              margin: 0;
            }
          }
        `}
      />
      <Header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/page/2">More Posts</Link>
          <Link href="/lorem-ipsum">Lorem Ipsum</Link>∏
        </nav>
        <h1>Frontity Sapphire Theme</h1>
      </Header>
      <p>Current URL: {state.router.link}</p>
      <main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Page />}
      </main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  border-bottom: 2px solid #20232a;
  padding: 1em;
`;
