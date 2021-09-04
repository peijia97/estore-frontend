import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button, Checkbox } from "@material-ui/core";
import CustomTextField from "components/atoms/CustomTextField";
import validate from "validate.js";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  fieldGrid: {
    background: theme.palette.common.white,
    marginBottom: "1rem",
    borderRadius: "50px",
    padding: "0.25rem"
  },
  outlined: {
    "& .MuiInputBase-root": {
      border: `0.1rem solid white`,
      "&.Mui-focused": {
        borderColor: theme.palette.primary.main
      }
    }
  },
  disclaimer: {
    fontFamily: "Roboto-Light",
    color: theme.palette.common.white
  },
  disclaimerLink: {
    fontFamily: "Roboto-Light",
    color: theme.palette.common.white,
    textDecoration: "underline"
  },
  btnSubmit: {
    textAlign: "right"
  }
}));

const schema = {
  companyName: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120
    }
  },
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
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
  password: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 8
    }
  },
  confirmPassword: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 8
    }
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
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className={classes.fieldGrid}>
              <CustomTextField
                className={classes.outlined}
                placeholder="Company name"
                label="Company name"
                variant="filled"
                size="medium"
                name="companyName"
                fullWidth
                helperText={
                  hasError("companyName")
                    ? formState.errors.companyName[0]
                    : null
                }
                error={hasError("companyName")}
                onChange={handleChange}
                type="companyName"
                value={formState.values.companyName || ""}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.fieldGrid}>
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
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.fieldGrid}>
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
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.fieldGrid}>
              <CustomTextField
                className={classes.outlined}
                placeholder="E-mail"
                label="E-mail"
                variant="filled"
                size="medium"
                name="email"
                fullWidth
                helperText={
                  hasError("email") ? formState.errors.email[0] : null
                }
                error={hasError("email")}
                onChange={handleChange}
                type="email"
                value={formState.values.email || ""}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.fieldGrid}>
              <CustomTextField
                className={classes.outlined}
                placeholder="Password"
                label="Password"
                variant="filled"
                size="medium"
                name="password"
                fullWidth
                helperText={
                  hasError("password") ? formState.errors.password[0] : null
                }
                error={hasError("password")}
                onChange={handleChange}
                type="password"
                value={formState.values.password || ""}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.fieldGrid}>
              <CustomTextField
                className={classes.outlined}
                placeholder="Confirm Password"
                label="Confirm Password"
                variant="filled"
                size="medium"
                name="confirmPassword"
                fullWidth
                helperText={
                  hasError("confirmPassword")
                    ? formState.errors.confirmPassword[0]
                    : null
                }
                error={hasError("confirmPassword")}
                onChange={handleChange}
                type="password"
                value={formState.values.confirmPassword || ""}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Checkbox
              name="tnc"
              color="default"
              checked={true}
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography
              variant="body1"
              className={classes.disclaimer}
              component="span"
            >
              I agree to the{" "}
            </Typography>
            <Typography
              variant="overline"
              className={classes.disclaimerLink}
              component="a"
              href="#"
            >
              Terms of Service{" "}
            </Typography>
            <Typography
              variant="body1"
              className={classes.disclaimer}
              component="span"
            >
              and{" "}
            </Typography>
            <Typography
              variant="overline"
              className={classes.disclaimerLink}
              component="a"
              href="#"
            >
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.btnSubmit}>
            <Button size="large" variant="contained" type="submit" href="/plan">
              SIGN UP NOW
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
