import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const commonStyles = {
  margin: "0 auto",
  padding: "0 1rem"
};

const styles = {
  normal: {
    ...commonStyles,
    maxWidth: "1024px"
  },

  small: {
    ...commonStyles,
    maxWidth: "720px"
  }
};

function Container({ classes, children, size, className }) {
  return <div className={classes[size] + " " + className}>{children}</div>;
}

Container.defaultProps = {
  size: "normal"
};

Container.propsType = {
  size: PropTypes.string
};

export default withStyles(styles)(Container);
