// import { useCallback, useState } from 'react';
import 'modern-normalize';
import CardList from './components/CardList/CardList';

import styles from './App.module.css';

const App = () => (
  // const [focusedCard, setFocusedCard] = useState(null);

  // const handleCardFocus = useCallback((date) => {
  //   setFocusedCard(date);
  // }, []);

  // const handleClose = useCallback(() => {
  //   setFocusedCard(null);
  // }, []);

  <div className={styles.container}>
    <CardList />
  </div>
);

export default App;
