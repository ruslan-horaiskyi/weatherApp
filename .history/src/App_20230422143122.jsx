import "./App.css";
// import  Button  from './components/Button/Button';
// import { Counter } from './components/Counter/Counter';
import test from './img/test.png';
import Input from './components/Input/Input'

const App = () => {
  console.log("App component");

  return (
    <>
      <img src={test} alt="test" />
      <div>
        <Input id={1} type="number" labelText={"Попередні, м"}></Input>
      </div>
      {/* <div className="custom-h1">Hello World!</div>
      <p>My React App!</p> */}
      {/* <Button title={'New Button Title'}>13243242</Button> */}
      {/* <Button title={'New Button Title2'} /> */}
      {/* <Button title={'New Button Title3'} /> */}
      {/* <Button /> */}
      {/* <Counter /> */}
    </>
  );
};

export default App;
