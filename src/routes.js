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
import ProductOverview from './apps/components/ProductOverview/ProductOverviewPge'

export const dashboardWrapper = '/'
export const productOverview = `/bundle/orlando-it-service-management/page/product/it-service-management/reference/r_ITServiceManagement`

export default function NestingExample() {
    return (
        <Router>
          <Switch>
            <Route exact path={dashboardWrapper} component={DashboardWrapper} />
            <Route exact path={productOverview} component={ProductOverview} />
          </Switch>
        </Router>
    )
}