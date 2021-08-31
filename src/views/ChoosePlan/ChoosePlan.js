import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Typography, Grid } from "@material-ui/core";
import OpenInNewRoundedIcon from "@material-ui/icons/OpenInNewRounded";
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
  externalLink: {
    position: "absolute",
    fontFamily: "Roboto",
    fontWeight: 400,
    left: "10%",
    top: "1rem",
    display: "flex",
    alignItems: "center",
    "& span": {
      textTransform: "capitalize",
      color: theme.palette.common.white,
      marginRight: "0.25rem"
    },
    "& a": {
      textDecoration: "underline",
      color: theme.palette.common.white
    },
    [theme.breakpoints.up("md")]: {
      right: "10%",
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
      marginTop: "10%"
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
  icon: {
    color: theme.palette.common.white,
    fontSize: "1rem",
    marginLeft: "0.25rem"
  }
}));

const ChoosePlan = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.logo}>
        ESTORE
      </Typography>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.formContainer}>
              <Typography variant="h2" className={classes.title}>
                Choose Plan
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                Lorem ipsum dolor sit
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Section>
      <div className={classes.externalLink}>
        <Typography component="span">Learn more</Typography>
        <Typography component="a" href="#">
          here
        </Typography>
        <OpenInNewRoundedIcon className={classes.icon} />
      </div>
      <StripesDivider />
    </div>
  );
};

export default ChoosePlan;
