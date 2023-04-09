import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from 'pages/Home';
// import ComingSoon from "pages/ComingSoon";

export default function Routes () {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}
