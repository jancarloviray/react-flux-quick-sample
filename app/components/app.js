import React from 'react';
import {RouteHandler} from 'react-router';
import Navbar from './navbar';

class App extends React.Component {
    constructor(props) {
        super(props)
        // getInitialState() in es5
        this.state = {};
    }

    render() {
        return (
            <div className="uniregistry">
                <Navbar/>
                <RouteHandler/>
            </div>
        )
    }
}

// propTypes in es5
App.propTypes = {};
// getDefaultProps in es5
App.defaultProps = {};

export default App;
