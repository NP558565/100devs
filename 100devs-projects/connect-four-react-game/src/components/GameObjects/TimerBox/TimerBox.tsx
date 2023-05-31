import { Box } from '@mui/material';
import { forwardRef } from 'react';
import { mainColour } from '../../../CustomTheme';
import { mainTransition } from '../../../utils/Styles';
import { OpponentName } from '../../../utils/Types';
import TimerIcon from '../../Icons/TimerIcon';
import { timerBoxRootStyles } from './TimerBox.styles';

interface TimerBoxProps {
  playerColour: string;
  opponentName: OpponentName;
  timerSeconds: number;
}

export default forwardRef((props: TimerBoxProps, ref) => {
  const name = props.playerColour === mainColour.main ? 'Player 1' : props.opponentName;
  return (
    <Box ref={ref} style={{ color: props.playerColour }} sx={timerBoxRootStyles}>
      <div className='info' style={{ color: props.playerColour === mainColour.main ? mainColour.light : mainColour.dark, transition: `all ${mainTransition}` }}>
        <p className='playerText'>{name}'s Turn</p>
        <p className='timer'>{props.timerSeconds}s</p>
      </div>
      <TimerIcon />
    </Box>
  );
});
