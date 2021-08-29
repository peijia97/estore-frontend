import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useMediaQuery, Typography, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Image } from "components/atoms";
import { GRID_FEATURES } from "data";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%"
  },
  "grid-features": {
    padding: "0 5rem"
  },
  "grid-features__headline": {
    placeSelf: "center",
    display: "flex",
    alignItems: "flexStart",
    flexDirection: "column"
  },
  "grid-features__title": {
    fontWeight: 400,
    width: "60%"
  },
  "grid-features__subtitle": {
    fontSize: "1.5rem"
  },
  "grid-features__featureItem": { textAlign: "center" },
  "grid-features__featureTitle": { fontWeight: 400, marginBottom: "1rem" },
  "grid-features__featureSubtitle": {
    fontSize: "1rem",
    width: "60%",
    margin: "auto",
    lineHeight: "25px",
    marginBottom: "1rem"
  },
  "grid-features__featureLink": {
    color: theme.palette.grey[800],
    marginRight: "0.5rem",
    fontSize: "1.125rem",
    fontWeight: "900"
  },
  "grid-features__featureImage": { height: "20rem", width: "auto" }
}));

/**
 * Component to display the job card
 *
 * @param {Object} props
 */
const GridFeatures = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const classes = useStyles();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <Grid
      container
      spacing={isMd ? 10 : 5}
      className={clsx(
        isMd && classes["grid-features"],
        classes.root,
        className
      )}
      {...rest}
    >
      <Grid item xs={12} md={6} className={classes["grid-features__headline"]}>
        <Typography
          variant="h3"
          color="primary"
          gutterBottom
          className={classes["grid-features__title"]}
        >
          LOREM IPSUM DOLOR SIT
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          className={classes["grid-features__subtitle"]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Grid>
      {GRID_FEATURES.map(feature => (
        <Grid
          item
          xs={12}
          md={6}
          className={classes["grid-features__featureItem"]}
        >
          <Image
            className={classes["grid-features__featureImage"]}
            src={feature.img}
            alt={feature.title}
            lazy={true}
          />
          <Typography
            variant="h5"
            color="textSecondary"
            className={classes["grid-features__featureTitle"]}
          >
            {feature.title}
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes["grid-features__featureSubtitle"]}
          >
            {feature.subtitle}
          </Typography>
          <span>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes["grid-features__featureLink"]}
              component="a"
              href={feature.link.url}
            >
              {feature.link.label}
            </Typography>
            <Image
              src={`${process.env.PUBLIC_URL}/images/icons/arrow-right-green.svg`}
              alt="arrow-right"
              lazy={true}
            />
          </span>
        </Grid>
      ))}
    </Grid>
  );
};

GridFeatures.propTypes = {
  /**
   *  External classes
   */
  className: PropTypes.string
};

export default GridFeatures;
