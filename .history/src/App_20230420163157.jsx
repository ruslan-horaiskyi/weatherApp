import "./App.css";
import { Button } from './components/Button/Button'
// import Input from './components/Button'

const App = () => {
  console.log("App component");

  return (
    <>
      <div className="custom-h1">Hello World!</div>
      <p>My React App!</p>
      <Button />
    </>
  );
};

export default App;
