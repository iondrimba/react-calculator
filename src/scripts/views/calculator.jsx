import React from 'react';
import Title from '../components/title.jsx';
import Button from '../components/button.jsx';
import SoundIcon from '../components/soundIcon';
import GithubIcon from '../components/githubIcon';
import Styles from '../../scss/calculator.scss';
import StylesButton from '../../scss/button.scss';
import Sound from '../model/sound';

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
                    this.props.keys.map(function (elmt, index) {
                        var css = this.props.getButtonClass(elmt, StylesButton);
                        return (
                            <Button key={index} ref={elmt.key} label={elmt.label} id={elmt.key} onClick={this.props.buttonClick}
                            className={this.props.isActiveCSS(css, elmt.key, this.props.keyDown, StylesButton)} />
                        );
                    }.bind(this))
                }
                </div>
            </div>
        );
    }
}

Calculator.propTypes = { muteIconClick: React.PropTypes.func };
Calculator.propTypes = { buttonClick: React.PropTypes.func };
Calculator.propTypes = { displayValue: React.PropTypes.number };
Calculator.propTypes = { historyDisplay: React.PropTypes.string };
Calculator.propTypes = { keyDown: React.PropTypes.string };
Calculator.propTypes = { muted: React.PropTypes.bool };
Calculator.propTypes = { getButtonClass: React.PropTypes.func };
Calculator.propTypes = { isActiveCSS: React.PropTypes.func };
Calculator.propTypes = { keys: React.PropTypes.array };

export default Calculator;
