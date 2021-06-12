import React from "react";
import { Switch, Route } from "react-router-dom";

import Table from "../pages/Table";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Table} />
        </Switch>
    );
}
