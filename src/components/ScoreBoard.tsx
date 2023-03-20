import styled from 'styled-components';
import { LogoBonus } from '../assets';

type Props = {
  score: number;
};

const ScoreBoard = ({ score }: Props) => {
  return (
    <Container>
      <GameNames>
        <Image src={LogoBonus} alt='' />
      </GameNames>
      <Board>
        <p>Score</p>
        <h3>{score}</h3>
      </Board>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 12px 12px 24px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 3px solid rgba(255, 255, 255, 0.289199);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    /* width: 70%; */
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1440px) {
  }
`;

const GameNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 48px;
  height: 48px;

  @media (min-width: 768px) {
    width: 72px;
    height: 72px;
  }

  @media (min-width: 1024px) {
    width: 96px;
    height: 96px;
  }

  @media (min-width: 1440px) {
    width: 128px;
    height: 128px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Board = styled.div`
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  border-radius: 4px;

  p {
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 1.5625px;

    color: ${({ theme }) => theme.colors.neutral.scoreText};
  }

  h3 {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    /* identical to box height, or 100% */

    text-align: center;

    color: ${({ theme }) => theme.colors.neutral.darkText};
  }

  @media (min-width: 1024px) {
    padding: 24px 48px;
  }

  @media (min-width: 1440px) {
    padding: 16px 48px;

    h3 {
      font-size: 64px;
      line-height: 64px;
    }

    p {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export default ScoreBoard;
