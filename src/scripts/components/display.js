import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Display extends PureComponent {
  render() {
    return (
      <p className={this.props.className}>{this.props.value}</p>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string,
  className:PropTypes.string,
};

export default Display;
