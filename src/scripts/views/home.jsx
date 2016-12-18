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
    }
    onButtonClick(evt) {
        evt.preventDefault();
        this.props.addAction(evt.target.textContent);
    }
    render() {        
        console.log('render', this.props.history);
        return (
            <div className={Style.home}>
                <div className={Style.home__content}>
                    <div className={Style.calc}>
                        <div className={Style.calc__header}>
                            <p className={Style.history}>{this.props.historyDisplay}</p>
                            <p className={Style.result}>{this.props.displayValue}</p>
                        </div>
                        <div className={Style.calc__body}>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>+/-</button>
                            <button type="button" className={Style.button}>%</button>
                            <button type="button" className={`${Style.button} ${Style.button_primaryOperator}`}>/</button>
                            <button type="button" onClick={this.onClick} className={Style.button}>7</button>
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
                            <button type="button" className={`${Style.button} ${Style.button_primaryOperator}`}>+</button>
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

export default Home;