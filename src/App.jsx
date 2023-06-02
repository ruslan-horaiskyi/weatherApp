import { useCallback, useState } from 'react';
import 'modern-normalize';

import MoreInfo from './components/MoreInfo/MoreInfo';
import CardList from './components/CardList/CardList';

import './App.css';

const App = () => {
  console.log('App');
  const [focusedCard, setFocusedCard] = useState(null);

  const handleCardFocus = useCallback(
    (date) => {
      setFocusedCard(date);
    },
    [setFocusedCard]
  );

  const handleCloseMoreInfo = useCallback(() => {
    setFocusedCard(null);
  }, [setFocusedCard]);

  return (
    <>
      <div className='container'>
        <CardList handleCardFocus={handleCardFocus} focusedCard={focusedCard} />
      </div>
      {focusedCard && (
        <MoreInfo data={focusedCard} onClose={handleCloseMoreInfo} />
      )}
    </>
  );
};

export default App;
