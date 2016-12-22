import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../views/home.jsx';
import add from '../actions/add';
import keyDown from '../actions/keyDown';
import calc from '../actions/calc';
import clear from '../actions/clear';
import del from '../actions/del';
import operator from '../actions/operator';
import calculated from '../actions/calculated';


function mapStateToProps(store) {
  return {
    historyDisplay: store.historyDisplay,
    displayValue: store.displayValue,
    keyDown: store.keyDown,
    calculated: store.calculated,
    keys: store.keys
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    keyUpAction: (key, props) => {
      let {displayValue, historyDisplay, calculated} = props;
      props.keys.filter(function (elmt) {
        if (key === elmt.key) {
          props[elmt.command](key, { displayValue, historyDisplay, calculated });
        }
      });
    },
    addAction: (value, data) => {
      dispatch(add(value, data));
      dispatch(calculated(false));
    },
    keyDownAction: (value) => {
      dispatch(keyDown(value))
    },
    calcAction: (value, data) => {
      dispatch(calc(value, data));      
    },
    resultAction: (value, data) => {      
      dispatch(calc(value, data));
      dispatch(calculated(true));
    },
    clearAction: (value, data) => {
      dispatch(clear(value, data));
    },
    deleteAction: (value, data) => {
      dispatch(del(value, data));
    },
    operatorAction: (value, data) => {
      dispatch(operator(value, data));
    },
    isActiveCSS: (css, key, keyDown, Styles) => {
      let active = '';
      let className = '';
      if (key === keyDown) {
        active = Styles.active;
      }
      className = `${css} ${active}`;
      return className;
    },
    getButtonClass: (elmt, Styles) => {
      let css = Styles.button;
      if (elmt.type === 'operator') {
        css = `${Styles.button} ${Styles.button_primaryOperator}`;
      }
      if (elmt.type === 'result') {
        css = `${Styles.button} ${Styles.button_runOperator}`;
      }
      return css;
    }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;