import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import CustomTextField from "components/atoms/CustomTextField";
import validate from "validate.js";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "relative"
  },
  disclaimer: {
    fontFamily: "Roboto"
  },
  disclaimerLink: {
    fontFamily: "Roboto",
    textDecoration: "none"
  },
  btnSubmit: {
    textAlign: "right",
    minWidth: "13rem",
    position: "absolute",
    right: 0
  },
  outlined: {
    "& .MuiInputBase-root": {
      background: "transparent",
      border: `0.1rem solid ${theme.palette.grey[700]}`,
      "&.Mui-focused": {
        borderColor: theme.palette.primary.main
      },
      "&.MuiFilledInput-underline:before": {
        borderBottom: 0
      },
      "& .MuiInputBase-input": {
        background: "transparent"
      }
    }
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

  const [showPassword, setShowPassword] = useState(false);

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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomTextField
              className={classes.outlined}
              placeholder="Email address"
              label="Email address"
              variant="filled"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError("email") ? formState.errors.email[0] : null}
              error={hasError("email")}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ""}
            />
          </Grid>
          <Grid item xs={12}>
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
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              error={hasError("password")}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              value={formState.values.password || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              className={classes.disclaimer}
              component="span"
            >
              New here?{" "}
            </Typography>
            <Typography
              variant="overline"
              color="primary"
              className={classes.disclaimerLink}
              component="a"
              href="#"
            >
              Get started
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.btnSubmit}
              size="large"
              variant="contained"
              color="primary"
              type="submit"
            >
              SIGN IN
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
