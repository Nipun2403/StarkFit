import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const onHover =
  "hover:underline decoration-primary-200 decoration-[3px] underline-offset-8 text-white";

function Link({ title }) {
  return <p className={onHover}>{title}</p>;
}

export default Link;
