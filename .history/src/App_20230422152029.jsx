import "./App.css";
// import  Button  from './components/Button/Button';
// import { Counter } from './components/Counter/Counter';
import test from './img/test.png';
import Input from './components/InputEl/InputEl';
import CustomFieldset from "./components/CustomFieldset/CustomFieldset";

const App = () => {
  console.log("App component");

  return (
    <>
      <img src={test} alt="test" />
      <div className="water_div">
        <Input id={1} type="number" >Попередні, м:<sup>3</sup></Input>
        <Input id={2} type="number" >Поточні, м<sup>3</sup></Input>
        <Input id={3} type="number" >Різниця, м<sup>3</sup>:</Input>
        <Input id={4} type="number" readOnly={true}>До сплати, грн:</Input>
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
