import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, ButtonBase, Button } from "@material-ui/core";
import { Section } from "components/organisms";
import { Image } from "components/atoms";
import { Hero, Hub, Features, Testimonials } from "./components";
import { setVideoModalState } from "states/videoModalState";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import clsx from "clsx";

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
    zIndex: 3,
    bottom: "8%",
    right: "6%",
    background: theme.palette.common.white,
    width: "4.375rem",
    height: "4.375rem",
    borderRadius: "50%",
    boxShadow: "0px 5px 18px -5px rgb(0 0 0 / 35%)"
  },
  btnCta: {
    minWidth: "14rem"
  },
  ctaBar: {
    position: "fixed",
    zIndex: 2,
    bottom: "-5rem",
    background: theme.palette.background.default,
    width: "100%",
    textAlign: "center",
    padding: "0.5rem 0",
    transition: "all 0.5s"
  },
  showCtaBar: {
    transition: "all 0.3s",
    bottom: 0
  }
}));

const Home = () => {
  const classes = useStyles();

  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  const handleOpenVideo = () => {
    setVideoModalState({ show: true });
  };

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
      <div
        className={clsx(
          classes.ctaBar,
          scrollDir === "down" && classes.showCtaBar
        )}
      >
        <Button
          size="large"
          variant="contained"
          color="secondary"
          className={classes.btnCta}
          startIcon={<PlayCircleOutlineRoundedIcon />}
          onClick={handleOpenVideo}
        >
          LOREM IPSUM
        </Button>
      </div>
    </div>
  );
};

export default Home;
