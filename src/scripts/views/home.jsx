import React from 'react';
import Calculator from './calculator';
import GithubIcon from '../components/githubIcon';
import Styles from '../../scss/home.scss';
import Sound from '../model/sound';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onButtonClick.bind(this);
        document.body.onkeydown = this.onKeyDown.bind(this);
        document.body.onkeyup = this.onKeyUp.bind(this);

        this.sound = new Sound();
        this.sound.setup();
    }
    componentDidMount() {
        let timeout = setTimeout(() => {
            document.getElementsByClassName(`${Styles.home}`)[0].classList.add('fadeIn');
            clearTimeout(timeout);
        }, 100);
    }
    onKeyDown(evt) {
        let button = this.refs['calculator'].refs[evt.key];
        if (button && !button.isActive()) {
            this.props.keyDownAction(evt.key);
        }
    }
    onKeyUp(evt) {
        let button = this.refs['calculator'].refs[evt.key];
        if (button) {
            this.sound.mute(this.props.muted);
            this.sound.play();
        }

        this.props.keyDownAction('');
        this.props.keyUpAction(evt.key, this.props);
    }
    onButtonClick(key) {
        this.sound.mute(this.props.muted);
        this.sound.play();
        this.props.keyDownAction('');
        this.props.keyUpAction(key, this.props);
    }
    onMuteIconClick(value) {
        this.props.muteAction(value);
    }
    render() {
        return (
            <div className={Styles.home}>
                <div className={Styles.home__content}>
                    <Calculator ref={'calculator'} {...this.props} buttonClick={this.onButtonClick.bind(this)} muteIconClick={this.onMuteIconClick.bind(this)} />
                </div>
                <GithubIcon />
            </div>
        );
    }
}

Home.propTypes = {
    muteAction: React.PropTypes.func
    , muted: React.PropTypes.bool
    , keyDownAction: React.PropTypes.func
    , keyDown: React.PropTypes.string
    , keyUpAction: React.PropTypes.func
};

export default Home;
