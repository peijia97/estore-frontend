import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { Topbar, Footer, Sidebar } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    background: theme.palette.background.default
  },
  main: {
    [theme.breakpoints.up("lg")]: {
      paddingTop: "5rem"
    }
  }
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isLg ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
