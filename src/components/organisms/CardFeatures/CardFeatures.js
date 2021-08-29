import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Typography,
  ListItem,
  List,
  Grid
} from "@material-ui/core";
import { Image } from "components/atoms";
import { CardBase } from "components/organisms";
import { CARD_FEATURES } from "data";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    width: "100%"
  },
  "card-features": {
    borderRadius: 50,
    boxShadow: "3px 3px 20px #0000000F"
  },
  "card-features__title": {
    textAlign: "center",
    fontWeight: 400,
    marginBottom: "3rem"
  },
  "card-features__innerGrid": {
    padding: "0 1rem"
  },
  "card-features__innerGridMd": {
    padding: "0 2rem"
  },
  title: {
    lineHeight: "28px",
    marginBottom: "16px"
  },
  subtitle: {
    fontSize: "0.95rem",
    lineHeight: "25px"
  },
  featureLinksList: {},
  listItem: { padding: 0 },
  listItemText: { fontSize: "1.125rem", marginRight: "0.5rem" }
}));

/**
 * Component to display the job card
 *
 * @param {Object} props
 */
const CardFeatures = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const classes = useStyles();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });

  return (
    <CardBase
      className={clsx(classes["card-features"], classes.root, className)}
      align="left"
      {...rest}
    >
      <Grid container spacing={2} className="card-features__wrapper">
        <Grid item xs={12} className="card-features__headline">
          <Typography
            variant="h3"
            color="primary"
            gutterBottom
            className={classes["card-features__title"]}
          >
            FEATURES LOREM IPSUM
          </Typography>
          <Grid
            container
            spacing={isMd ? 10 : 5}
            className={clsx(
              isMd
                ? classes["card-features__innerGridMd"]
                : classes["card-features__innerGrid"]
            )}
          >
            {CARD_FEATURES.map(feature => (
              <Grid item xs={12} md={4}>
                <Image
                  className={classes.iconImage}
                  src={feature.icon}
                  alt={feature.title}
                  lazy={true}
                />

                <div className={classes.title}>
                  <Typography variant="h5" color="primary" component="span">
                    {feature.title1}
                  </Typography>{" "}
                  <Typography variant="h5" component="span">
                    {feature.title2}
                  </Typography>
                </div>
                <Typography variant="body1" className={classes.subtitle}>
                  {feature.subtitle}
                </Typography>

                <List className={classes.featureLinksList}>
                  {feature.links.map(link => (
                    <ListItem className={classes.listItem}>
                      <Typography
                        variant="overline"
                        color="secondary"
                        className={classes.listItemText}
                        component="a"
                        href={link.url}
                      >
                        {link.label}
                      </Typography>
                      <Image
                        src="/images/icons/arrow-right-green.svg"
                        alt="arrow-right"
                        lazy={true}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </CardBase>
  );
};

CardFeatures.propTypes = {
  /**
   *  External classes
   */
  className: PropTypes.string
};

export default CardFeatures;
