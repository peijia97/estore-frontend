import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Hidden,
  List,
  ListItem,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Image } from "components/atoms";

const useStyles = makeStyles(theme => ({
  root: {},
  flexGrow: {
    flexGrow: 1
  },
  navigationContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("md")]: {
      padding: "2rem 0"
    }
  },
  listItem: {
    cursor: "pointer",
    paddingTop: 0,
    paddingBottom: 0
  },
  listItemText: {
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    textDecoration: "none",
    fontWeight: "bold"
  },
  listItemButton: {
    whiteSpace: "nowrap"
  },
  iconButton: {
    padding: 0,
    "&:hover": {
      background: "transparent"
    }
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 32,
      paddingLeft: "1rem"
    }
  },
  logoImage: {
    width: "auto",
    height: "100%"
  }
}));

const Topbar = props => {
  const { onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="estore">
          <Image
            className={classes.logoImage}
            src={`${process.env.PUBLIC_URL}/images/logos/logo.png`}
            alt="estore-logo"
            lazy={false}
          />
        </a>
      </div>
      <Hidden smDown>
        <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href={`${process.env.PUBLIC_URL}/home`}
            >
              Home
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href={`${process.env.PUBLIC_URL}/signup`}
            >
              Sign up
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/plan"
            >
              Choose plan
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/payment"
            >
              Choose Payment
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/setup"
            >
              Choose Setup
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/type"
            >
              Choose Type
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/platform"
            >
              Choose Platform
            </Typography>
          </ListItem>
        </List>
        <div className={classes.flexGrow} />
        <List className={classes.navigationContainer}>
          <ListItem className={classes.listItem}>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.listItemText}
              component="a"
              href="/login"
            >
              Log in
            </Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              component="a"
              target="blank"
              href="#"
              className={classes.listItemButton}
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.flexGrow} />
        <IconButton
          className={classes.iconButton}
          onClick={onSidebarOpen}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func
};

export default Topbar;
