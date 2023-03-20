import { scissors, paper, rock, lizard, spock } from './components/Game';
import { GAME_TYPES } from './types/gameTypes';

export const houseChoice = (): GAME_TYPES => {
  const choices = [scissors, paper, rock, lizard, spock];
  const random = Math.floor(Math.random() * 5);
  return choices[random];
};
