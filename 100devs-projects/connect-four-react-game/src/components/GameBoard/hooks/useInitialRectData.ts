import { useEffect, useState } from 'react';
import { COLUMNS, ROWS } from '../../../utils/constants';
import { ClickAreaData } from '../../../utils/Interfaces';
import { Player } from '../../../utils/Types';
import { generateInitialRectDataArray } from '../helpers';

export function useInitialRectData() {
  const [allClickAreasData, setAllClickAreasData] = useState<ClickAreaData[]>([]);
  const [startingPlayer, setStartingPlayer] = useState<Player>('main');
  const [currentPlayer, setCurrentPlayer] = useState<Player>(startingPlayer);

  useEffect(() => {
    const initRectData = generateInitialRectDataArray(COLUMNS, ROWS);
    setAllClickAreasData(initRectData);
    setCurrentPlayer(startingPlayer);
  }, [startingPlayer]);

  return {
    allClickAreasData,
    setAllClickAreasData,
    startingPlayer,
    setStartingPlayer,
    currentPlayer,
    setCurrentPlayer,
  };
}
