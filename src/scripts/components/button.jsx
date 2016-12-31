import React from 'react';
import Styles from '../../scss/button.scss';

class Button extends React.Component {
    isActive() {
        let pattern = `${Styles.active}`;
        let regex = new RegExp(pattern, 'gi');
        return this.props.className.match(regex) !== null;
    }
    onClick(evt) {
        evt.preventDefault();
        evt.currentTarget.blur();
        this.props.onClick(this.props.id);
    }
    render() {
        return (
            <button ref={'btn'} type={'button'} onClick={this.onClick.bind(this)} className={this.props.className}>{this.props.label}</button>
        );
    }
}

Button.propTypes = {
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    onClick: React.PropTypes.func,
    className: React.PropTypes.string
};

export default Button;
