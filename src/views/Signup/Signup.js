import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "./components";
import { Section } from "components/organisms";
import { Typography, Grid, Button, ButtonBase } from "@material-ui/core";
import { Image } from "components/atoms";
import StripesDivider from "components/atoms/StripesDivider";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh"
  },
  logo: {
    position: "absolute",
    left: "5%",
    top: "1rem",
    [theme.breakpoints.up("md")]: {
      left: "10%",
      top: "3rem"
    },
    "& .MuiTypography-root": {
      fontWeight: 400,
      color: theme.palette.common.white
    }
  },
  back: {
    position: "absolute",
    fontFamily: "Roboto",
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
    maxWidth: "35rem",
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
      right: "-45rem",
      width: "60%",
      height: "auto",
      top: "10%",
      bottom: 0,
      margin: "auto"
    }
  }
}));

const Signup = () => {
  const classes = useStyles();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <ButtonBase href="/home" className={classes.logo}>
        <Typography variant="h5">ESTORE</Typography>
      </ButtonBase>
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
      <Button
        variant="text"
        startIcon={<ChevronLeftRoundedIcon />}
        className={classes.back}
        onClick={handleBack}
      >
        Back
      </Button>
      <StripesDivider />
    </div>
  );
};

export default Signup;
