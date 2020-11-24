import React from 'react';
import { connect } from 'frontity';
import Link from './link';
import List from './list';
import Post from './post';

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/page/2">More Posts</Link>
        <Link href="/lorem-ipsum">Lorem Ipsum</Link>
      </nav>
      <h1>Frontity Sapphire Theme</h1>
      <p>Current URL: {state.router.link}</p>
      <main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Post />}
      </main>
    </>
  );
}

export default connect(Root);