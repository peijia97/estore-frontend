import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Section } from "components/organisms";
import { Typography, Grid, Button } from "@material-ui/core";
import CustomTextField from "components/atoms/CustomTextField";
import StripesDivider from "components/atoms/StripesDivider";
import VideoPreview from "components/molecules/VideoPreview/VideoPreview";
import validate from "validate.js";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.secondary.main,
    position: "relative",
    overflow: "hidden",
    minHeight: `calc(100vh - ${theme.mixins.toolbar["@media (min-width:600px)"].minHeight}px)`
  },
  fieldContainer: {
    background: theme.palette.common.white,
    marginBottom: "1rem",
    borderRadius: "50px",
    padding: "0.25rem",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginBottom: "2rem"
    }
  },
  outlined: {
    "& .MuiInputBase-root": {
      backgroundColor: theme.palette.common.white,
      border: `0.1rem solid white`,
      "&.Mui-focused": {
        borderColor: theme.palette.primary.main
      }
    }
  },
  titleContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    maxWidth: "35rem",
    margin: `0 auto`
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 400,
    lineHeight: "45px",
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      lineHeight: "64px",
      marginBottom: "2rem"
    }
  },
  subtitle: {
    color: theme.palette.common.white,
    marginBottom: "2rem",
    fontWeight: 400,
    [theme.breakpoints.up("md")]: {
      marginBottom: "3rem"
    }
  },
  btnStart: {
    minWidth: "14rem",
    marginBottom: "2rem",
    alignSelf: "flex-end"
  }
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 300
    }
  }
};

const Video2 = () => {
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

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={classes.titleContainer}>
              <Typography variant="h2" className={classes.title}>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR
              </Typography>
              <Typography variant="h6" className={classes.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, elt do
                sed eismod tempor indicsit ut labore et dorore.
              </Typography>

              <div className={classes.fieldContainer}>
                <CustomTextField
                  className={classes.outlined}
                  placeholder="Email Address"
                  label="Email Address"
                  variant="filled"
                  size="medium"
                  name="email"
                  fullWidth
                  helperText={
                    hasError("email") ? formState.errors.email[0] : null
                  }
                  error={hasError("email")}
                  onChange={handleChange}
                  type="text"
                  value={formState.values.email || ""}
                />
              </div>

              <Button
                variant="contained"
                size="large"
                className={classes.btnStart}
                href="#"
              >
                START NOW
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={classes.titleContainer}>
              <VideoPreview />
            </div>
          </Grid>
        </Grid>
      </Section>
      <StripesDivider />
    </div>
  );
};

export default Video2;
