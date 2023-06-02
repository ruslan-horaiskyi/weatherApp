import { useCallback, useState } from 'react';
import 'modern-normalize';

import MoreInfo from './components/MoreInfo/MoreInfo';
import CardList from './components/CardList/CardList';

import './App.css';

const App = () => {
  const [focusedCard, setFocusedCard] = useState(null);

  const handleCardFocus = useCallback((date) => {
    setFocusedCard(date);
  }, []);

  const handleClose = useCallback(() => {
    setFocusedCard(null);
  }, []);

  console.log('App');

  return (
    <>
      <div className='container'>
        <CardList handleCardFocus={handleCardFocus} focusedCard={focusedCard} />
      </div>
      {focusedCard && <MoreInfo data={focusedCard} onClose={handleClose} />}
    </>
  );
};

export default App;
