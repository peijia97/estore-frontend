import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  openQuote: {
    fontFamily: "Roboto",
    fontWeight: "500"
  },
  title: {
    fontSize: "1.125rem",
    marginBottom: "1rem"
  },
  quote: {
    fontSize: "2.125rem",
    fontFamily: "Roboto-Light",
    lineHeight: "54px",
    fontWeight: "400",
    marginBottom: "1rem",
    padding: "0 10%",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      padding: "0 30%"
    }
  },
  author: { fontSize: "0.95rem", marginBottom: "3rem" },
  btnGroups: { textAlign: "center", width: "100%", marginBottom: "2rem" },
  btnAction: {
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      marginRight: "1rem"
    }
  },
  linkText: { fontWeight: "900", textDecoration: "none" },
  disclaimer: { width: "100%", textAlign: "center" }
}));

const Testimonials = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const classes = useStyles();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={12}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          data-aos="fade-up"
        >
          <div>
            <Typography
              variant="h3"
              className={classes.openQuote}
              color="secondary"
              component="span"
            >
              “
            </Typography>
            <Typography
              variant="h6"
              className={classes.title}
              color="secondary"
              component="span"
            >
              LOREM IPSUM
            </Typography>
          </div>
          <Typography variant="h4" className={classes.quote} component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ”
          </Typography>
          <Typography variant="body1" className={classes.author}>
            Emely Stone, Founder, Kuala Lumpur
          </Typography>
        </Grid>
        <div className={classes.btnGroups}>
          <Button
            variant="contained"
            className={classes.btnAction}
            color="secondary"
            size="large"
          >
            LOREM IPSUM DOLOR
          </Button>
          <Button variant="outlined" color="secondary" size="large">
            LOREM IPSUM
          </Button>
        </div>
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
    </div>
  );
};

Testimonials.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default Testimonials;
