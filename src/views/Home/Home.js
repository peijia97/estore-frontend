import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { Section } from "components/organisms";
import { Hero, Hub, Features, Testimonials } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%",
    background: theme.palette.background.default
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5)
    }
  },
  sectionNoPaddingTop: {
    paddingTop: 0
  },
  dividerPrimary: {
    background: theme.palette.primary.main,
    height: "0.25rem"
  },
  dividerSecondary: {
    background: theme.palette.secondary.main,
    height: "0.25rem",
    marginBottom: "0.2rem"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Hub />
      </Section>
      <Section>
        <Features />
      </Section>
      <Section>
        <Testimonials />
      </Section>
      <Divider className={classes.dividerSecondary} />
      <Divider className={classes.dividerPrimary} />
    </div>
  );
};

export default Home;
