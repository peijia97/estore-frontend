import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.common.white,
    border: "none",
    borderRadius: 50,
    overflow: "hidden",
    margin: "0 0.5rem",
    "& input": {
      background: theme.palette.common.white,
      fontFamily: "Roboto",
      fontWeight: 600
    },
    "& input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0 30px white inset"
    },
    "& .MuiInputLabel-filled": {
      fontFamily: "Roboto",
      fontWeight: 600,
      paddingLeft: "0.5rem"
    },
    "& .MuiFormHelperText-root": {
      fontFamily: "Roboto",
      fontWeight: 600,
      marginTop: 0,
      lineHeight: 1.2
    },
    "& .MuiFilledInput-root:hover": {
      backgroundColor: theme.palette.common.white
    }
  }
}));

/**
 * Component for Custom Textfield
 *
 * @param {Object} props
 */
const CustomTextField = props => {
  const { fontIconClass, size, fontIconColor, className, ...rest } = props;

  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      InputProps={{ disableUnderline: true, classes: classes }}
      {...rest}
    />
  );
};

CustomTextField.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string
};

export default CustomTextField;
