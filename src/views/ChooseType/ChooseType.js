import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Typography, Grid, Button, ButtonBase } from "@material-ui/core";
import StripesDivider from "components/atoms/StripesDivider";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh"
  },
  section: {
    maxWidth: "45rem",
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "80rem"
    }
  },
  logo: {
    position: "absolute",
    left: "5%",
    top: "1rem",
    [theme.breakpoints.up("md")]: {
      left: "10%",
      top: "3rem"
    },
    "& .MuiTypography-root": {
      fontWeight: 400,
      color: theme.palette.common.white
    }
  },
  back: {
    position: "absolute",
    fontFamily: "Roboto",
    textTransform: "capitalize",
    color: theme.palette.common.white,
    fontWeight: 400,
    right: "5%",
    top: "1rem",
    [theme.breakpoints.up("md")]: {
      right: "auto",
      left: "10%",
      top: "auto",
      bottom: "3rem"
    }
  },
  titleContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      marginTop: "3rem"
    }
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 400,
    marginBottom: "1rem"
  },
  subtitle: {
    color: theme.palette.common.white,
    fontWeight: 400,
    marginBottom: "2rem"
  },
  optionGrid: {
    position: "relative",
    marginTop: "1rem",
    [theme.breakpoints.up("lg")]: {
      marginTop: "3rem"
    }
  },
  optionContainer: {
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      paddingRight: "12px",
      "&:nth-child(2n)": {
        paddingRight: 0
      }
    }
  },
  btnContinue: {
    minWidth: "11rem",
    marginTop: "1rem"
  },
  btnContainer: {
    width: "100%",
    border: "0.15rem solid white",
    borderRadius: "50px",
    color: theme.palette.common.white,
    padding: "1.2rem 1.5rem",
    marginBottom: "1rem",
    transition: "all 0.3s",
    "&:hover": {
      background: `${theme.palette.common.white}1A`,
      "& svg": {
        transition: "all 0.3s",
        marginRight: "0.5rem"
      }
    },
    "& span": {
      flex: 1,
      textAlign: "left",
      color: theme.palette.common.white
    }
  }
}));

const ChooseType = () => {
  const classes = useStyles();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <ButtonBase href="/home" className={classes.logo}>
        <Typography variant="h5">ESTORE</Typography>
      </ButtonBase>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={classes.titleContainer}>
              <Typography variant="h2" className={classes.title}>
                Choose Type
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                Lorem ipsum dolor sit
              </Typography>
            </div>
          </Grid>
          <Grid container className={classes.optionGrid}>
            <Grid item xs={12} lg={6} className={classes.optionContainer}>
              <ButtonBase className={classes.btnContainer}>
                <Typography variant="body1" component="span">
                  Lorem Ipsum 1
                </Typography>
                <ChevronRightRoundedIcon />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} lg={6} className={classes.optionContainer}>
              <ButtonBase className={classes.btnContainer}>
                <Typography variant="body1" component="span">
                  Lorem Ipsum 1
                </Typography>
                <ChevronRightRoundedIcon />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} lg={6} className={classes.optionContainer}>
              <ButtonBase className={classes.btnContainer}>
                <Typography variant="body1" component="span">
                  Lorem Ipsum 1
                </Typography>
                <ChevronRightRoundedIcon />
              </ButtonBase>
            </Grid>

            <Grid item xs={12} lg={6} className={classes.optionContainer}>
              <ButtonBase className={classes.btnContainer}>
                <Typography variant="body1" component="span">
                  Lorem Ipsum 1
                </Typography>
                <ChevronRightRoundedIcon />
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Button
        variant="text"
        startIcon={<ChevronLeftRoundedIcon />}
        className={classes.back}
        onClick={handleBack}
      >
        Back
      </Button>
      <StripesDivider />
    </div>
  );
};

export default ChooseType;
