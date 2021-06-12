import React from "react";
import { Router } from "react-router-dom";

import Routes from "./app/routes/";

import history from "./app/routes/history";

import "./App.css";

const App = () => {
    return (
        <Router history={history}>
            <Routes />
        </Router>
    );
};

export default App;
