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
          <GridFeatures
            title="Extended License"
            subtitle="A pay-once license, just for you"
            priceComponent={
              <div>
                <Typography
                  variant="h3"
                  component="span"
                  style={{ fontWeight: 900 }}
                >
                  $79
                </Typography>
                <Typography component="span" variant="subtitle1">
                  / MO
                </Typography>
              </div>
            }
            features={[
              "Rich, responsive landing pages",
              "100+ styled components",
              "Flexible, simple license",
              "Speedy build tooling",
              "6 months free support included"
            ]}
            featureCheckComponent={
              <Icon
                fontIconClass="far fa-check-circle"
                fontIconColor={colors.indigo[500]}
              />
            }
            cta={
              <Button color="primary" variant="outlined" fullWidth size="large">
                Subscribe now
              </Button>
            }
            disclaimer="Fully featured 30-day free trial"
          />
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
