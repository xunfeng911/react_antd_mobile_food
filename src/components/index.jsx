import {connect} from 'react-redux';
import * as action from '../redux/action';

const Main = (component) => {
  const mapStateToProps = (state) => {
    let {
      getName
    } = state
    return {
      getName
    }
  }

  return connect(
    mapStateToProps,
    action
    )(component)
}

export default Main;