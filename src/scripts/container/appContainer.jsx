import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../views/home.jsx';
import add from '../actions/add';
import keyDown from '../actions/keyDown';
import calc from '../actions/calc';
import clear from '../actions/clear';
import del from '../actions/del';

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
    },
    deleteAction: (value, historyDisplay) => {
      dispatch(del(value, historyDisplay));
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
    },
    keyUpAction: (key, props) => {      
      props.keys.filter(function (elmt) {
        if (key === elmt.key) {
          props[elmt.command](key, props.historyDisplay);
        }
      });
    },
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;