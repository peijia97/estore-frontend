import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Button, Typography } from "@material-ui/core";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500
    }
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
              <span>
                <Typography component="span" variant="inherit" color="primary">
                  LOREM IPSUM DOLOR SIT AMET, EST LABORUM.
                </Typography>
              </span>
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
          />
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