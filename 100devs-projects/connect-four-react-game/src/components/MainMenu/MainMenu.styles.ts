import { SxProps, Theme } from '@mui/material';

export const MainMenuContainerStyle: SxProps<Theme> = (theme) => ({
  bgcolor: 'primary.light',
  pt: 8.75,
  pb: 7.5,
  borderWidth: 3,
  borderColor: 'transparent',
  boxShadow: 'none',
  [theme.breakpoints.up('sm')]: {
    borderColor: theme.palette.primary.dark,
    boxShadow: `0px 10px 0px 0px ${theme.palette.primary.dark}`,
    px: 5,
    pt: 8.75,
    pb: 7.5,
  },
  borderStyle: 'solid',

  '& .playVsCpu': {
    backgroundColor: theme.palette.secondary.dark,
    '&:hover': { backgroundColor: theme.palette.secondary.dark },
  },

  '& .playVsPlayer': {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': { backgroundColor: theme.palette.secondary.main },
    color: theme.palette.primary.dark,
    '& .text': {
      mr: '1rem',
      [theme.breakpoints.up('sm')]: { mr: '4rem' },
    },
  },
  '& .gameRules': {
    backgroundColor: theme.palette.secondary.light,
    '&:hover': { backgroundColor: theme.palette.secondary.light },
    color: theme.palette.primary.dark,
  },
});
