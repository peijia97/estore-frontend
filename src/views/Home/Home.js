import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, ButtonBase } from "@material-ui/core";
import { Section } from "components/organisms";
import { Image } from "components/atoms";
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
  dividerPrimary: {
    background: theme.palette.primary.main,
    height: "0.25rem"
  },
  dividerSecondary: {
    background: theme.palette.secondary.main,
    height: "0.25rem",
    marginBottom: "0.2rem"
  },
  btnChat: {
    position: "fixed",
    zIndex: 2,
    bottom: "8%",
    right: "6%",
    background: "white",
    width: "4.375rem",
    height: "4.375rem",
    borderRadius: "50%",
    boxShadow: "0px 5px 18px -5px rgb(0 0 0 / 35%)"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <Hero />
      </Section>
      <Section disablePadding>
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
      <ButtonBase className={classes.btnChat} href="#">
        <Image
          src={`${process.env.PUBLIC_URL}/images/icons/rocket-chat.svg`}
          alt="chat"
        />
      </ButtonBase>
    </div>
  );
};

export default Home;
