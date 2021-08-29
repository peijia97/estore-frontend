import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, colors } from "@material-ui/core";
import { Icon } from "components/atoms";
import { CardFeatures } from "components/organisms";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  placementGrid: {
    display: "flex"
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`
  },
  coverImage: {
    boxShadow:
      "25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500
    }
  }
}));

const Hub = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          data-aos="fade-up"
        >
          <CardFeatures />
        </Grid>
      </Grid>
    </div>
  );
};

Hub.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Hub;
