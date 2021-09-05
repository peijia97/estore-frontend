import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Typography, Grid, Button } from "@material-ui/core";
import StripesDivider from "components/atoms/StripesDivider";
import VideoPreview from "components/molecules/VideoPreview/VideoPreview";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
    position: "relative",
    overflow: "hidden",
    minHeight: `calc(100vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`
  },
  titleContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    maxWidth: "35rem",
    margin: `0 auto`
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 400,
    lineHeight: "45px",
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      lineHeight: "64px",
      marginBottom: "2rem"
    }
  },
  subtitle: {
    color: theme.palette.common.white,
    marginBottom: "2rem",
    fontWeight: 400,
    [theme.breakpoints.up("md")]: {
      marginBottom: "3rem"
    }
  },
  bodyTitle: {
    color: theme.palette.common.white,
    fontWeight: 400,
    marginBottom: "1rem"
  },
  bodySubtitle: {
    color: theme.palette.common.white,
    marginBottom: "2rem",
    width: "100%",
    maxWidth: "25rem",
    fontWeight: 400
  },
  btnStart: {
    minWidth: "14rem",
    marginBottom: "2rem"
  }
}));

const Video1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={classes.titleContainer}>
              <Typography variant="h2" className={classes.title}>
                LOREM IPSUM DOLOR SIT
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                Lorem Ipsum Dolor Sit
              </Typography>
              <Typography variant="h5" className={classes.bodyTitle}>
                LOREM IPSUM DOLOR
              </Typography>
              <Typography variant="h6" className={classes.bodySubtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, elt do
                sed eismod tempor indicsit ut labore et dorore.
              </Typography>
              <Button
                variant="contained"
                size="large"
                className={classes.btnStart}
                href="#"
              >
                START NOW
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={classes.titleContainer}>
              <VideoPreview />
            </div>
          </Grid>
        </Grid>
      </Section>
      <StripesDivider />
    </div>
  );
};

export default Video1;
