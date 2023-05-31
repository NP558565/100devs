import { RankingInfo, ClickAreaData } from '../../../utils/Interfaces';
import { Player } from '../../../utils/Types';

export function getInitialCPUtargets(clickAreas: ClickAreaData[], columns: number) {
  const output: ClickAreaData[] = [];
  for (let col = 0; col < columns; col++) {
    let currentSelectedClickArea: ClickAreaData = { ...clickAreas[col] };
    if (!currentSelectedClickArea.fullColumn) {
      let counter = col;
      while (currentSelectedClickArea && clickAreas[counter + columns]) {
        if (!clickAreas[counter + columns].occupiedBy) {
          currentSelectedClickArea = clickAreas[counter + columns];
        }
        counter += columns;
      }
      output.push(currentSelectedClickArea);
    }
  }
  return output;
}

export function assignChipToLowestSlotPossibleIndex(index: number, clickAreas: ClickAreaData[], cols: number, rows: number) {
  let indexCounter = index;
  if (clickAreas[indexCounter]?.occupiedBy) {
    while (indexCounter >= 0 && clickAreas[indexCounter]?.occupiedBy) {
      indexCounter -= cols;
    }
  } else {
    while (indexCounter + cols < cols * rows && !clickAreas[indexCounter + cols]?.occupiedBy) {
      indexCounter += cols;
    }
  }
  return indexCounter;
}

export function isTieGame(clickAreas: ClickAreaData[], cols: number, rows: number) {
  const fullColumns = clickAreas.filter((clickArea) => {
    return clickArea.fullColumn;
  });
  return fullColumns.length === cols * rows;
}

export function verticalMatches(focusedClickArea: ClickAreaData, clickAreasData: ClickAreaData[], cols: number) {
  const selectedClickAreas: ClickAreaData[] = [];
  if (focusedClickArea.occupiedBy) {
    let currentSelectedClickArea: ClickAreaData = { ...focusedClickArea };
    while (currentSelectedClickArea && focusedClickArea.occupiedBy === currentSelectedClickArea.occupiedBy) {
      selectedClickAreas.push(currentSelectedClickArea);
      currentSelectedClickArea = clickAreasData[currentSelectedClickArea.index + cols];
    }
  }
  return selectedClickAreas;
}

export function horizonalMatches(focusedClickArea: ClickAreaData, clickAreasData: ClickAreaData[], checkedForAdditionMatch = false) {
  const selectedClickAreas: ClickAreaData[] = [];
  if (focusedClickArea.occupiedBy) {
    let currentSelectedClickArea: ClickAreaData = { ...focusedClickArea };
    while (currentSelectedClickArea && focusedClickArea.occupiedBy === currentSelectedClickArea.occupiedBy && focusedClickArea.y === currentSelectedClickArea.y) {
      selectedClickAreas.push(currentSelectedClickArea);
      currentSelectedClickArea = clickAreasData[currentSelectedClickArea.index - 1];
    }

    currentSelectedClickArea = clickAreasData[focusedClickArea.index + 1];
    while (currentSelectedClickArea && focusedClickArea.occupiedBy === currentSelectedClickArea.occupiedBy && focusedClickArea.y === currentSelectedClickArea.y) {
      selectedClickAreas.push(currentSelectedClickArea);
      currentSelectedClickArea = clickAreasData[currentSelectedClickArea.index + 1];
    }
  }

  if (checkedForAdditionMatch && selectedClickAreas.length === 3) {
    const firstArea = selectedClickAreas[0];
    const lastArea = selectedClickAreas[selectedClickAreas.length - 1];
    if (Math.abs(firstArea.index - lastArea.index) === 2) {
      let index = 0;
      if (firstArea.index > lastArea.index) {
        index = lastArea.index - 1;
      } else {
        index = lastArea.index + 1;
      }
      const newArea = clickAreasData.find((area) => area.index === index);
      if (newArea && !newArea.occupiedBy && newArea.y === firstArea.y) {
        selectedClickAreas.push(newArea);
      }
    }
  }

  return selectedClickAreas;
}

function checkDiagonalBoundariesAndGetClickArea(clickArea1: ClickAreaData, clickArea2: ClickAreaData) {
  if (clickArea1 && clickArea2 && clickArea1.y === clickArea2.y) {
    return clickArea2;
  } else {
    return { ...clickArea2, occupiedBy: undefined };
  }
}

export function diagonalLeftMatches(focusedClickArea: ClickAreaData, clickAreasData: ClickAreaData[], cols: number, checkedForAdditionMatch = false) {
  const selectedClickAreas: ClickAreaData[] = [];
  if (focusedClickArea.occupiedBy) {
    let currentSelectedClickArea: ClickAreaData = { ...focusedClickArea };
    while (currentSelectedClickArea && focusedClickArea.occupiedBy === currentSelectedClickArea.occupiedBy) {
      selectedClickAreas.push(currentSelectedClickArea);
      const clickArea1 = clickAreasData[currentSelectedClickArea.index - cols];
      const clickArea2 = clickAreasData[currentSelectedClickArea.index - cols - 1];
      currentSelectedClickArea = checkDiagonalBoundariesAndGetClickArea(clickArea1, clickArea2);
    }

    const clickArea1 = clickAreasData[focusedClickArea.index + cols];
    const clickArea2 = clickAreasData[focusedClickArea.index + cols + 1];
    currentSelectedClickArea = checkDiagonalBoundariesAndGetClickArea(clickArea1, clickArea2);
    while (currentSelectedClickArea && focusedClickArea.occupiedBy === currentSelectedClickArea.occupiedBy) {
      selectedClickAreas.push(currentSelectedClickArea);
      const clickArea1 = clickAreasData[currentSelectedClickArea.index + cols];
      const clickArea2 = clickAreasData[currentSelectedClickArea.index + cols + 1];
      currentSelectedClickArea = checkDiagonalBoundariesAndGetClickArea(clickArea1, clickArea2);
    }
  }
  return selectedClickAreas;
}

export function diagonalRightMatches(focusedClickArea: ClickAreaData, clickAreasData: ClickAreaData[], cols: number) {
  const selectedClickAreas: ClickAreaData[] = [];
  if (focusedClickArea.occupiedBy) {
    let currentSelectedClickArea: ClickAreaData = { ...focusedClickArea };
    while (currentSelectedClickArea && focusedClickArea.occupiedBy === currentSelectedClickArea.occupiedBy) {
      selectedClickAreas.push(currentSelectedClickArea);
      const clickArea1 = clickAreasData[currentSelectedClickArea.index + cols];
      const clickArea2 = clickAreasData[currentSelectedClickArea.index + cols - 1];
      currentSelectedClickArea = checkDiagonalBoundariesAndGetClickArea(clickArea1, clickArea2);
    }

    const clickArea1 = clickAreasData[focusedClickArea.index - cols];
    const clickArea2 = clickAreasData[focusedClickArea.index - cols + 1];
    currentSelectedClickArea = checkDiagonalBoundariesAndGetClickArea(clickArea1, clickArea2);
    while (currentSelectedClickArea && focusedClickArea.occupiedBy === currentSelectedClickArea.occupiedBy) {
      selectedClickAreas.push(currentSelectedClickArea);
      const clickArea1 = clickAreasData[currentSelectedClickArea.index - cols];
      const clickArea2 = clickAreasData[currentSelectedClickArea.index - cols + 1];
      currentSelectedClickArea = checkDiagonalBoundariesAndGetClickArea(clickArea1, clickArea2);
    }
  }
  return selectedClickAreas;
}

function removeDuplicates(duplicates: ClickAreaData[]) {
  const set = new Set<number>();
  const output: ClickAreaData[] = [];

  duplicates.forEach((clickArea) => {
    if (!set.has(clickArea.index)) {
      set.add(clickArea.index);
      output.push(clickArea);
    }
  });
  return output;
}

export function processForWinnersOrSwap(currentClickArea: ClickAreaData, clickAreasData: ClickAreaData[], cols: number, winningLength: number) {
  const matches: ClickAreaData[] = [];
  const vertMatches = verticalMatches(currentClickArea, clickAreasData, cols);
  const horizMatches = horizonalMatches(currentClickArea, clickAreasData);
  const diagLeftMatches = diagonalLeftMatches(currentClickArea, clickAreasData, cols);
  const diagRightMatches = diagonalRightMatches(currentClickArea, clickAreasData, cols);

  if (vertMatches.length >= winningLength) {
    matches.push(...vertMatches);
  }
  if (horizMatches.length >= winningLength) {
    matches.push(...horizMatches);
  }

  if (diagLeftMatches.length >= winningLength) {
    matches.push(...diagLeftMatches);
  }

  if (diagRightMatches.length >= winningLength) {
    matches.push(...diagRightMatches);
  }

  const finalMatches = removeDuplicates(matches);

  if (finalMatches.length >= winningLength) {
    const updatedClicks = clickAreasData.map((clickArea, i) => {
      const winnerClick: ClickAreaData | undefined = finalMatches.find((winningClick) => winningClick.index === i);
      if (winnerClick) {
        winnerClick.winningArea = true;
        return winnerClick;
      }
      return clickArea;
    });
    return updatedClicks;
  }

  return finalMatches;
}

export function processCPUchoiceRankings(currentClickArea: ClickAreaData, clickAreasData: ClickAreaData[], cols: number, winningLength: number) {
  const currentCpuClickArea: ClickAreaData = { ...currentClickArea };
  const currentPlayerClickArea: ClickAreaData = { ...currentClickArea };
  currentPlayerClickArea.occupiedBy = 'main';
  currentCpuClickArea.occupiedBy = 'opponent';
  let defaultRanking = 1;
  const verticalCpuMatchesLength = verticalMatches(currentCpuClickArea, clickAreasData, cols).length;
  const verticalPlayerMatchesLength = verticalMatches(currentPlayerClickArea, clickAreasData, cols).length;
  const horizonalCpuMatchesLength = horizonalMatches(currentCpuClickArea, clickAreasData).length;
  const horizonalPlayerMatchesLength = horizonalMatches(currentPlayerClickArea, clickAreasData).length;
  const diagonalCpuLeftMatchesLength = diagonalLeftMatches(currentCpuClickArea, clickAreasData, cols).length;
  const diagonalPlayerLeftMatchesLength = diagonalLeftMatches(currentPlayerClickArea, clickAreasData, cols).length;
  const diagonalCpuRightMatchesLength = diagonalRightMatches(currentCpuClickArea, clickAreasData, cols).length;
  const diagonalPlayerRightMatchesLength = diagonalRightMatches(currentPlayerClickArea, clickAreasData, cols).length;

  const matchesCPULength = Math.max(verticalCpuMatchesLength, horizonalCpuMatchesLength, diagonalCpuLeftMatchesLength, diagonalCpuRightMatchesLength);
  const matchesPlayerLength = Math.max(verticalPlayerMatchesLength, horizonalPlayerMatchesLength, diagonalPlayerLeftMatchesLength, diagonalPlayerRightMatchesLength);

  if (matchesCPULength >= winningLength) {
    defaultRanking = 6;
  } else if (matchesPlayerLength >= winningLength) {
    defaultRanking = 5;
  } else if (checkForEasyPlayerWins(currentPlayerClickArea, clickAreasData, winningLength)) {
    defaultRanking = 4;
  } else if (checkNextMoves('main', currentCpuClickArea, clickAreasData, cols, winningLength)) {
    defaultRanking = 0;
  } else if (checkNextMoves('opponent', currentCpuClickArea, clickAreasData, cols, winningLength)) {
    defaultRanking = 1;
  } else if ((matchesCPULength || matchesPlayerLength) >= 3 && checkIsAdjacentColEmpty(currentCpuClickArea, clickAreasData, cols)) {
    defaultRanking = 3;
  } else if (matchesCPULength >= 2) {
    defaultRanking = 2;
  }
  return defaultRanking;
}

function checkNextMoves(player: Player, currentCpuClickArea: ClickAreaData, clickAreasData: ClickAreaData[], cols: number, winningLength: number) {
  const modifiedClickAreasData = [...clickAreasData];
  const nextMoveClickArea = { ...modifiedClickAreasData[currentCpuClickArea.index - cols] };
  if (nextMoveClickArea) {
    nextMoveClickArea.occupiedBy = player;
    const horizonalMoves = horizonalMatches(nextMoveClickArea, clickAreasData);
    if (horizonalMoves.length >= winningLength) {
      return true;
    }
    const diagonalLeftMoves = diagonalLeftMatches(nextMoveClickArea, clickAreasData, cols);
    if (diagonalLeftMoves.length >= winningLength) {
      return true;
    }
    const diagonalRightMoves = diagonalRightMatches(nextMoveClickArea, clickAreasData, cols);
    if (diagonalRightMoves.length >= winningLength) {
      return true;
    }
  }
  return false;
}

function checkIsAdjacentColEmpty(currentClickArea: ClickAreaData, clickAreasData: ClickAreaData[], cols: number) {
  const leftClickArea = clickAreasData[currentClickArea.index - 1];
  const rightClickArea = clickAreasData[currentClickArea.index + 1];
  const topClickArea = clickAreasData[currentClickArea.index - cols];
  const higherTopClickArea = clickAreasData[currentClickArea.index - cols * 2];
  if ((leftClickArea && currentClickArea.y === leftClickArea.y && !leftClickArea.occupiedBy) || (rightClickArea && currentClickArea.y === rightClickArea.y && !rightClickArea.occupiedBy)) {
    return true;
  }
  if (topClickArea && higherTopClickArea) {
    return true;
  }
  return false;
}

function checkForEasyPlayerWins(playerClickArea: ClickAreaData, clickAreasData: ClickAreaData[], winningLength: number) {
  return horizonalMatches(playerClickArea, clickAreasData, true).length >= winningLength;
}

export function getHighestRankings(rankings: RankingInfo[]) {
  let maxRatingValue = 0;
  return rankings.reduce<RankingInfo[]>((accumulator, currentValue) => {
    if (maxRatingValue < currentValue.ranking) {
      accumulator = [currentValue];
      maxRatingValue = currentValue.ranking;
    } else if (maxRatingValue === currentValue.ranking) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}

export function getRankedIndexforCPU(rankings: RankingInfo[]) {
  return rankings[Math.floor(Math.random() * rankings.length)].index;
}

export function rankToCenter(rankings: RankingInfo[], cols: number) {
  if (rankings.length === cols) {
    const filteredRanks = rankings.filter((r) => r.ranking < 4);
    if (filteredRanks.length === cols) {
      return true;
    }
  }
  return false;
}
