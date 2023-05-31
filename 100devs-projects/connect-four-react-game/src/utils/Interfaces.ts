import { Player } from './Types';

export interface ClickAreaData {
  x: number;
  y: number;
  index: number;
  occupiedBy?: Player;
  fullColumn?: boolean;
  winningArea?: boolean;
}

export interface Coords {
  x: number;
  y: number;
  index: number;
}

export interface RankingInfo {
  index: number;
  ranking: number;
}
