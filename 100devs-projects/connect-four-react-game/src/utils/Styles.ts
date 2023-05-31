import { Theme } from '@mui/material';

export const shadowStyle = (theme: Theme) => ({
  borderRadius: '2rem',
  borderWidth: 3,
  borderColor: theme.palette.primary.dark,
  borderStyle: 'solid',
  boxShadow: `0px 10px 0px 0px ${theme.palette.primary.dark}`,
});

export const mainTransition = '.25s cubic-bezier(0.4, 0, 0.2, 1)';
