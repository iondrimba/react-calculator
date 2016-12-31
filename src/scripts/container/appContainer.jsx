import { connect } from 'react-redux';
import Home from '../views/home.jsx';
import createAction from '../actions/createAction';
import * as constants from '../actions/constants';


function mapStateToProps(store) {
  return {
    historyDisplay: store.historyDisplay,
    displayValue: store.displayValue,
    keyDown: store.keyDown,
    calculated: store.calculated,
    keys: store.keys,
    muted: store.muted
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyUpAction: (key, props) => {
      let {displayValue, historyDisplay, calculated} = props;
      props.keys.filter((elmt) => {
        if (key === elmt.key) {
          props[elmt.command](key, { displayValue, historyDisplay, calculated });
        }
      });
      return false;
    },
    muteAction: (value) => {
      dispatch(createAction(constants.MUTED, { value }));
    },
    addAction: (value, data) => {
      dispatch(createAction(constants.ADD, { value, data }));
      dispatch(createAction(constants.CALCULATED, { value: false }));
    },
    keyDownAction: (value) => {
      dispatch(createAction(constants.KEY_DOWN, { value }));
    },
    calcAction: (value, data) => {
      dispatch(createAction(constants.CALC, { value, data }));
    },
    resultAction: (value, data) => {
      dispatch(createAction(constants.CALC, { value, data }));
      dispatch(createAction(constants.CALCULATED, { value: true }));
    },
    clearAction: (value, data) => {
      dispatch(createAction(constants.CLEAR, { value, data }));
    },
    deleteAction: (value, data) => {
      dispatch(createAction(constants.DEL, { value, data }));
    },
    operatorAction: (value, data) => {
      dispatch(createAction(constants.OPERATOR, { value, data }));
      dispatch(createAction(constants.CALCULATED, { value: true }));
    },
    commaAction: (value, data) => {
      dispatch(createAction(constants.COMMA, { value, data }));
      dispatch(createAction(constants.CALCULATED, { value: false }));
    },
    switchOperatorAction: (value, data) => {
      dispatch(createAction(constants.SWITCH_OPERATOR, { value, data }));
      dispatch(createAction(constants.CALCULATED, { value: false }));
    },
    percentAction: (value, data) => {
      dispatch(createAction(constants.PERCENT, { value, data }));
      dispatch(createAction(constants.CALCULATED, { value: false }));
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
