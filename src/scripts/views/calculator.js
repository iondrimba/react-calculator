import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/button.js';
import SoundIcon from '../components/soundIcon';
import Styles from '../../scss/calculator.scss';
import StylesButton from '../../scss/button.scss';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={Styles.calculator}>
        <SoundIcon onClick={this.props.muteIconClick} muted={this.props.muted} />
        <div className={Styles.calculator__header}>
          <p className={Styles.calculator__history}>{this.props.historyDisplay}</p>
          <p className={Styles.calculator__result}>{this.props.displayValue}</p>
        </div>
        <div className={Styles.calculator__body}> {
          this.props.keys.map((elmt, index) => {
            var css = this.props.getButtonClass(elmt, StylesButton);
            return (
              <Button key={index} ref={elmt.key} label={elmt.label} id={elmt.key} onMouseDown={this.props.onMouseDown} onClick={this.props.buttonClick}
                className={this.props.isActiveCSS(css, elmt.key, this.props.keyDown, StylesButton)} />
            );
          })
        }
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  muteIconClick: PropTypes.func
  , buttonClick: PropTypes.func
  , onMouseDown: PropTypes.func
  , displayValue: PropTypes.string
  , historyDisplay: PropTypes.string
  , keyDown: PropTypes.string
  , muted: PropTypes.bool
  , getButtonClass: PropTypes.func
  , isActiveCSS: PropTypes.func
  , keys: PropTypes.array
};

export default Calculator;
