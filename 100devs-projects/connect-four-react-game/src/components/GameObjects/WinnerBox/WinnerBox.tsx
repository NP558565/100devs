import { Box } from '@mui/material';
import { forwardRef } from 'react';
import { OpponentName, Player } from '../../../utils/Types';
import PillButton from '../../Buttons/PillButton';
import { winnerBoxRootStyles } from './WinnerBox.styles';

interface WinnerBoxProps {
  currentPlayer: Player | null;
  opponentName: OpponentName;
  onPlayAgainClick: () => void;
  tieGame: boolean;
}

export default forwardRef((props: WinnerBoxProps, ref) => {
  return (
    <Box ref={ref} className='winner-box' sx={winnerBoxRootStyles}>
      <p className='playerText'>{props.currentPlayer === 'main' ? 'Player 1' : props.currentPlayer === 'opponent' ? props.opponentName : "It's a"}</p>
      <p className='result'>{props.tieGame ? 'Tie' : 'Wins'}</p>
      <PillButton onClick={props.onPlayAgainClick}>Play Again</PillButton>
    </Box>
  );
});
