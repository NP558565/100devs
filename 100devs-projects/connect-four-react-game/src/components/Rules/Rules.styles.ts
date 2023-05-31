import { SxProps, Theme } from '@mui/material';
import { shadowStyle } from '../../utils/Styles';

export const rulesRootStyles: SxProps<Theme> = (theme) => ({
  ...shadowStyle(theme),
  position: 'relative',
  mx: '2rem',
  backgroundColor: theme.palette.secondary.light,
  padding: '3.4rem 2rem',
  [theme.breakpoints.up('sm')]: {
    padding: '3.4rem',
  },
  borderRadius: '4rem',

  '.ruleBlock': {
    mt: '3rem',
  },

  h2: {
    textAlign: 'center',
  },

  h3: {
    my: '1.6rem',
  },

  '& p': {
    opacity: 0.8,
  },

  ol: {
    listStyleType: 'none',
    p: 0,
    li: {
      display: 'flex',
      counterIncrement: 'my-awesome-counter',
      mb: '1rem',
      '&:before': {
        content: 'counter(my-awesome-counter)',
        mr: '2rem',
        width: '1rem',
        fontWeight: 700,
      },

      span: {
        opacity: 0.8,
      },
    },
  },

  '& + .button-container': {
    display: 'flex',
    justifyContent: 'center',
    mt: '-4rem',

    '& .icon-button:hover circle': {
      '&:nth-of-type(1), &:nth-of-type(2)': {
        fill: theme.palette.primary.main,
      },
    },
  },
});
