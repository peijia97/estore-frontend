import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Form } from "./components";
import { Section } from "components/organisms";
import { Divider } from "@material-ui/core";
import { Typography, Grid } from "@material-ui/core";
import { Image } from "components/atoms";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh"
  },
  formContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    // minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
    maxWidth: 500,
    margin: `0 auto`
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
  },
  divider: {
    position: "absolute",
    width: "100%",
    bottom: 0
  },
  dividerWhite: {
    background: theme.palette.common.white,
    height: "0.2rem"
  },
  dividerPrimary: {
    background: theme.palette.primary.main,
    height: "0.3rem"
  },
  dividerSecondary: {
    background: theme.palette.secondary.main,
    height: "0.3rem"
  }
}));

const Signup = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} md={6}>
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
      <div className={classes.divider}>
        <Divider className={classes.dividerWhite} />
        <Divider className={classes.dividerSecondary} />
        <Divider className={classes.dividerWhite} />
        <Divider className={classes.dividerPrimary} />
      </div>
    </div>
  );
};

export default Signup;
