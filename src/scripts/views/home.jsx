import React from 'react';
import Title from '../components/title.jsx';
import Button from '../components/button.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home">
                <Title />
                <Button />
            </div>
        );
    }
}

export default Home;