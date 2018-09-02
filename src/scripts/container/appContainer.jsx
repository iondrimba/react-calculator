import { connect } from 'react-redux';
import Home from '../views/home.jsx';
import createAction from '../actions/createAction';
import * as constants from '../actions/constants';

function mapStateToProps(store) {
  return store;
}

function _isActiveCSS(css, key, keyDown, Styles) {
  let active = '';
  let className = '';

  if (key === keyDown) {
    active = Styles.active;
  }

  className = `${css} ${active}`;

  return className;
}

function _getButtonClass(elmt, Styles) {
  let css = '';

  if (elmt.type === 'operator') {
    css = Styles.button_primaryOperator;
  }

  if (elmt.type === 'result') {
    css = Styles.button_runOperator;
  }

  return `${Styles.button} ${css}`;
}

function _keyUpAction(key, props) {
  const { displayValue, historyDisplay, calculated, history } = props;

  props.keys.map((elmt) => {
    if (key === elmt.key) {
      props[elmt.command](key, { displayValue, historyDisplay, calculated, history });
    }
  });

  return false;
}

function _dispatchAction(dispatch, action, value) {
  dispatch(createAction(action, value));
}

function _resultAction(dispatch, value, data) {
  _dispatchAction(dispatch, constants.CALC, { value, data });
  _dispatchAction(dispatch, constants.CALCULATED, { value: true });
  _dispatchAction(dispatch, constants.HISTORY_CLEAR, { value, data });
}

function _commonActions({ constants, dispatch, value, data }) {
  const [first, second ] = constants;
  _dispatchAction(dispatch, first, { value, data });
  _dispatchAction(dispatch, second, { value: false });
}

function _operatorAction(dispatch, value, data) {
  _dispatchAction(dispatch, constants.OPERATOR, { value, data });
  _dispatchAction(dispatch, constants.CALC, { value, data });
  _dispatchAction(dispatch, constants.CALCULATED, { value: true });
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyUpAction: (key, props) => { _keyUpAction(key, props); },
    muteAction: (value) => { _dispatchAction(dispatch, constants.MUTED, { value }); },
    keyDownAction: (value) => { _dispatchAction(dispatch, constants.KEY_DOWN, { value }); },
    resultAction: (value, data) => { _resultAction(dispatch, value, data); },
    clearAction: (value, data) => { _dispatchAction(dispatch, constants.CLEAR, { value, data }); },
    deleteAction: (value, data) => { _dispatchAction(dispatch, constants.DEL, { value, data }); },
    operatorAction: (value, data) => { _operatorAction(dispatch, value, data); },
    addAction: (value, data) => { _commonActions({ constants: [constants.ADD, constants.CALCULATED], dispatch, value, data }); },
    commaAction: (value, data) => { _commonActions({ constants: [constants.COMMA, constants.CALCULATED], dispatch, value, data }); },
    switchOperatorAction: (value, data) => { _commonActions({ constants: [constants.SWITCH_OPERATOR, constants.CALCULATED], dispatch, value, data }); },
    percentAction: (value, data) => { _commonActions({ constants: [constants.PERCENT, constants.CALCULATED], dispatch, value, data }) },
    isActiveCSS: (css, key, keyDown, Styles) => { return _isActiveCSS(css, key, keyDown, Styles); },
    getButtonClass: (elmt, Styles) => { return _getButtonClass(elmt, Styles); }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;
