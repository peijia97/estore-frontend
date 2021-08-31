import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {},
  divider: {
    position: "absolute",
    width: "100%",
    bottom: 0
  },
  dividerWhite: {
    background: theme.palette.common.white,
    height: "0.2rem"
  },
  dividerPrimary: {
    background: theme.palette.primary.main,
    height: "0.3rem"
  },
  dividerSecondary: {
    background: theme.palette.secondary.main,
    height: "0.3rem"
  }
}));

/**
 * Component to display the stripes divider
 *
 * @param {Object} props
 */
const StripesDivider = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.divider, className)} {...rest}>
      <Divider className={classes.dividerWhite} />
      <Divider className={classes.dividerSecondary} />
      <Divider className={classes.dividerWhite} />
      <Divider className={classes.dividerPrimary} />
    </div>
  );
};

StripesDivider.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default StripesDivider;
