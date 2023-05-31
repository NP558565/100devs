import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import CPUIcon from './components/Icons/CPUIcon';
import PlayerTwo from './components/Icons/PlayerTwo';
import MainMenu from './components/MainMenu/MainMenu';
import Rules from './components/Rules/Rules';
import themeOptions from './CustomTheme';
import { GameState, OpponentName } from './utils/Types';

const theme = createTheme(themeOptions);

function App() {
  const [gameState, setGameState] = useState<GameState>('main-menu');
  const [opponentName, setOpponentName] = useState<OpponentName>('Player 2');

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {gameState === 'main-menu' && <MainMenu setOpponentName={setOpponentName} setGameState={setGameState} />}
        {gameState === 'rules' && <Rules setGameState={setGameState} />}
        {gameState === 'game-board' && <GameBoard opponentIcon={opponentName === 'Player 2' ? <PlayerTwo /> : <CPUIcon />} opponentName={opponentName} setGameState={setGameState} />}
      </ThemeProvider>
    </>
  );
}

export default App;
