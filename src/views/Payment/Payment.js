import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Form } from "./components";
import { Typography, Grid, ButtonBase } from "@material-ui/core";
import VerticalDivider from "components/atoms/VerticalDivider";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import Summary from "./components/Summary";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.common.white,
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh"
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
  breadcrumbs: {
    display: "flex",
    alignItems: "center",
    marginTop: "2rem",
    marginBottom: "1rem",
    "& span": {
      fontWeight: 400
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: "2rem"
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
      marginTop: "2rem"
    }
  },
  title: {
    fontWeight: 400,
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: "2rem"
    }
  },
  summaryContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }
}));

const Payment = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase href="/home" className={classes.logo}>
        <Typography variant="h5" color="primary">
          ESTORE
        </Typography>
      </ButtonBase>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={classes.formContainer}>
              <span className={classes.breadcrumbs}>
                <Typography variant="h6" color="primary" component="span">
                  Lorem ipsum
                </Typography>
                <ChevronRightRoundedIcon color="primary" />
                <Typography variant="h6" component="span">
                  Payment
                </Typography>
              </span>
              <Typography
                variant="h4"
                color="primary"
                className={classes.title}
              >
                HELLO, [NAME]!
              </Typography>
              <Form />
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div
              className={clsx(classes.formContainer, classes.summaryContainer)}
            >
              <Summary />
            </div>
          </Grid>
        </Grid>
      </Section>
      <VerticalDivider />
    </div>
  );
};

export default Payment;
