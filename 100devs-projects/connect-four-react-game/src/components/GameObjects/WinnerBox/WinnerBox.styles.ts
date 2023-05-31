import { SxProps, Theme } from '@mui/material';
import { shadowStyle } from '../../../utils/Styles';

export const winnerBoxRootStyles: SxProps<Theme> = (theme) => ({
  ...shadowStyle(theme),
  backgroundColor: theme.palette.secondary.light,
  color: theme.palette.primary.dark,
  textAlign: 'center',
  py: '1.85rem',
  textTransform: 'uppercase',
  fontWeight: 700,
  lineHeight: 1,
  minWidth: '28.5rem',

  '.playerText': {
    my: 0,
    fontSize: '1.6rem',
  },
  '.result': {
    my: '.5rem',
    fontSize: '5.6rem',
  },

  button: {
    px: '2.2rem',
  },
});
