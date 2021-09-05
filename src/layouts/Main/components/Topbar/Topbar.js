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
  Button,
  Grid,
  Divider
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

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
    [theme.breakpoints.up("lg")]: {
      display: "block",
      position: "fixed",
      zIndex: 2,
      maxWidth: "100%",
      background: theme.palette.background.default,
      padding: "1rem calc((100vw - 1350px)/2)",
      transition: "all 0.2s",
      height: "5.5rem",
      overflow: "hidden",
      "&:hover": {
        transition: "all 0.2s",
        background: theme.palette.common.white,
        height: "20rem"
      }
    }
  },
  level1Container: {
    display: "flex",
    alignItems: "center"
  },
  level2Container: {
    marginTop: "1.5rem"
  },
  listItem: {
    cursor: "pointer",
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: "0.5rem"
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
  logo: {
    textDecoration: "none"
  },
  navLink: {
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
    lineHeight: 1.5,
    marginBottom: "1rem"
  },
  column1: { marginLeft: "8.5rem" }
}));

const Topbar = props => {
  const { onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  return (
    <Toolbar disableGutters className={classes.toolbar} {...rest}>
      {/* DESKTOP */}
      <Hidden mdDown>
        <div className={classes.level1Container}>
          <div className={classes.logoContainer}>
            <a href="/" title="estore" className={classes.logo}>
              <Typography variant="h5" color="primary">
                ESTORE
              </Typography>
            </a>
          </div>
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
              <ExpandMoreRoundedIcon />
            </ListItem>
            <ListItem className={classes.listItem}>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.listItemText}
                component="a"
                href="/payment"
              >
                More Options
              </Typography>
              <ExpandMoreRoundedIcon />
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
        </div>
        <Divider />
        <div className={classes.level2Container}>
          <Grid container>
            <Grid item xs={1} className={classes.column1}>
              <a href="/" title="lorem" className={classes.navLink}>
                <Typography variant="body1">Lorem</Typography>
                <ChevronRightRoundedIcon />
              </a>
              <a href="/" title="lorem" className={classes.navLink}>
                <Typography variant="body1">Lorem</Typography>
                <ChevronRightRoundedIcon />
              </a>
              <a href="/" title="lorem" className={classes.navLink}>
                <Typography variant="body1">Lorem</Typography>
                <ChevronRightRoundedIcon />
              </a>
            </Grid>
            <Grid item xs={3} className={classes.column2}>
              <a href="/plan" title="plan" className={classes.navLink}>
                <Typography variant="body1">Choose Plan</Typography>
                <ChevronRightRoundedIcon />
              </a>
              <a href="/setup" title="setup" className={classes.navLink}>
                <Typography variant="body1">Choose Setup</Typography>
                <ChevronRightRoundedIcon />
              </a>
              <a href="/type" title="type" className={classes.navLink}>
                <Typography variant="body1">Choose Type</Typography>
                <ChevronRightRoundedIcon />
              </a>
              <a href="/payment" title="payment" className={classes.navLink}>
                <Typography variant="body1">Choose Payment</Typography>
                <ChevronRightRoundedIcon />
              </a>
              <a href="/platform" title="platform" className={classes.navLink}>
                <Typography variant="body1">Choose Platform</Typography>
                <ChevronRightRoundedIcon />
              </a>
            </Grid>
          </Grid>
        </div>
      </Hidden>

      {/* MOBILE */}
      <Hidden lgUp>
        <div className={classes.logoContainer}>
          <a href="/" title="estore" className={classes.logo}>
            <Typography variant="h5" color="primary">
              ESTORE
            </Typography>
          </a>
        </div>
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
