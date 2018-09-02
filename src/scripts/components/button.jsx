import React from 'react';
import '../../scss/button.scss';

class Button extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  isActive() {
    const regex = new RegExp(/active/, 'gi');

    return this.props.className.match(regex) !== null;
  }
  onClick(evt) {
    evt.preventDefault();
    evt.currentTarget.blur();

    this.props.onClick(this.props.id);
  }
  onMouseDown(evt) {
    evt.preventDefault();

    this.props.onMouseDown(this.props.id);
  }
  render() {
    return (
      <button ref={'btn'} type={'button'} onTouchStart={this.onMouseDown} onTouchEnd={this.onClick} onMouseDown={this.onMouseDown} onClick={this.onClick} className={this.props.className}>{this.props.label}</button>
    );
  }
}

Button.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
  onMouseDown: React.PropTypes.func,
  className: React.PropTypes.string
};

export default Button;
