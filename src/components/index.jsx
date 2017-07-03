import {connect} from 'react-redux';
import * as action from '../redux/action';

const Main = (component) => {
  const mapStateToProps = (state) => {
    let {
      testGetTitle,
      getUserInfo
    } = state
    return {
      testGetTitle,
      getUserInfo
    }
  }

  return connect(
    mapStateToProps,
    action
    )(component)
}

export default Main;