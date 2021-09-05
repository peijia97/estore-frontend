import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { CardPlan } from "./components";
import { Typography, Grid } from "@material-ui/core";
import OpenInNewRoundedIcon from "@material-ui/icons/OpenInNewRounded";
import StripesDivider from "components/atoms/StripesDivider";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
    position: "relative",
    overflow: "hidden",
    minHeight: `calc(100vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`
  },
  externalLink: {
    fontFamily: "Roboto",
    fontWeight: 400,
    marginTop: "2rem",
    margin: `0 auto`,
    display: "flex",
    alignItems: "center",
    maxWidth: "35rem",
    "& span": {
      textTransform: "capitalize",
      color: theme.palette.common.white,
      marginRight: "0.25rem"
    },
    "& a": {
      textDecoration: "underline",
      color: theme.palette.common.white
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
    margin: `0 auto`
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
  },
  optionGrid: {
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      marginTop: "2rem"
    }
  },
  optionContainer: {
    width: "22rem",
    maxWidth: "100%",
    textAlign: "-webkit-center"
  }
}));

const ChoosePlan = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={classes.formContainer}>
              <Typography variant="h2" className={classes.title}>
                Choose Plan
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                Lorem ipsum dolor sit
              </Typography>
            </div>
          </Grid>

          <Grid container spacing={5} className={classes.optionGrid}>
            <Grid item xs={12} lg={4} className={classes.optionContainer}>
              <CardPlan />
            </Grid>
            <Grid item xs={12} lg={4} className={classes.optionContainer}>
              <CardPlan />
            </Grid>
            <Grid item xs={12} lg={4} className={classes.optionContainer}>
              <CardPlan />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={6}>
          <div className={classes.externalLink}>
            <Typography component="span">Learn more</Typography>
            <Typography component="a" href="#">
              here
            </Typography>
            <OpenInNewRoundedIcon className={classes.icon} />
          </div>
        </Grid>
      </Section>
      <StripesDivider />
    </div>
  );
};

export default ChoosePlan;
