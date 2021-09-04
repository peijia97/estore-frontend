import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Typography, Card, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    borderRadius: "30px",
    backgroundColor: "transparent",
    border: "0.15rem solid white",
    textAlign: "left",
    padding: "2rem 2.5rem",
    width: "20rem",
    maxWidth: "100%",
    fontFamily: "Roboto",
    transition: "all 0.2s",
    "&:hover": {
      transition: "all 0.2s",
      backgroundColor: `${theme.palette.common.white}26`,
      borderColor: "transparent"
    },
    "& hr": {
      margin: "2.5em 0 1rem",
      backgroundColor: theme.palette.common.white
    }
  },
  optionTitle: {
    color: theme.palette.common.white,
    marginBottom: "0.5rem",
    fontWeight: 400
  },
  optionSubtitle: {
    color: theme.palette.common.white,
    fontFamily: "Roboto",
    marginBottom: "0.8rem"
  },
  pricingTitle: {
    color: theme.palette.common.white,
    fontFamily: "Roboto",
    marginBottom: "0.8rem"
  },
  pricingSubtitle: {
    color: theme.palette.common.white,
    fontFamily: "Roboto",
    marginBottom: "2.5rem"
  },
  btnStart: {
    width: "100%"
  },
  btnVideo: {
    color: theme.palette.common.white,
    textDecoration: "underline",
    fontWeight: 400,
    marginTop: "1rem",
    width: "100%"
  },
  itemTitle: {
    color: `${theme.palette.common.white}99`,
    marginBottom: "0.25rem"
  },
  itemDescription: {
    color: theme.palette.common.white,
    marginBottom: "1.2rem",
    "&:last-of-type": { marginBottom: "2.5rem" }
  }
}));

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const CardPlan = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      variant="outlined"
      className={clsx(classes.card, className)}
      {...rest}
    >
      <Typography variant="h5" className={classes.optionTitle}>
        LOREM
      </Typography>
      <Typography variant="body1" className={classes.optionSubtitle}>
        Lorem ipsum
      </Typography>
      <Typography variant="h4" className={classes.pricingTitle}>
        FREE
      </Typography>
      <Typography variant="body1" className={classes.pricingSubtitle}>
        Annually
      </Typography>
      <Button
        variant="contained"
        size="large"
        href="/payment"
        className={classes.btnStart}
      >
        GET STARTED
      </Button>
      <Divider />
      {Array(3)
        .fill()
        .map(item => (
          <>
            <Typography variant="body2" className={classes.itemTitle}>
              LOREM
            </Typography>
            <Typography variant="body1" className={classes.itemDescription}>
              Lorem dolor sit amet, consintador adsimpiscing elit.
            </Typography>
          </>
        ))}
      <Button
        variant="contained"
        size="large"
        href="/payment"
        className={classes.btnStart}
      >
        GET STARTED
      </Button>
      <Button
        variant="text"
        size="large"
        startIcon={<PlayCircleOutlineRoundedIcon />}
        className={classes.btnVideo}
      >
        LOREM IPSUM
      </Button>
    </Card>
  );
};

CardPlan.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default CardPlan;
