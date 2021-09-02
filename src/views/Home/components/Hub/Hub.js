import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { CardFeatures } from "components/organisms";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

const Hub = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container>
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
