import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import CustomTextField from "components/atoms/CustomTextField";
import validate from "validate.js";
import Summary from "../Summary";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  disclaimer: {
    fontFamily: "Roboto"
  },
  disclaimerLink: {
    fontFamily: "Roboto",
    textDecoration: "underline"
  },
  btnSubmit: {
    textAlign: "right"
  },
  outlined: {
    "& .MuiInputBase-root": {
      background: "transparent",
      border: `0.1rem solid ${theme.palette.grey[700]}`,
      "&.Mui-focused": {
        borderColor: theme.palette.primary.main
      }
    }
  },
  summaryContainer: {
    marginTop: "1rem",
    [theme.breakpoints.up("lg")]: {
      marginTop: 0,
      display: "none"
    }
  }
}));

const schema = {
  cardNumber: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120
    }
  },
  billingAddress: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 300
    }
  },
  firstName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120
    }
  },
  expirationMonth: {
    presence: { allowEmpty: false, message: "is required" }
  },
  expirationYear: {
    presence: { allowEmpty: false, message: "is required" }
  },
  zipCode: {
    presence: { allowEmpty: false, message: "is required" }
  },
  country: {
    presence: { allowEmpty: false, message: "is required" }
  }
};

const Form = () => {
  const classes = useStyles();

  const [formState, setFormState] = React.useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (formState.isValid) {
      window.location.replace("/");
    }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors
      }
    }));
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomTextField
              className={classes.outlined}
              placeholder="Credit/debit card number"
              label="Credit/debit card number*"
              variant="filled"
              size="medium"
              name="cardNumber"
              fullWidth
              helperText={
                hasError("cardNumber") ? formState.errors.cardNumber[0] : null
              }
              error={hasError("cardNumber")}
              onChange={handleChange}
              type="cardNumber"
              value={formState.values.cardNumber || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              className={classes.outlined}
              placeholder="Expiration month"
              label="Expiration month"
              variant="filled"
              size="medium"
              name="firstName"
              fullWidth
              select
              helperText={
                hasError("firstName") ? formState.errors.firstName[0] : null
              }
              error={hasError("firstName")}
              onChange={handleChange}
              type="firstName"
              value={formState.values.firstName || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              className={classes.outlined}
              placeholder="Expiration year"
              label="Expiration year"
              variant="filled"
              size="medium"
              name="lastName"
              fullWidth
              select
              helperText={
                hasError("lastName") ? formState.errors.lastName[0] : null
              }
              error={hasError("lastName")}
              onChange={handleChange}
              type="lastName"
              value={formState.values.lastName || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              className={classes.outlined}
              placeholder="First name"
              label="First name"
              variant="filled"
              size="medium"
              name="firstName"
              fullWidth
              helperText={
                hasError("firstName") ? formState.errors.firstName[0] : null
              }
              error={hasError("firstName")}
              onChange={handleChange}
              type="firstName"
              value={formState.values.firstName || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              className={classes.outlined}
              placeholder="Last name"
              label="Last name"
              variant="filled"
              size="medium"
              name="lastName"
              fullWidth
              helperText={
                hasError("lastName") ? formState.errors.lastName[0] : null
              }
              error={hasError("lastName")}
              onChange={handleChange}
              type="lastName"
              value={formState.values.lastName || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomTextField
              className={classes.outlined}
              placeholder="Billing address"
              label="Billing address*"
              variant="filled"
              size="medium"
              name="billingAddress"
              fullWidth
              helperText={
                hasError("billingAddress")
                  ? formState.errors.billingAddress[0]
                  : null
              }
              error={hasError("billingAddress")}
              onChange={handleChange}
              type="billingAddress"
              value={formState.values.billingAddress || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              className={classes.outlined}
              placeholder="Zip code"
              label="Zip code"
              variant="filled"
              size="medium"
              name="zipCode"
              fullWidth
              helperText={
                hasError("zipCode") ? formState.errors.zipCode[0] : null
              }
              error={hasError("zipCode")}
              onChange={handleChange}
              type="text"
              value={formState.values.zipCode || ""}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomTextField
              className={classes.outlined}
              placeholder="Country"
              label="Country"
              variant="filled"
              size="medium"
              name="country"
              fullWidth
              select
              helperText={
                hasError("country") ? formState.errors.country[0] : null
              }
              error={hasError("country")}
              onChange={handleChange}
              type="text"
              value={formState.values.country || ""}
            />
          </Grid>

          <Grid item xs={12} className={classes.summaryContainer}>
            <Summary />
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.disclaimer}
              component="span"
            >
              By placing my secure order, I agree to the{" "}
            </Typography>
            <Typography
              variant="overline"
              color="primary"
              className={classes.disclaimerLink}
              component="a"
              href="#"
            >
              subscription and cancellation terms{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.btnSubmit}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              type="submit"
              href="/setup"
            >
              PLACE SECURE ORDER
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
