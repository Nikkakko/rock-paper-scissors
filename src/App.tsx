import { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Game from './components/Game';
import RulesModal from './components/RulesModal';
import ScoreBoard from './components/ScoreBoard';
import Versus from './components/Versus';
import { GAME_TYPES } from './types/gameTypes';

const App = () => {
  const [score, setScore] = useState<number>(0);
  const [showRuels, setShowRules] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<GAME_TYPES | null>(null);

  return (
    <Main>
      <ScoreBoard score={score} />
      {!selectedItem ? (
        <Game setSelectedItem={(item: GAME_TYPES) => setSelectedItem(item)} />
      ) : (
        <Versus
          playAgain={() => setSelectedItem(null)}
          selectedItem={selectedItem}
          score={score}
          setScore={setScore}
        />
      )}
      <Rules>
        <Button
          onClick={() => setShowRules(true)}
          text='Rules'
          bgColor='transparent'
        />
        <RulesModal isOpen={showRuels} onClose={() => setShowRules(false)} />
      </Rules>
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 48px;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    padding: 64px;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1440px) {
    padding: 48px 333px;
  }
`;

const Rules = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* margin-top: 126px; */
`;
export default App;
