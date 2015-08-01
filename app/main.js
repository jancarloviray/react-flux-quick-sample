// main entry point

import React from 'react';
import Router from 'react-router';
import routes from './routes';

// let's bootstrap everything
// note that HistoryLocation is to enable pretty urls (removes the hashes)
Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});
