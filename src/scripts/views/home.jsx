import React from 'react';
import Title from '../components/title.jsx';
import Button from '../components/button.jsx';
import Styles from '../../scss/app.scss';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onButtonClick.bind(this);
        document.body.onkeydown = this.onKeyDown.bind(this);
        document.body.onkeyup = this.onKeyUp.bind(this);
    }
    onKeyDown(evt) {    
        let button = this.refs[evt.key];    
        if (button && !button.isActive()) {
            this.props.keyDownAction(evt.key);
        }
    }
    
    onKeyUp(evt) {
        this.props.keyDownAction('');
        this.props.keyUpAction(evt.key, this.props);
    }
    onButtonClick(key) {
        this.props.keyDownAction('');
        this.props.keyUpAction(key, this.props);
    }
    render() {
        return (
            <div className={Styles.home}>
                <div className={Styles.home__content}>
                    <div className={Styles.calc}>
                        <div className={Styles.calc__header}>
                            <p className={Styles.history}>{this.props.historyDisplay}</p>
                            <p className={Styles.result}>{this.props.displayValue}</p>
                        </div>
                        <div className={Styles.calc__body}> {
                            this.props.keys.map(function (elmt, index) {
                                var css = this.props.getButtonClass(elmt, Styles);
                                return (
                                    <Button key={index} ref={elmt.key}  label={elmt.label} id={elmt.key} onClick={this.onClick} className={this.props.isActiveCSS(css, elmt.key, this.props.keyDown, Styles)} />
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
Home.propTypes = { getButtonClass: React.PropTypes.func };
Home.propTypes = { isActiveCSS: React.PropTypes.func };
Home.propTypes = { keys: React.PropTypes.array };

export default Home;