import { useCallback, useState } from 'react';
import 'modern-normalize';

import MoreInfo from './components/MoreInfo/MoreInfo';
import CardList from './components/CardList/CardList';

import './App.css';

const App = () => {
  const [focusedCard, setFocusedCard] = useState(null);
  console.log('App');

  const handleCardFocus = useCallback(
    (date) => {
      setFocusedCard(date);
    },
    [setFocusedCard]
  );

  return (
    <>
      <div className='container'>
        <CardList handleCardFocus={handleCardFocus} focusedCard={focusedCard} />
      </div>
      {focusedCard && <MoreInfo data={focusedCard} />}
    </>
  );
};

export default App;
