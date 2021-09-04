import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider, Button } from "@material-ui/core";

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
    marginBottom: "1rem",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "25rem"
    },
    "& hr": {
      margin: "2.5rem 0 2rem"
    }
  },
  addOnCard: {
    background: theme.palette.background.default,
    padding: "2rem",
    borderRadius: "30px",
    width: "100%",
    marginBottom: "1rem",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "25rem"
    },
    "& hr": {
      margin: "1rem 0"
    }
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
  },
  btnAddOn: {
    textDecoration: "underline",
    float: "right",
    "&:hover": {
      cursor: "pointer"
    }
  }
}));

const Summary = () => {
  const classes = useStyles();

  const [cart, setCart] = useState({ productName: "Lorem", price: "123" });

  const handleAddOn = () => {
    setCart({ productName: "Lorem Hello", price: "999" });
  };

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.summaryTitle}>
        Your order
      </Typography>

      <div className={classes.summaryCard}>
        <Typography variant="h5" className={classes.title}>
          {cart.productName}
        </Typography>
        <Typography variant="h6" className={classes.subtitle}>
          Annually - RM{cart.price}
        </Typography>
        <Divider />
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
              RM{cart.price}
            </Typography>
            <Typography variant="h6" className={classes.tax}>
              Not specified
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className={classes.addOnCard}>
        <Typography variant="body1" className={classes.subtitle}>
          Consider buying
        </Typography>
        <Divider />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.title}>
              Special Plan
            </Typography>
            <Typography variant="body1" className={classes.listItem}>
              * upsell feature 1
            </Typography>
            <Typography variant="body1" className={classes.listItem}>
              * upsell feature 2
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body1"
              component="span"
              color="primary"
              className={classes.btnAddOn}
              onClick={handleAddOn}
            >
              [+] I want this plan
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Summary;
