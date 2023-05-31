import { Box, Fade, Slide } from '@mui/material';
import { useRef, useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import { mainColour } from '../../CustomTheme';
import { OpponentName, Player } from '../../utils/Types';
import MarkerIcon from '../Icons/MarkerIcon';
import PlayerChip from '../GameObjects/PlayerChip/PlayerChip';
import ConnectFourGridWhite from '../GameObjects/BoardGrid/ConnectFourGridWhite';
import { mainGridStyles } from './GameGrid.styles';
import { RankingInfo, ClickAreaData } from '../../utils/Interfaces';
import { assignChipToLowestSlotPossibleIndex, getHighestRankings, getInitialCPUtargets, getRankedIndexforCPU, isTieGame, processCPUchoiceRankings, processForWinnersOrSwap, rankToCenter } from './helpers';
import { COLUMNS, ROWS, WINNING_LENGTH } from '../../utils/constants';

interface ConnectFourGridProps {
  currentPlayer: Player;
  playerChips: JSX.Element[];
  allClickAreasData: ClickAreaData[];
  setCurrentPlayer: Dispatch<SetStateAction<Player>>;
  setPlayerChips: Dispatch<SetStateAction<JSX.Element[]>>;
  setAllClickAreasData: Dispatch<SetStateAction<ClickAreaData[]>>;
  winner: Player | null;
  setWinner: Dispatch<SetStateAction<Player | null>>;
  clearTimer: () => void;
  pauseTimer: () => void;
  timerSeconds: number;
  setDisableUI: Dispatch<SetStateAction<boolean>>;
  disableUI: boolean;
  setOpponentScore: Dispatch<SetStateAction<number>>;
  setMainPlayerScore: Dispatch<SetStateAction<number>>;
  setTieGame: Dispatch<SetStateAction<boolean>>;
  setGameEnded: Dispatch<SetStateAction<boolean>>;
  setGameRestarting: Dispatch<SetStateAction<boolean>>;
  gameRestarting: boolean;
  opponentName: OpponentName;
  gameEnded: boolean;
  menuOpened: boolean;
}

export default function GameGrid(props: ConnectFourGridProps) {
  const {
    setAllClickAreasData,
    allClickAreasData,
    currentPlayer,
    opponentName,
    setCurrentPlayer,
    setPlayerChips,
    setDisableUI,
    disableUI,
    winner,
    playerChips,
    timerSeconds,
    setTieGame,
    setWinner,
    setMainPlayerScore,
    setOpponentScore,
    clearTimer,
    pauseTimer,
    setGameEnded,
    gameEnded,
    menuOpened,
    setGameRestarting,
    gameRestarting,
  } = props;
  const containerRef = useRef(null);
  const initClickAreaRef = useRef<ClickAreaData | null>(null);
  const lowestClickAreaRef = useRef<ClickAreaData | null>(null);
  const [initCpu, setInitCpu] = useState(false);
  const [markerPos, setMarkerPos] = useState<number>(-100000000);

  function onMouseOverPiece(clickAreaData: ClickAreaData) {
    if (!winner) {
      if (!clickAreaData.fullColumn) {
        setMarkerPos(clickAreaData.x + 24.86);
      }
    }
  }

  function onMouseLeavePiece(clickAreaData: ClickAreaData) {
    if (!clickAreaData.fullColumn) {
      setMarkerPos(-100000000);
    }
  }

  function onAreaClicked(selectedClickAreaData: ClickAreaData) {
    setGameRestarting(false);
    if (disableUI || selectedClickAreaData.fullColumn || (currentPlayer === 'opponent' && opponentName === 'CPU') || gameEnded) {
      return;
    }
    pauseTimer();
    initClickAreaRef.current = selectedClickAreaData;
    setDisableUI(true);
  }

  const swapToNextPlayer = useCallback(
    (player: Player) => {
      if (!gameRestarting) {
        if (player === 'main') {
          setCurrentPlayer('opponent');
        } else {
          setCurrentPlayer('main');
        }
      } else {
        setPlayerChips([]);
      }
    },
    [gameRestarting, setCurrentPlayer, setPlayerChips]
  );

  useEffect(() => {
    setDisableUI(false);
    clearTimer();
    setInitCpu(false);
  }, [clearTimer, setDisableUI, currentPlayer]);

  useEffect(() => {
    if (menuOpened) {
      pauseTimer();
    }
  }, [menuOpened, pauseTimer]);

  useEffect(() => {
    if (winner) {
      if (winner === 'main') {
        setMainPlayerScore((prevScore) => prevScore + 1);
      } else {
        setOpponentScore((prevScore) => prevScore + 1);
      }
      setGameEnded(true);
    }
  }, [winner, setMainPlayerScore, setOpponentScore, setGameEnded]);

  const checkGameStatus = useCallback(
    (selectedClickAreaData: ClickAreaData | null) => {
      lowestClickAreaRef.current = null;
      const isTied = isTieGame(allClickAreasData, COLUMNS, ROWS);
      if (selectedClickAreaData && selectedClickAreaData.occupiedBy) {
        const matches = processForWinnersOrSwap(selectedClickAreaData, allClickAreasData, COLUMNS, WINNING_LENGTH);
        if (matches.length >= WINNING_LENGTH) {
          setWinner(selectedClickAreaData.occupiedBy);
          setAllClickAreasData(matches);
        } else if (isTied) {
          setTieGame(true);
          return;
        } else {
          swapToNextPlayer(selectedClickAreaData.occupiedBy);
        }
      }
    },
    [allClickAreasData, setAllClickAreasData, setTieGame, setWinner, swapToNextPlayer]
  );

  useEffect(() => {
    if (lowestClickAreaRef.current) {
      const currentClickArea: ClickAreaData = { ...lowestClickAreaRef.current };
      const x = currentClickArea.x + 44;
      const y = currentClickArea.y + 44;

      setPlayerChips((oldValues) => {
        return [
          ...oldValues,
          <Slide key={new Date().getTime()} onEntered={() => checkGameStatus(currentClickArea)} in={timerSeconds > 0} timeout={500} container={containerRef.current}>
            <PlayerChip colour={mainColour[currentPlayer]} x={x} y={y} />
          </Slide>,
        ];
      });
    }
  }, [allClickAreasData, currentPlayer, timerSeconds, setPlayerChips, checkGameStatus]);

  const applyFullColumnToRects = (columnOfClickAreaData: ClickAreaData[], indexCounter: number) => {
    const output = [...columnOfClickAreaData];

    while (indexCounter + COLUMNS < COLUMNS * ROWS) {
      output[indexCounter + COLUMNS].fullColumn = true;
      indexCounter += COLUMNS;
    }
    return output;
  };

  useEffect(() => {
    if (initClickAreaRef.current) {
      const newIndex = assignChipToLowestSlotPossibleIndex(initClickAreaRef.current.index, allClickAreasData, COLUMNS, ROWS);
      let newClickAreas = [...allClickAreasData];
      initClickAreaRef.current = null;
      newClickAreas[newIndex].occupiedBy = currentPlayer;
      lowestClickAreaRef.current = newClickAreas[newIndex];
      if (lowestClickAreaRef.current.index < COLUMNS) {
        // full column
        setMarkerPos(-100000000);
        newClickAreas = applyFullColumnToRects(newClickAreas, lowestClickAreaRef.current.index - COLUMNS);
      }
      setAllClickAreasData(newClickAreas);
    }
  }, [allClickAreasData, currentPlayer, disableUI, setAllClickAreasData]);

  const startCPUlogic = useCallback(
    (allClickAreasData: ClickAreaData[]) => {
      const clickAreas = getInitialCPUtargets(allClickAreasData, COLUMNS);
      const rankings: RankingInfo[] = clickAreas.map((clickArea) => {
        const ranking = processCPUchoiceRankings(clickArea, allClickAreasData, COLUMNS, WINNING_LENGTH);
        return {
          index: clickArea.index,
          ranking,
        };
      });
      const isCenterColumnPriority = rankToCenter(rankings, COLUMNS);
      let rankedIndex = 0;
      if (isCenterColumnPriority) {
        rankedIndex = rankings[3].index;
      } else {
        const highestRankings = getHighestRankings(rankings);
        rankedIndex = getRankedIndexforCPU(highestRankings);
      }

      const bestRanked = allClickAreasData[rankedIndex];
      const bestRect: ClickAreaData = { ...allClickAreasData[bestRanked.index] };
      bestRect.occupiedBy = 'opponent';
      pauseTimer();
      initClickAreaRef.current = bestRect;
      setDisableUI(true);
    },
    [pauseTimer, setDisableUI]
  );

  useEffect(() => {
    if (opponentName === 'CPU' && currentPlayer === 'opponent' && initCpu) {
      setInitCpu(false);
      startCPUlogic(allClickAreasData);
    }
  }, [opponentName, currentPlayer, allClickAreasData, startCPUlogic, initCpu]);

  useEffect(() => {
    if (opponentName === 'CPU' && currentPlayer === 'opponent') {
      setInitCpu(true);
    }
  }, [opponentName, currentPlayer]);

  return (
    <>
      <Box
        ref={containerRef}
        sx={[
          mainGridStyles,
          (theme) => ({
            [theme.breakpoints.up('mdlg')]: {
              display: disableUI || winner || (currentPlayer === 'opponent' && opponentName === 'CPU') ? 'none' : 'block',
            },
            left: markerPos,
          }),
        ]}
      >
        <MarkerIcon colour={mainColour[currentPlayer]} />
      </Box>

      <svg className='white-grid' width='100%' height='100%' viewBox='0 0 632 584' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <rect id='clickArea' width='100%' height='100%' fill='none' rx='40' ry='40' stroke='black' />
          <clipPath id='clip'>
            <use xlinkHref='#clickArea' />
          </clipPath>
        </defs>
        <use xlinkHref='#clickArea' />
        <g clipPath='url(#clip)'>
          {playerChips}

          <ConnectFourGridWhite />

          {allClickAreasData.map((data) => {
            return (
              <g key={data.index}>
                {data.winningArea && (
                  <Fade in={true}>
                    <Box component='circle' cx={data.x + 44} cy={data.y + 46} r='14' stroke='white' strokeWidth='6' fill='transparent'></Box>
                  </Fade>
                )}
                <Box
                  component='rect'
                  sx={{
                    '@media (hover: hover) and (pointer: fine)': {
                      cursor: data.fullColumn || disableUI || winner ? 'default' : 'pointer',
                    },
                  }}
                  onClick={() => onAreaClicked(data)}
                  onMouseOver={() => onMouseOverPiece(data)}
                  onMouseLeave={() => onMouseLeavePiece(data)}
                  width='88px'
                  height='88px'
                  x={data.x}
                  y={data.y}
                  opacity='0'
                />
              </g>
            );
          })}
        </g>
      </svg>
    </>
  );
}
