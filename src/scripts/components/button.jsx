import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (                                    
            <button type="button" key={this.props.id} ref={this.props.id} onClick={this.props.onClick} className={this.props.className}>{this.props.label}</button>            
        );
    }
}

Button.propTypes = { id: React.PropTypes.string };
Button.propTypes = { label: React.PropTypes.string };
Button.propTypes = { onClick: React.PropTypes.func };
Button.propTypes = { className: React.PropTypes.string };

export default Button;