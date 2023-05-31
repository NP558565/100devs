import { SxProps, Theme } from '@mui/material';

export const timerBoxRootStyles: SxProps<Theme> = (theme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '.info': {
    position: 'absolute',
    lineHeight: 1,
    fontWeight: 700,
    textAlign: 'center',

    '.playerText': {
      textTransform: 'uppercase',
    },

    '.timer': {
      m: 0,
      fontSize: '5.6rem',
    },
  },
});
