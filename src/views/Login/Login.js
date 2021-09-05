import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "./components";
import { Section } from "components/organisms";
import { Typography, Grid, Button, ButtonBase } from "@material-ui/core";
import { Image } from "components/atoms";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.common.white,
    position: "relative",
    overflow: "hidden",
    minHeight: `calc(100vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`
  },
  logo: {
    position: "absolute",
    fontWeight: 400,
    left: "5%",
    top: "1rem",
    [theme.breakpoints.up("md")]: {
      left: "10%",
      top: "3rem"
    }
  },
  gridContainer: {
    zIndex: 2
  },
  back: {
    position: "absolute",
    fontFamily: "Roboto",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    fontWeight: 400,
    right: "5%",
    top: "1rem",
    [theme.breakpoints.up("lg")]: {
      left: "10%",
      top: "auto",
      bottom: "3rem"
    }
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
      marginTop: "8%",
      marginLeft: 0
    }
  },
  title: {
    fontWeight: 400,
    marginBottom: "1rem"
  },
  subtitle: {
    fontWeight: 500,
    marginBottom: "2rem"
  },
  rightContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    background: theme.palette.secondary.main,
    height: "100%",
    width: "50vw",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  displayImage: {
    top: "6rem",
    bottom: 0,
    left: "1rem",
    right: 0,
    width: "125%",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      top: "8rem",
      width: "110%"
    },
    [theme.breakpoints.up("lg")]: {
      position: "absolute",
      right: "-45rem",
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

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <ButtonBase href="/home" className={classes.logo}>
        <Typography variant="h5" color="primary">
          ESTORE
        </Typography>
      </ButtonBase>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} lg={6} className={classes.gridContainer}>
            <div className={classes.formContainer}>
              <Typography
                variant="h4"
                color="primary"
                className={classes.title}
              >
                SIGN IN
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                Welcome back!
              </Typography>
              <Form />
            </div>
          </Grid>
          <div className={classes.rightContainer}></div>
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
    </div>
  );
};

export default Signup;
