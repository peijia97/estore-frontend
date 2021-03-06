import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";
import fontFamily from "./fontFamily";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette,
    layout: {
      contentWidth: 1350
    },
    typography: {
      fontFamily: ["ConcertOne", "Roboto"].join(",")
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": fontFamily
        }
      },
      MuiButton: {
        contained: {
          borderRadius: 50,
          color: palette.primary.main,
          boxShadow: "none",
          backgroundColor: palette.common.white,
          "&:hover": {
            backgroundColor: `${palette.common.white}BF`,
            boxShadow: "none",
            color: palette.common.white
          }
        },
        containedPrimary: {
          color: palette.common.white,
          "&:hover": {
            backgroundColor: `${palette.primary.main}BF !important`
          }
        },
        containedSecondary: {
          color: palette.common.white,
          "&:hover": {
            backgroundColor: `${palette.secondary.main}BF !important`
          }
        },
        outlined: {
          borderRadius: 50,
          borderWidth: "0.15rem !important",
          "&:hover": {
            backgroundColor: `${palette.secondary.main}26 !important`,
            borderColor: "transparent !important"
          }
        },
        containedSizeLarge: {
          padding: "0.8rem 2rem"
        },
        outlinedSizeLarge: {
          padding: "0.8rem 2rem"
        },
        label: {
          fontSize: "1.125rem"
        }
      },
      MuiCheckbox: {
        root: {
          color: palette.common.white
        }
      },
      MuiTypography: typography
    }
  })
);

export default theme;
