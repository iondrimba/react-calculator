import React from 'react';
import Title from '../components/title.jsx';
import Button from '../components/button.jsx';
import Style from '../../scss/app.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={Style.home}>
                <div className={Style.home__content}>
                    <div className={Style.calc}>
                        <div className={Style.calc__header}>
                            <p className={Style.history}>89+898+56</p>
                            <p className={Style.result}>899.5656,45</p>
                        </div>
                        <div className={Style.calc__body}>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={`${Style.button} ${Style.button_primaryOperator}`}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={`${Style.button} ${Style.button_primaryOperator}`}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={`${Style.button} ${Style.button_primaryOperator}`}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={`${Style.button} ${Style.button_primaryOperator}`}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={Style.button}>C</button>
                            <button type="button" className={`${Style.button} ${Style.button_runOperator}`}>C</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;