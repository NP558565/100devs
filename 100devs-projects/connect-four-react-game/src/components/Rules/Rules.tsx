import { Box, Typography, IconButton } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { GameState } from '../../utils/Types';
import AcceptIcon from '../Icons/AcceptIcon';
import { rulesRootStyles } from './Rules.styles';
import Fade from '@mui/material/Fade';

interface RulesProps {
  setGameState: Dispatch<SetStateAction<GameState>>;
}

export default function Rules(props: RulesProps) {
  function onAcceptClick() {
    props.setGameState('main-menu');
  }
  return (
    <Fade in={true}>
      <Box>
        <Box maxWidth={480} sx={rulesRootStyles}>
          <Typography variant='h2'>Rules</Typography>
          <div className='ruleBlock'>
            <Typography variant='h3'>Objective</Typography>
            <Typography>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</Typography>
          </div>
          <div className='ruleBlock'>
            <Typography variant='h3'>How to play</Typography>
            <ol>
              <li>
                <span>Red goes first in the first game.</span>
              </li>
              <li>
                <span>Players must alternate turns, and only one disc can be dropped in each turn.</span>
              </li>
              <li>
                <span>The game ends when there is a 4-in-a-row or a stalemate.</span>
              </li>
              <li>
                <span>The starter of the previous game goes second on the next game.</span>
              </li>
            </ol>
          </div>
        </Box>
        <div className='button-container'>
          <IconButton className='icon-button' aria-label='accept' onClick={onAcceptClick}>
            <AcceptIcon />
          </IconButton>
        </div>
      </Box>
    </Fade>
  );
}
