import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    useLocation,
    Link
} from 'react-router-dom'

import DashboardWrapper from './apps/DashboardWrapper'

export const dashboardWrapper = '/wrapper'

export default function NestingExample() {
    return (
        <Router>
          <Switch>
            <Route exact path={dashboardWrapper} component={DashboardWrapper} />
          </Switch>
        </Router>
    )
}