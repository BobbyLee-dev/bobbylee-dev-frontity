import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Link from "./link";
import List from "./list";
import Post from "./post";
import Page from "./page";
import cssVars from "./styles/css-vars";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          html {
            font-family: sans-serif;
            background-color: ${cssVars.primaryColor};
            body {
              margin: 0;
            }
          }
        `}
      />
      <Head>
        <title>Hi lol</title>
      </Head>
      <Header>
        {state.theme.isMenuOpen ? (
          <>
            <button onClick={actions.theme.closeMenu}>Close</button>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/page/2">More Posts</Link>
              <Link href="/lorem-ipsum">Lorem Ipsum</Link>∏
            </nav>
          </>
        ) : (
          <button onClick={actions.theme.openMenu}>Open</button>
        )}

        <h1>Frontity Sapphire Theme</h1>
      </Header>
      <p>Current URL: {state.router.link}</p>
      <main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Page />}
        {data.isHome && <div>home page lol</div>}
      </main>
    </>
  );
};

export default connect(Root);

const Header = styled.header`
  border-bottom: 2px solid #20232a;
  padding: 1em;
`;
