import React from 'react';
import Styles from '../../scss/soundIcon.scss';

class SoundIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    onClick() {
        this.props.onClick(!this.props.muted);
    }
    getMutedCss(muted) {
        let css = Styles.soundIcon;
        if (muted) {
            css = `${css} ${Styles['soundIcon--muted']}`
        }
        return css;
    }
    render() {
        return (
            <div muted={this.props.muted} >
                <svg xmlns="http://www.w3.org/2000/svg" onClick={this.onClick.bind(this)} className={this.getMutedCss(this.props.muted)} viewBox="0 0 43.54 40">
                    <path d="M6,13H0V27H6L16,40h5V0H16.3ZM16,31.8,10,24,8.5,22H5V18H8.42l1.5-1.9L16,8.43Z" />
                    <path className={Styles.soundIcon__wave} d="M30.9,10.1l-3.53,3.53a9,9,0,0,1,0,12.73h0l3.53,3.53A14,14,0,0,0,30.9,10.1Z" />
                    <path className={Styles.soundIcon__wave} d="M36.93,4.07,33.4,7.6a17.54,17.54,0,0,1,0,24.81h0l3.53,3.53A22.51,22.51,0,0,0,37,4.11l0,0Z" />
                    <path className={Styles.soundIcon__stripe} d="M.28,32.29h0L25,1.18l3.82,3L4.1,35.32l-3.82-3Z" />
                </svg>
            </div>
        );
    }
}

SoundIcon.propTypes = {
    muted: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

export default SoundIcon;
