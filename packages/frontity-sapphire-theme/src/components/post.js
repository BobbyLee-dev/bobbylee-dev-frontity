import React from 'react';
import { connect } from 'frontity';
import Link from './link';

const Post = ({ state }) => {

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  return (
    <article>
      <h2>{post.title.rendered}</h2>
      <div className="post-content" dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
    </article>
  )
}

export default connect(Post);