import React from 'react';

class Button extends React.Component {
    isActive() {
        console.log('isACtive', this.props.className);
        return /active/.test(this.props.className);
    }
    render() {
        return (                                    
            <button type="button" onClick={this.props.onClick} className={this.props.className}>{this.props.label}</button>            
        );
    }
}

Button.propTypes = { id: React.PropTypes.string };
Button.propTypes = { label: React.PropTypes.string };
Button.propTypes = { onClick: React.PropTypes.func };
Button.propTypes = { className: React.PropTypes.string };

export default Button;