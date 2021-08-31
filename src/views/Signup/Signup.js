import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "./components";
import { Section } from "components/organisms";
import { Typography, Grid } from "@material-ui/core";
import { Image } from "components/atoms";
import StripesDivider from "components/atoms/StripesDivider";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh"
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

const Signup = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.gridContainer}>
            <div className={classes.formContainer}>
              <Typography variant="h2" className={classes.title}>
                SIGN UP NOW!
              </Typography>
              <Form />
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
      <StripesDivider />
    </div>
  );
};

export default Signup;
