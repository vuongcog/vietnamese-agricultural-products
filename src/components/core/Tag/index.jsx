import React from "react";
import PropTypes from "prop-types";
const Tag = ({ tagName = "div", children, ...rest }) => {
  const TagProvider = tagName === "Fragment" ? <></> : tagName;

  return tagName === "Fragment" ? (
    <>{children}</>
  ) : (
    <TagProvider ddata-slot={tagName} {...rest}>
      {children}
    </TagProvider>
  );
};
Tag.propTypes = {
  tagName: PropTypes.oneOf(["div", "p", "span", "Fragment"]),
  children: PropTypes.node,
};
export default Tag;
