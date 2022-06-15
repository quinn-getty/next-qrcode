import { createTheme } from "@material-ui/core";

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: "#000011",
    },
  },
typography: {
  fontFamily: ['"Montserrat"'].join(","),
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontSize: 16,

  h1: {
    fontSize: 48,
    fontWeight: 500,
  },

  h2: {
    fontSize: 36,
    fontWeight: 700,
  },

  h3: {
    fontSize: 24,
  },

  h4: {
    fontSize: 18,
    fontWeight: 700,
  },

  h5: {
    fontSize: 16,
    fontWeight: 600,
  },

  h6: {
    fontSize: 14,
    fontWeight: 600,
  },

  body1: {
    fontSize: 16,
    fontWeight: 500,
  },

  body2: {
    fontSize: 16,
    fontWeight: 500,
  },

  subtitle2: {
    fontSize: 14,
    fontWeight: 500,
  },

  button: {
    fontSize: 14,
    fontWeight: 600,
  },

  caption: {
    fontSize: 12,
  },
},
// props: {
//   MuiButtonBase: {
//     // The properties to apply
//     disableRipple: true, // No more ripple, on the whole application!
//   },
// },
// overrides: {
//   MuiListItem: {
//     gutters: {
//       paddingLeft: 0,
//     },
//   },
//   MuiAvatar: {
//     root: {
//       // border: `1px solid ${NEUTRAL.GREY5}`,
//     },
//   },

//   MuiButton: {
//     root: {
//       textTransform: "none",
//     },
//   },

//   MuiSvgIcon: {
//     root: {
//       fontSize: "1.5em",
//     },
//   },

//   MuiIconButton: {
//     root: {
//       fontSize: "1em",
//     },
//   },

//   MuiTableSortLabel: {
//     icon: {
//       opacity: 0.3,
//     },
//   },
// },
});

// theme.spacing

export default theme;
