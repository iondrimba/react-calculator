import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../views/home.jsx';
import add from '../actions/add';
import keyDown from '../actions/keyDown';


function mapStateToProps(store) {
  return {
    history: store.history,
    historyDisplay: store.historyDisplay,
    displayValue: store.displayValue,
    keyDown: store.keyDown
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    addAction: (value) => {
      dispatch(add(value))
    },
    keyDownAction: (value) => {
      dispatch(keyDown(value))
    }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;