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
  let { displayValue, historyDisplay, calculated, history } = props;
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

function _addAction(dispatch, value, data) {
  _dispatchAction(dispatch, constants.ADD, { value, data });
  _dispatchAction(dispatch, constants.CALCULATED, { value: false });
}

function _operatorAction(dispatch, value, data) {
  _dispatchAction(dispatch, constants.OPERATOR, { value, data });
  _dispatchAction(dispatch, constants.CALC, { value, data });
  _dispatchAction(dispatch, constants.CALCULATED, { value: true });
}

function _commaAction(dispatch, value, data) {
  _dispatchAction(dispatch, constants.COMMA, { value, data });
  _dispatchAction(dispatch, constants.CALCULATED, { value: false });
}

function _switchOperatorAction(dispatch, value, data) {
  _dispatchAction(dispatch, constants.SWITCH_OPERATOR, { value, data });
  _dispatchAction(dispatch, constants.CALCULATED, { value: false });
}

function _percentAction(dispatch, value, data) {
  _dispatchAction(dispatch, constants.PERCENT, { value, data });
  _dispatchAction(dispatch, constants.CALCULATED, { value: false });
}

const mapDispatchToProps = (dispatch) => {
  return {
    keyUpAction: (key, props) => { _keyUpAction(key, props); },
    muteAction: (value) => { _dispatchAction(dispatch, constants.MUTED, { value }); },
    addAction: (value, data) => { _addAction(dispatch, value, data) },
    keyDownAction: (value) => { _dispatchAction(dispatch, constants.KEY_DOWN, { value }); },
    resultAction: (value, data) => { _resultAction(dispatch, value, data); },
    clearAction: (value, data) => { _dispatchAction(dispatch, constants.CLEAR, { value, data }); },
    deleteAction: (value, data) => { _dispatchAction(dispatch, constants.DEL, { value, data }); },
    operatorAction: (value, data) => { _operatorAction(dispatch, value, data); },
    commaAction: (value, data) => { _commaAction(dispatch, value, data) },
    switchOperatorAction: (value, data) => { _switchOperatorAction(dispatch, value, data); },
    percentAction: (value, data) => { _percentAction(dispatch, value, data) },
    isActiveCSS: (css, key, keyDown, Styles) => { return _isActiveCSS(css, key, keyDown, Styles); },
    getButtonClass: (elmt, Styles) => { return _getButtonClass(elmt, Styles); }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;
