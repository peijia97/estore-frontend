import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Typography, Grid, Button } from "@material-ui/core";
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
    textTransform: "capitalize",
    color: theme.palette.common.white,
    fontWeight: 400,
    right: "5%",
    top: "1rem",
    [theme.breakpoints.up("md")]: {
      right: "auto",
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
    maxWidth: 500,
    margin: `0 auto`,
    [theme.breakpoints.up("lg")]: {
      marginTop: "3rem"
    }
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 400,
    marginBottom: "1rem"
  },
  subtitle: {
    color: theme.palette.common.white,
    fontWeight: 400,
    marginBottom: "2rem"
  },
  optionGrid: {
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      marginTop: "3rem"
    }
  },
  optionContainer: {
    textAlign: "center",
    margin: "2rem 0"
  },
  optionTitle: {
    color: theme.palette.common.white,
    fontWeight: 400,
    marginBottom: "1rem"
  },
  optionSubtitle: {
    color: theme.palette.common.white,
    maxWidth: "18rem",
    fontWeight: 400,
    lineHeight: "28px",
    margin: "auto",
    marginBottom: "1rem"
  },
  centerDivider: {
    position: "absolute",
    left: 0,
    right: 0,
    margin: "auto",
    height: "100%",
    width: "1rem",
    textAlign: "-webkit-center",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      height: "auto",
      bottom: 0,
      top: 0
    }
  },
  divider: {
    background: theme.palette.common.white,
    width: "20rem",
    maxWidth: "100%",
    height: "0.15rem",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.up("lg")]: {
      width: "0.15rem",
      height: "100%"
    }
  },
  dividerText: {
    color: theme.palette.common.white,
    background: theme.palette.secondary.main,
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    height: "fit-content",
    width: "fit-content",
    left: 0,
    right: 0,
    padding: "1rem"
  },
  btnStart: {
    minWidth: "11rem"
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
          <Grid item xs={12} lg={6}>
            <div className={classes.formContainer}>
              <Typography variant="h2" className={classes.title}>
                Choose Setup
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                Lorem ipsum dolor sit
              </Typography>
            </div>
          </Grid>
          <Grid container className={classes.optionGrid}>
            <Grid item xs={12} lg={6} className={classes.optionContainer}>
              <Typography variant="h5" className={classes.optionTitle}>
                LOREM IPSUM 1
              </Typography>
              <Typography variant="body1" className={classes.optionSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </Typography>
              <Button
                variant="contained"
                size="large"
                className={classes.btnStart}
              >
                START NOW
              </Button>
            </Grid>
            <div className={classes.centerDivider}>
              <div className={classes.divider}></div>
              <Typography variant="h6" className={classes.dividerText}>
                Or
              </Typography>
            </div>
            <Grid item xs={12} lg={6} className={classes.optionContainer}>
              <Typography variant="h5" className={classes.optionTitle}>
                LOREM IPSUM 2
              </Typography>
              <Typography variant="body1" className={classes.optionSubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </Typography>
              <Button
                variant="contained"
                size="large"
                className={classes.btnStart}
              >
                START NOW
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Button
        variant="text"
        startIcon={<ChevronLeftRoundedIcon />}
        className={classes.back}
      >
        Back
      </Button>
      <StripesDivider />
    </div>
  );
};

export default ChooseSetup;
