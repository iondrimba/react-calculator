import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="button" type="button">Add</button>
        );
    }
}

export default Button;