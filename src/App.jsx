import './App.css'
import 'modern-normalize'
import captureImage from './Capture.PNG'
import CardContainer from './components/CardConteiner/CardConteiner'
import Conteiner from './components/Conteiner/Conteiner'
import MoreInfo from './components/MoreInfo/MoreInfo'

const App = () => (
  <>
    <img src={captureImage} alt='sinoptik' />
    <Conteiner>
      <CardContainer />
      <MoreInfo />
    </Conteiner>
  </>
)

export default App
