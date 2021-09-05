import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Button, Typography } from "@material-ui/core";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    fontWeight: 400,
    fontSize: "56px",
    lineHeight: "64px"
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35rem"
    }
  },
  linkText: { fontWeight: "900", textDecoration: "none" },
  disclaimer: { width: "100%", marginTop: "1rem" },
  checkListContainer: {
    display: "inline-flex",
    alignItems: "center",
    marginBottom: "1rem",
    "&:first-child": { marginTop: "0.5rem" },
    "& svg": { margin: "0 0.5rem" }
  }
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={4}
        direction={isMd ? "row" : "column-reverse"}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={5}
          data-aos={"fade-up"}
        >
          <SectionHeader
            title={
              <Typography
                variant="h3"
                color="primary"
                component="span"
                className={classes.title}
              >
                LOREM IPSUM DOLOR SIT AMET, EST LABORUM.
              </Typography>
            }
            subtitle="Lorem ipsum dolor sit amet."
            ctaGroup={[
              <Button variant="contained" color="secondary" size="large">
                Lorem
              </Button>,
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<PlayCircleOutlineRoundedIcon />}
                size="large"
              >
                Learn more
              </Button>
            ]}
            align="left"
            disableGutter
            titleVariant="h3"
          >
            <Grid container>
              <Grid item xs={6}>
                <div className={classes.checkListContainer}>
                  <CheckRoundedIcon color="primary" />
                  <Typography variant="body1">Lorem ipsum dolor sit</Typography>
                </div>
                <div className={classes.checkListContainer}>
                  <CheckRoundedIcon color="primary" />
                  <Typography variant="body1">Lorem ipsum dolor sit</Typography>
                </div>
                <div className={classes.checkListContainer}>
                  <CheckRoundedIcon color="primary" />
                  <Typography variant="body1">Lorem ipsum dolor sit</Typography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.checkListContainer}>
                  <CheckRoundedIcon color="primary" />
                  <Typography variant="body1">Lorem ipsum dolor sit</Typography>
                </div>
                <div className={classes.checkListContainer}>
                  <CheckRoundedIcon color="primary" />
                  <Typography variant="body1">Lorem ipsum dolor sit</Typography>
                </div>
              </Grid>
            </Grid>
          </SectionHeader>
          <div className={classes.disclaimer}>
            <Typography variant="body1" component="span">
              Lorem ipsum
            </Typography>{" "}
            <Typography
              variant="body1"
              component="a"
              className={classes.linkText}
              color="primary"
              href="#"
            >
              DOLOR
            </Typography>{" "}
            <Typography variant="body1" component="span">
              sit amet, est laborum.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={7}
          data-aos={"fade-up"}
        >
          <Image
            src={`${process.env.PUBLIC_URL}/images/illustrations/hero.png`}
            alt="estore-hero"
            className={classes.image}
          />
        </Grid>
      </Grid>
      {/* <Button
        variant="contained"
        color="secondary"
        startIcon={<PlayCircleOutlineRoundedIcon />}
        size="large"
      >
        Watch Video
      </Button> */}
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Hero;
