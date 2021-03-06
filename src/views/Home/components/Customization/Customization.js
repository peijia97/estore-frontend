import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Button } from "@material-ui/core";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    boxShadow:
      "25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35rem"
    }
  },
  lastGrid: {
    [theme.breakpoints.up("sm")]: {
      marginTop: "40%"
    }
  }
}));

const Customization = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        label="Customization"
        title="Customize your product"
        subtitle="We aim to take care of you. Need help with installation, find a bug, or just need a clarifiction about our documentation? We'll be there to lend a helping hand."
        align="center"
        ctaGroup={[
          <Button variant="contained" color="secondary" size="large">
            Start now
          </Button>,
          <Button variant="outlined" color="secondary" size="large">
            Learn more
          </Button>
        ]}
      />
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6}>
          <Grid container justif="center" alignItems="center">
            <Image
              src="/images/illustrations/hero.png"
              alt="TheFront Company"
              className={classes.image}
              data-aos="fade-up"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            justif="center"
            alignItems="center"
            className={classes.lastGrid}
          >
            <Image
              src="/images/illustrations/dashboard-screenshot1.jpg"
              alt="TheFront Company"
              className={classes.image}
              data-aos="fade-up"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Customization.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Customization;
