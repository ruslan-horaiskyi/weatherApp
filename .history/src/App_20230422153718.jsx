import "./App.css";
// import  Button  from './components/Button/Button';
// import { Counter } from './components/Counter/Counter';
import test from "./img/test.png";
import Input from "./components/InputEl/InputEl";
import CustomFieldset from "./components/CustomFieldset/CustomFieldset";

const App = () => {
  console.log("App component");

  return (
    <>
      <img src={test} alt="test" />

      <CustomFieldset fieldsetClass="indicator_fieldset" 
                      legendClass="indicator_legend"
                      legendText="Показники води">
        <Input id="previous_water" type="number">
          Попередні, м:<sup>3</sup>
        </Input>
        <Input id="current_water" type="number">
          Поточні, м<sup>3</sup>:
        </Input>
        <Input id="water_difference" type="number">
          Різниця, м<sup>3</sup>:
        </Input>
        <Input id="water_toPay" type="number" readOnly={true}>
          До сплати, грн:
        </Input>
      </CustomFieldset>

      <CustomFieldset fieldsetClass="indicator_fieldset" 
                      legendClass="indicator_legend"
                      legendText="Показники електроенергії">
        <Input id="previous_electricity" type="number">
          Попередні, квт:
        </Input>
        <Input id="current_electricity" type="number">
          Поточні, квт:
        </Input>
        <Input id="electricity_difference" type="number">
          Різниця, квт:
        </Input>
        <Input id="electricity_toPay" type="number" readOnly={true}>
          До сплати, грн:
        </Input>
      </CustomFieldset>

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
