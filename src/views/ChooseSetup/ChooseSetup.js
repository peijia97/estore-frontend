import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Typography, Grid, Button } from "@material-ui/core";
import { Image } from "components/atoms";
import StripesDivider from "components/atoms/StripesDivider";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh"
  },
  logo: {
    position: "absolute",
    color: theme.palette.common.white,
    fontWeight: 400,
    left: "5%",
    top: "1rem",
    [theme.breakpoints.up("md")]: {
      left: "10%",
      top: "3rem"
    }
  },
  back: {
    position: "absolute",
    fontFamily: "Roboto",
    textDecoration: "underline",
    textTransform: "capitalize",
    color: theme.palette.common.white,
    fontWeight: 400,
    right: "5%",
    top: "1rem",
    [theme.breakpoints.up("md")]: {
      right: "10%",
      top: "auto",
      bottom: "3rem"
    }
  },
  gridContainer: {
    zIndex: 2
  },
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    // minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`,
    [theme.breakpoints.up("lg")]: {
      marginTop: "10%"
    }
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 400,
    marginBottom: "2rem"
  },
  displayImage: {
    top: "2rem",
    bottom: 0,
    left: "1rem",
    right: 0,
    width: "125%",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      top: "5rem",
      width: "110%"
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      right: "-35rem",
      width: "70%",
      height: "auto",
      top: "10%",
      bottom: 0,
      margin: "auto"
    }
  }
}));

const ChooseSetup = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.logo}>
        ESTORE
      </Typography>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.gridContainer}>
            <div className={classes.formContainer}>
              <Typography variant="h2" className={classes.title}>
                Choose Plan
              </Typography>
            </div>
          </Grid>
          <Image
            className={classes.displayImage}
            src={`${process.env.PUBLIC_URL}/images/illustrations/signup.png`}
            alt="signup"
            lazy={false}
          />
        </Grid>
      </Section>
      <Button variant="text" className={classes.back}>
        Back
      </Button>
      <StripesDivider />
    </div>
  );
};

export default ChooseSetup;
