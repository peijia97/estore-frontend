import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, colors } from "@material-ui/core";
import { Icon } from "components/atoms";
import { GridFeatures } from "components/organisms";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

const Features = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={12}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          data-aos="fade-up"
        >
          <GridFeatures />
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Features;
