import { Box, Theme } from '@mui/material';
import { scoreBoxContainerStyles } from './ScopeBox.styles';

interface ScoreBoxProps {
  Icon: JSX.Element;
  playerText: string;
  iconPlacement?: 'right' | 'left';
  reverseText?: boolean;
  score: number;
}

export default function ScoreBox(props: ScoreBoxProps) {
  return (
    <Box
      className='scoreBox'
      sx={[
        scoreBoxContainerStyles,
        (theme: Theme) => ({
          flexDirection: 'row',
          [theme.breakpoints.up('xs')]: {
            flexDirection: 'column',
          },
          [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
          },
          ...(props.reverseText && {
            [theme.breakpoints.up('sm')]: {
              flexDirection: 'row-reverse',
            },
          }),
        }),
      ]}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          ...(props.iconPlacement === 'right' && {
            top: '50%',
            right: 0,
            left: 'auto',
            transform: 'translate(50%, -50%)',
          }),
          ...(props.iconPlacement === 'left' && {
            top: '50%',
            right: 'auto',
            left: '0',
            transform: 'translate(-50%, -50%)',
          }),
        }}
      >
        {props.Icon}
      </Box>

      <p className='playerText'>{props.playerText}</p>
      <p className='score'>{props.score}</p>
    </Box>
  );
}
