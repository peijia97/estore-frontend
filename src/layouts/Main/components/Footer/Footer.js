import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Divider, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, List, ListItem } from "@material-ui/core";

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
    margin: "0 auto 3rem",
    padding: theme.spacing(0, 2)
  },
  logoContainerItem: {
    paddingTop: 0
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0
  },
  logoContainer: {
    width: 120,
    height: 32
  },
  logoImage: {
    width: "auto",
    height: "100%"
  },
  footerTitle: {
    fontSize: "1rem"
  },
  iconImage: {
    marginRight: "1rem"
  },
  footerLinks: {
    textDecoration: "none"
  },
  divider: {
    background: theme.palette.grey[200],
    height: "0.25rem",
    marginBottom: "3rem"
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={3}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
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
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  className={classes.footerLinks}
                  component="a"
                  href="#"
                >
                  Lorem Ipsum
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  className={classes.footerLinks}
                  component="a"
                  href="#"
                >
                  Lorem Ipsum
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  className={classes.footerLinks}
                  component="a"
                  href="#"
                >
                  Lorem Ipsum
                </Typography>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={6} lg={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <Typography variant="h6" className={classes.footerTitle}>
                  Lorem
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  className={classes.footerLinks}
                  component="a"
                  href="#"
                >
                  Lorem
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  className={classes.footerLinks}
                  component="a"
                  href="#"
                >
                  Lorem
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  className={classes.footerLinks}
                  component="a"
                  href="#"
                >
                  Lorem
                </Typography>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <Typography variant="h6" className={classes.footerTitle}>
                  Lorem
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  className={classes.footerLinks}
                  component="a"
                  href="#"
                >
                  Lorem ipsum dolor sit
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  className={classes.footerLinks}
                  component="a"
                  href="#"
                >
                  Lorem ipsum dolor sit
                </Typography>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Typography
                  variant="body1"
                  className={classes.footerLinks}
                  component="a"
                  href="#"
                >
                  Lorem ipsum dolor sit
                </Typography>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <Typography variant="h6" className={classes.footerTitle}>
                  Lorem
                </Typography>
              </ListItem>
              <a href="/" title="facebook" className={classes.iconImage}>
                <Image
                  src={`${process.env.PUBLIC_URL}/images/icons/facebook-round.svg`}
                  alt="facebook"
                  lazy={true}
                />
              </a>
              <a href="/" title="instagram" className={classes.iconImage}>
                <Image
                  src={`${process.env.PUBLIC_URL}/images/icons/instagram-round.svg`}
                  alt="instagram"
                  lazy={true}
                />
              </a>
              <a href="/" title="twitter" className={classes.iconImage}>
                <Image
                  src={`${process.env.PUBLIC_URL}/images/icons/twitter-round.svg`}
                  alt="twitter"
                  lazy={true}
                />
              </a>
              <a href="/" title="tiktok" className={classes.iconImage}>
                <Image
                  src={`${process.env.PUBLIC_URL}/images/icons/tiktok-round.svg`}
                  alt="tiktok"
                  lazy={true}
                />
              </a>
            </List>
          </Grid>
        </Grid>
      </div>

      <Divider className={classes.divider} />

      <div className={classes.footerContainer}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              © 2021 copyright. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              placeholder="Lorem Ipsum"
              label="Lorem Ipsum"
              variant="outlined"
              size="medium"
              name="emailAddress"
              fullWidth
              // helperText={
              //   hasError('firstName') ? formState.errors.firstName[0] : null
              // }
              // error={hasError('firstName')}
              // onChange={handleChange}
              // type="firstName"
              // value={formState.values.firstName || ''}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
