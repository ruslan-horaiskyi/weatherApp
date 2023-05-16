import './Conteiner.css'
import PropTypes from 'prop-types'

const Conteiner = ({ children }) => <div className='conteiner'>{children}</div>

Conteiner.propTypes = {
  children: PropTypes.node.isRequired,
}

Conteiner.defaultProps = {}

export default Conteiner
