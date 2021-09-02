import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  summaryTitle: {
    fontWeight: 600,
    marginBottom: "0.5rem"
  },
  summaryCard: {
    background: theme.palette.background.default,
    padding: "3rem 2rem",
    borderRadius: "30px",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "25rem"
    }
  },
  divider: {
    margin: "2.5rem 0 2rem"
  },
  title: {
    fontFamily: "Roboto",
    marginBottom: "1rem"
  },
  subtitle: {
    fontWeight: 400
  },
  subtotal: {
    marginBottom: "0.5rem"
  },
  tax: {
    fontWeight: 400,
    marginBottom: "1rem"
  },
  textRight: {
    textAlign: "right"
  }
}));

const Summary = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.summaryTitle}>
        Your order
      </Typography>

      <div className={classes.summaryCard}>
        <Typography variant="h5" className={classes.title}>
          Lorem
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          Annually - RM123
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.subtotal}>
              Subtotal
            </Typography>
            <Typography variant="h6" className={classes.tax}>
              Tax
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.textRight}>
            <Typography variant="h6" className={classes.subtotal}>
              RM123
            </Typography>
            <Typography variant="h6" className={classes.tax}>
              Not specified
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Summary;
