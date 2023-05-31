import { useCallback, useEffect, useState } from 'react';
import { Player } from '../../../utils/Types';

export function useWinner(currentPlayer: Player, seconds: number) {
  const [winner, setWinner] = useState<Player | null>(null);
  const [opponentScore, setOpponentScore] = useState<number>(0);

  const addWinner = useCallback(() => {
    if (currentPlayer === 'main') {
      setWinner('opponent');
    } else {
      setWinner('main');
    }
  }, [currentPlayer]);

  useEffect(() => {
    if (seconds <= 0) {
      addWinner();
    }
  }, [addWinner, seconds]);

  return { winner, setWinner, opponentScore, setOpponentScore };
}
