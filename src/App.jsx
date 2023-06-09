import { useCallback, useState } from 'react';
import 'modern-normalize';
import CardList from './components/CardList/CardList';
import './App.css';

const App = () => {
  console.log('App');

  const [focusedCard, setFocusedCard] = useState(null);

  const handleCardFocus = useCallback((date) => {
    setFocusedCard(date);
  }, []);

  const handleClose = useCallback(() => {
    setFocusedCard(null);
  }, []);

  return (
    <div className='container'>
      <CardList
        handleCardFocus={handleCardFocus}
        focusedCard={focusedCard}
        onClose={handleClose}
      />
    </div>
  );
};

export default App;
