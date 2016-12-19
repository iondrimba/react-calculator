import React from 'react';
import Title from '../components/title.jsx';
import Button from '../components/button.jsx';
import Style from '../../scss/app.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        let {history, displayValue} = this.props;
        this.history = history;

        this.displayValue = displayValue;
        this.onClick = this.onButtonClick.bind(this);

        document.body.onkeydown = this.onKeyDown.bind(this);
        document.body.onkeyup = this.onKeyUp.bind(this);
    }
    onKeyDown(evt) {
        console.log(evt.keyCode);
        if (this.refs[evt.keyCode] && !/active/.test(this.refs[evt.keyCode].classList.value)) {
            this.props.keyDownAction(parseInt(evt.keyCode, 10));
        }

    }
    onKeyUp(evt) {
        this.props.keyDownAction(0);
    }
    isActiveCSS(css, key) {
        let active = '';
        let className = '';
        if (key === this.props.keyDown) {
            active = Style.active;
        }
        className = `${css} ${active}`;
        return className;
    }
    onButtonClick(evt) {
        evt.preventDefault();
        this.props.addAction(evt.target.textContent);
    }
    render() {
        return (
            <div className={Style.home}>
                <div className={Style.home__content}>
                    <div className={Style.calc}>
                        <div className={Style.calc__header}>
                            <p className={Style.history}>{this.props.historyDisplay}</p>
                            <p className={Style.result}>{this.props.displayValue}</p>
                        </div>
                        <div className={Style.calc__body}>
                            <button type="button" ref={'67'} className={this.isActiveCSS(Style.button, 67)}>C</button>
                            <button type="button" className={Style.button}>+/-</button>
                            <button type="button" ref={'53'} className={this.isActiveCSS(Style.button, 53)}>%</button>
                            <button type="button" className={`${Style.button} ${Style.button_primaryOperator}`}>/</button>
                            <button type="button" ref={'103'} onClick={this.onClick} className={this.isActiveCSS(Style.button, 103)}>7</button>
                            <button type="button" onClick={this.onClick} className={Style.button}>8</button>
                            <button type="button" onClick={this.onClick} className={Style.button}>9</button>
                            <button type="button" className={`${Style.button} ${Style.button_primaryOperator}`}>✕</button>
                            <button type="button" className={Style.button}>4</button>
                            <button type="button" className={Style.button}>5</button>
                            <button type="button" className={Style.button}>6</button>
                            <button type="button" className={`${Style.button} ${Style.button_primaryOperator}`}>-</button>
                            <button type="button" className={Style.button}>1</button>
                            <button type="button" className={Style.button}>2</button>
                            <button type="button" className={Style.button}>3</button>
                            <button type="button" ref={'107'} className={this.isActiveCSS(`${Style.button} ${Style.button_primaryOperator}`, 107)}>+</button>
                            <button type="button" className={Style.button}>0</button>
                            <button type="button" className={Style.button}>.</button>
                            <button type="button" className={Style.button}>del</button>
                            <button type="button" className={`${Style.button} ${Style.button_runOperator}`}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = { history: React.PropTypes.array };
Home.propTypes = { displayValue: React.PropTypes.number };
Home.propTypes = { addAction: React.PropTypes.func };
Home.propTypes = { historyDisplay: React.PropTypes.string };
Home.propTypes = { keyDownAction: React.PropTypes.func };
Home.propTypes = { keyDown: React.PropTypes.number };

export default Home;