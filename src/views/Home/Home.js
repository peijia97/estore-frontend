import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { Section } from "components/organisms";
import { Customization, Hero, Hub, Partners, Pricings } from "./components";

import { integrations } from "./data";

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
        <Partners data={integrations} />
      </Section>
      <Section>
        <Customization />
      </Section>
      <Divider />
      <Section innerNarrowed>
        <Pricings />
      </Section>
      <Divider />
    </div>
  );
};

export default Home;
