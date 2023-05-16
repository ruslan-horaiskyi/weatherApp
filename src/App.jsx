import './App.css'
import captureImage from './Capture.PNG'
import Card from './components/Card/Card'
import Conteiner from './components/Conteiner/Conteiner'

const App = () => (
  <>
    <img src={captureImage} alt='sinoptik' />
    <Conteiner>
      <Card />
    </Conteiner>
  </>
)

export default App
