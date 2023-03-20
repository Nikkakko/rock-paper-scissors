import styled from 'styled-components';
import {
  PentagonIcon,
  IconLizard,
  IconPaper,
  IconRock,
  IconScissors,
  IconSpock,
} from '../svgs';
import GameIcon from './GameIcon';
import { Pentagon } from '../assets';
import { GAME_TYPES } from '../types/gameTypes';

export const scissors: GAME_TYPES = {
  name: 'scissors',
  icon: <IconScissors />,
  beats: ['paper', 'lizard'],
  colorTop: '#EB9F0E',
  colorBottom: '#C76C1B',
};

export const paper: GAME_TYPES = {
  name: 'paper',
  icon: <IconPaper />,
  beats: ['rock', 'spock'],
  colorTop: '#4664F4',
  colorBottom: '#2A45C2',
};
export const spock: GAME_TYPES = {
  name: 'spock',
  icon: <IconSpock />,
  beats: ['scissors', 'rock'],
  colorTop: '#3FB7CD',
  colorBottom: '#2D8DAB',
};

export const lizard: GAME_TYPES = {
  name: 'lizard',
  icon: <IconLizard />,
  beats: ['spock', 'paper'],
  colorTop: '#834EE3',
  colorBottom: '#5F37A8',
};

export const rock: GAME_TYPES = {
  name: 'rock',
  icon: <IconRock />,
  beats: ['lizard', 'scissors'],
  colorTop: '#DB2E4D',
  colorBottom: '#9D1634',
};

type Props = {
  setSelectedItem: (item: GAME_TYPES) => void;
};

const Game = ({ setSelectedItem }: Props) => {
  return (
    <GameContainer>
      <GameIcon item={scissors} onClick={() => setSelectedItem(scissors)} />
      <Middle>
        <GameIcon item={spock} onClick={() => setSelectedItem(spock)} />
        <GameIcon item={paper} onClick={() => setSelectedItem(paper)} />
      </Middle>
      <Bottom>
        <GameIcon item={lizard} onClick={() => setSelectedItem(lizard)} />
        <GameIcon item={rock} onClick={() => setSelectedItem(rock)} />
      </Bottom>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  width: 311px;
  height: 311px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 95px;
  margin-bottom: 126px;
  background: url(${Pentagon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 227px 227px;
  @media (min-width: 768px) {
    width: 472px;
    margin-top: 120px;
    margin-bottom: 130px;
    background-size: 345px 345px;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const Middle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -11px;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 33px;
  margin-top: 26px;
`;

export default Game;
