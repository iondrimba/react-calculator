import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../views/home.jsx';
import add from '../actions/add';
import keyDown from '../actions/keyDown';
import calc from '../actions/calc';
import clear from '../actions/clear';


function mapStateToProps(store) {
  return {
    historyDisplay: store.historyDisplay,
    displayValue: store.displayValue,
    keyDown: store.keyDown,
    keys: store.keys
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    addAction: (value, historyDisplay) => {
      dispatch(add(value, historyDisplay));
    },
    keyDownAction: (value) => {
      dispatch(keyDown(value))
    },
    calcAction: (value, historyDisplay) => {
      dispatch(calc(value, historyDisplay));
    },
    resultAction: (value, historyDisplay) => {      
      dispatch(calc(value, historyDisplay));
    },
    clearAction: (value, historyDisplay) => {
      dispatch(clear(value, historyDisplay));
    }      
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;