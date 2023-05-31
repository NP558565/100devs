import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import PlayerVsPlayerIcon from '../Icons/PlayerVsPlayerIcon';
import PlayerVsCpuIcon from '../Icons/PlayerVsCpuIcon';
import Logo from '../Logo/Logo';
import { MainMenuContainerStyle } from './MainMenu.styles';
import RectangleButton from '../Buttons/RectangleButton';
import { Fade, GlobalStyles } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { GameState, OpponentName } from '../../utils/Types';

interface MainMenuProps {
  setGameState: Dispatch<SetStateAction<GameState>>;
  setOpponentName: Dispatch<SetStateAction<OpponentName>>;
}

export default function MainMenu(props: MainMenuProps) {
  const menuGlobalStyles = (
    <GlobalStyles
      styles={(theme) => ({
        body: {
          backgroundColor: theme.palette.primary.light,
          [theme.breakpoints.up('sm')]: {
            backgroundColor: theme.palette.primary.main,
          },
        },
      })}
    />
  );

  function onGameRulesClicked() {
    props.setGameState('rules');
  }

  function onPlayer2BtnClicked() {
    props.setOpponentName('Player 2');
    props.setGameState('game-board');
  }

  function onCpuBtnClicked() {
    props.setOpponentName('CPU');
    props.setGameState('game-board');
  }

  return (
    <>
      {menuGlobalStyles}
      <Fade in={true}>
        <Box maxWidth={480} display='flex' flexDirection='column' alignItems='center' sx={MainMenuContainerStyle} borderRadius={10}>
          <Box component='header' mb={7.5}>
            <h1>
              <Logo />
            </h1>
          </Box>
          <Stack component='main' spacing={3}>
            <RectangleButton className='playVsCpu' onClick={onCpuBtnClicked} variant='contained' endIcon={<PlayerVsCpuIcon />}>
              <Box component='span'>Play vs CPU</Box>
            </RectangleButton>
            <RectangleButton className='playVsPlayer' onClick={onPlayer2BtnClicked} variant='contained' endIcon={<PlayerVsPlayerIcon />}>
              <Box component='span' className='text'>
                Play vs Player
              </Box>
            </RectangleButton>
            <RectangleButton className='gameRules' onClick={onGameRulesClicked} variant='contained'>
              <Box component='span'>Game Rules</Box>
            </RectangleButton>
          </Stack>
        </Box>
      </Fade>
    </>
  );
}
