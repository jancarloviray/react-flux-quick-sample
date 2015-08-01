import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Uniregistry</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
