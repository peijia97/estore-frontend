import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {},
  divider: {
    left: 0,
    top: 0,
    minHeight: "100vh",
    height: "100%",
    position: "absolute"
  },
  dividerSecondary: {
    width: "0.5rem",
    background: theme.palette.secondary.main,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "1.5rem"
    },
    [theme.breakpoints.up("md")]: {
      width: "3rem"
    }
  }
}));

/**
 * Component to display the stripes divider
 *
 * @param {Object} props
 */
const VerticalDivider = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.divider, className)} {...rest}>
      <Divider className={classes.dividerSecondary} />
    </div>
  );
};

VerticalDivider.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default VerticalDivider;
