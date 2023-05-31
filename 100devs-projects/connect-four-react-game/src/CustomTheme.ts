import { Theme, ThemeOptions } from '@mui/material';
import { mainTransition } from './utils/Styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    mdlg: true;
    lg: true;
    xl: true;
  }
}

export const mainColour = {
  main: '#FD6687',
  opponent: '#FFCE67',
  dark: '#000000',
  light: '#FFFFFF',
};

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mdlg: 1080,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: (palette) => ({
    fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
    htmlFontSize: 10,
    h2: {
      fontSize: '5.6rem',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: palette.primary.light,
    },
  }),
  palette: {
    primary: {
      light: '#7945FF',
      main: '#5C2DD5',
      dark: mainColour.dark,
    },
    secondary: {
      light: mainColour.light,
      main: mainColour.opponent,
      dark: mainColour.main,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme: Theme) => ({
        body: {
          backgroundColor: theme.palette.primary.light,
        },
      }),
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: '2.4rem',
          fontWeight: 700,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '& circle': {
            transition: `fill ${mainTransition}`,
          },
          '&:hover circle': {
            transition: `fill ${mainTransition}`,
          },
        },
      },
    },
  },
};

export default themeOptions;
