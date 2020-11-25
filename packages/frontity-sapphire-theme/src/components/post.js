import React from "react";
import { connect } from "frontity";
import Link from "./link";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <article>
      <h2>{post.title.rendered}</h2>
      <Html2React html={post.content.rendered} className="post-content" />
    </article>
  );
};

export default connect(Post);
