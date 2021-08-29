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
          borderRadius: 50
        },
        containedSecondary: {
          color: "white"
        },
        outlined: {
          borderRadius: 50
        }
      },
      MuiTypography: typography
    }
  })
);

export default theme;
