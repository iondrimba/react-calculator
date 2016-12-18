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
                        <div className={Style.calc__header}>1
                        </div>
                        <div className={Style.calc__body}>2
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;