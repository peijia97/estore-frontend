import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Typography, Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    borderRadius: "30px",
    backgroundColor: "transparent",
    border: "0.15rem solid white",
    textAlign: "center",
    padding: "2rem",
    width: "20rem",
    height: "20rem",
    maxWidth: "100%",
    fontFamily: "Roboto",
    "&:hover": {
      backgroundColor: `${theme.palette.common.white}26`
    }
  },
  optionTitle: {
    color: theme.palette.common.white,
    marginBottom: "0.8rem",
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
    width: "12rem",
    maxWidth: "100%"
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
      <Button variant="contained" size="large" className={classes.btnStart}>
        GET STARTED
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
