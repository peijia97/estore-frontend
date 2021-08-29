import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, List, ListItem } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";

import { Image } from "components/atoms";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 0)
    },
    background: theme.palette.background.default
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2)
  },
  logoContainerItem: {
    paddingTop: 0
  },
  logoContainer: {
    width: 120,
    height: 32
  },
  logoImage: {
    width: "auto",
    height: "100%"
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent"
    },
    "&:last-child": {
      marginRight: 0
    }
  },
  icon: {
    fontSize: 24
  },
  divider: {
    background: theme.palette.grey[200],
    height: "0.25rem"
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <List disablePadding>
          <ListItem disableGutters className={classes.logoContainerItem}>
            <div className={classes.logoContainer}>
              <a href="/" title="estore">
                <Image
                  className={classes.logoImage}
                  src="/images/logos/logo.png"
                  alt="estore-logo"
                  lazy={false}
                />
              </a>
            </div>
          </ListItem>
          <ListItem disableGutters>
            <IconButton className={classes.socialIcon}>
              <FacebookIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <InstagramIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <TwitterIcon className={classes.icon} />
            </IconButton>
            <IconButton className={classes.socialIcon}>
              <PinterestIcon className={classes.icon} />
            </IconButton>
          </ListItem>
        </List>
      </div>

      <Divider className={classes.divider} />

      <div className={classes.footerContainer}>
        <IconButton className={classes.socialIcon}>
          <PinterestIcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
