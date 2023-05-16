import "./App.css";
import { Button: CustomButton, Button2 } from './components/Button'
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
