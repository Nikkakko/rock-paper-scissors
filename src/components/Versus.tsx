import React, { useEffect, useState } from 'react';
import { GAME_TYPES } from '../types/gameTypes';
import styled from 'styled-components';
import GameIcon from './GameIcon';
import { houseChoice } from '../helpers';

type Props = {
  playAgain: () => void;
  selectedItem: GAME_TYPES;
  score: number;
  setScore: (score: number) => void;
};

const Versus = ({ playAgain, selectedItem, score, setScore }: Props) => {
  const [housePicked, setHousePicked] = useState<GAME_TYPES | null>(null);
  const [result, setResult] = useState<'win' | 'draw' | 'lose' | null>(null);

  useEffect(() => {
    if (!housePicked) {
      const housePick: GAME_TYPES = houseChoice();
      setTimeout(() => {
        setHousePicked(housePick);
      }, 1000);
    }

    if (housePicked) {
      if (housePicked.name === selectedItem.name) {
        setResult('draw');
      } else if (housePicked?.beats?.includes(selectedItem.name)) {
        setResult('lose');
      } else {
        setResult('win');
      }
    }

    if (result === 'win') {
      setScore(score + 1);
    } else if (result === 'lose') {
      setScore(score - 1);
    } else {
      setScore(score);
    }
  }, [housePicked, result, selectedItem.name]);
  return (
    <Wrapper>
      <Container>
        <YouPicked>
          <GameIcon item={selectedItem} />
          <Picked>You Picked</Picked>
        </YouPicked>

        <House>
          <HousePicked>
            {housePicked && <GameIcon item={housePicked} />}
          </HousePicked>
          <Picked>House Picked</Picked>
        </House>
      </Container>

      <ResultWrapper>
        {result && (
          <>
            <ResultStyle>
              {result === 'win' && 'You Win'}
              {result === 'lose' && 'You Lose'}
              {result === 'draw' && 'Draw'}
            </ResultStyle>

            <Button
              onClick={playAgain}
              disabled={result === null}
              result={result}
            >
              Play Again
            </Button>
          </>
        )}
      </ResultWrapper>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 95px;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 100%;
    justify-content: center;
    gap: 130px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const YouPicked = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;
`;

const Picked = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 32px;
  /* identical to box height, or 213% */
  text-align: center;
  letter-spacing: 1.875px;
  color: #ffffff;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
`;

const HousePicked = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  //transition: all 0.5s ease-in-out;
  transform: scale(0.5);
  animation: scale 1s ease-in-out forwards;

  @keyframes scale {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (min-width: 768px) {
    width: 145px;
    height: 148px;
  }
`;

const House = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
  }
  gap: 17px;
`;

const ResultWrapper = styled.div`
  margin-top: 62px;
  margin-bottom: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ResultStyle = styled.p`
  font-weight: 700;
  font-size: 56px;
  line-height: 67px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  text-transform: uppercase;
`;

const Button = styled.button<{
  result: 'win' | 'draw' | 'lose' | null;
}>`
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  border-radius: 8px;
  text-transform: uppercase;
  padding: 15px 60px;
  color: #3b4262;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.5px;
  border: 0;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background: linear-gradient(0deg, #ffffff 0%, #f3f3f3 100%);
    // color based on result
    color: ${props => {
      if (props.result === 'win') {
        return '#4664F4';
      } else if (props.result === 'lose') {
        return '#DD3F3F';
      } else {
        return '#3b4262';
      }
    }};
  }
`;

export default Versus;
