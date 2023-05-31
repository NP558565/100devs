import { SxProps, Theme } from '@mui/material';

export const gameBoardContainerStyles: SxProps<Theme> = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  zIndex: 1,
  '& > .scoreBox': {
    display: 'none',
    [theme.breakpoints.up('mdlg')]: {
      display: 'block',
      minWidth: '14.1rem',
      px: 0,
    },
  },
  '.game-board-header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 'auto',
    button: {
      minWidth: '10.8rem',
    },
  },
  '.central-content': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: '1.5rem',
    mx: 'auto',
    overflow: 'hidden',
    pb: '1rem',
    mt: '1rem',
    // minWidth: '35rem',

    [theme.breakpoints.up('mdlg')]: {
      mx: '5rem',
    },
  },
  '.horizontal-scores': {
    display: 'flex',
    px: '2.5rem',
    [theme.breakpoints.up('sm')]: {
      my: '1rem',
    },

    [theme.breakpoints.up('mdlg')]: {
      display: 'none',
    },
    justifyContent: 'space-between',
    textTransform: 'uppercase',

    '& .scoreBox': {
      width: '48%',
      p: '1rem 2rem',
      [theme.breakpoints.up('sm')]: {
        p: '2rem 3rem',
      },
      gap: '1rem',
    },
  },

  '.board': {
    position: 'relative',
    width: 'clamp(31rem, 90vw, 63rem)',
    maxWidth: '63rem',
    mt: '1rem',
    [theme.breakpoints.up('mdlg')]: {
      mt: '4rem',
    },
    '.connectFour': {
      position: 'relative',
      '.white-grid': {
        position: 'relative',
        zIndex: 1,
      },
      '.black-grid': {
        position: 'absolute',
        top: '.3rem',
        left: 0,
        zIndex: -1,
      },
    },
    '.timer-container': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10,
      marginTop: '-3rem',
      [theme.breakpoints.up('sm')]: {
        marginTop: '-5rem',
      },
    },
    '.player-chip-block': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      position: 'relative',
    },
  },
});

export const bottomBarStyles = {
  width: '100%',
  position: 'absolute',
  bottom: 0,
  borderTopLeftRadius: '6rem',
  borderTopRightRadius: '6rem',
  zIndex: 0,
};
