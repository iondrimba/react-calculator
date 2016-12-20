import React from 'react';
import Title from '../components/title.jsx';
import Button from '../components/button.jsx';
import Style from '../../scss/app.scss';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onButtonClick.bind(this);
        document.body.onkeydown = this.onKeyDown.bind(this);
        document.body.onkeyup = this.onKeyUp.bind(this);
    }
    onKeyDown(evt) {
        if (this.refs[evt.key] && !/active/.test(this.refs[evt.key].props.className)) {
            this.props.keyDownAction(evt.key);
        }
    }
    onKeyUp(evt) {
        this.props.keyDownAction('');
        this.props.keys.filter(function (elmt) {
            if (evt.key === elmt.key) {
                this.props[elmt.command](evt.key, this.props.historyDisplay);
            }
        }.bind(this));
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
        //this.props.addAction(evt.target.attributes['key']);
        //this.props.keyDownAction(evt.target.attributes['key']);
    }
    getButtonClass(elmt) {
        var css = Style.button;
        if (elmt.type === 'operator') {
            css = `${Style.button} ${Style.button_primaryOperator}`;
        }
        if (elmt.type === 'result') {
            css = `${Style.button} ${Style.button_runOperator}`;
        }
        return css;
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
                        <div className={Style.calc__body}> {
                            this.props.keys.map(function (elmt, index) {
                                var css = this.getButtonClass(elmt);
                                return (
                                    <Button ref={elmt.key} key={index} label={elmt.label} id={elmt.key} onClick={this.onClick} className={this.isActiveCSS(css, elmt.key)} />
                                );
                            }.bind(this))
                        }
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
Home.propTypes = { keyDown: React.PropTypes.string };
Home.propTypes = { keyUpAction: React.PropTypes.func };
Home.propTypes = { calcAction: React.PropTypes.func };
Home.propTypes = { clearAction: React.PropTypes.func };
Home.propTypes = { keys: React.PropTypes.array };

export default Home;