import { Box, Stack, Typography } from '@mui/material';
import { Dispatch, forwardRef, SetStateAction } from 'react';
import { GameState } from '../../utils/Types';
import RectangleButton from '../Buttons/RectangleButton';
import { pauseMenuStyles } from './PauseMenu.styles';

interface PauseMenuProps {
  setGameState: Dispatch<SetStateAction<GameState>>;
  closeMenu: () => void;
  onRestartGameClick: () => void;
}

export default forwardRef((props: PauseMenuProps, _) => {
  return (
    <Box sx={pauseMenuStyles}>
      <Typography variant='h2'>Pause</Typography>
      <Stack spacing={3}>
        <RectangleButton className='continue-game-btn' variant='contained' onClick={props.closeMenu}>
          <Box component='span'>Continue Game</Box>
        </RectangleButton>
        <RectangleButton className='restart-game-btn' variant='contained' onClick={props.onRestartGameClick}>
          <Box component='span' className='text'>
            Restart
          </Box>
        </RectangleButton>
        <RectangleButton className='quit-game-btn' variant='contained' onClick={() => props.setGameState('main-menu')}>
          <Box component='span'>Quit Game</Box>
        </RectangleButton>
      </Stack>
    </Box>
  );
});
