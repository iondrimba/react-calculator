import React from 'react';
import Button from '../components/button.jsx';
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
    muteIconClick: React.PropTypes.func
    , buttonClick: React.PropTypes.func
    , onMouseDown: React.PropTypes.func
    , displayValue: React.PropTypes.number
    , historyDisplay: React.PropTypes.string
    , keyDown: React.PropTypes.string
    , muted: React.PropTypes.bool
    , getButtonClass: React.PropTypes.func
    , isActiveCSS: React.PropTypes.func
    , keys: React.PropTypes.array
};

export default Calculator;
