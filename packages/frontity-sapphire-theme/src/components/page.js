import React from "react";
import { connect } from "frontity";
import Link from "./link";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  return (
    <article>
      <h2>{page.title.rendered}</h2>
      <div
        className="page-content"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </article>
  );
};

export default connect(Page);
