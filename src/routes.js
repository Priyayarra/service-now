import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    useLocation,
    Link
} from 'react-router-dom'

import ProductWrapper from './apps/ProductWrapper/ProductWrapper'
import ProductOverview from './apps/ProductOverview/ProductOverview'
import Home from './apps/Home/Home'

export const getRoute = (routePath, params) => {
  let basePath = routePath
  Object.keys(params).forEach(name => {
    basePath = basePath.replace(`:${name}`, params[name])
  })
  return basePath
}

export const home = '/'
export const productOverview = `/bundle/releaseVersion:orlando/productName:it-service-management`
export const productWrapper = `${productOverview}/conceptName:asset-management`
export const assetManagement = `${productOverview}/conceptName:asset-management`
export const contarctManagement = `${productOverview}/conceptName:contract-management`
export const procurement = `${productOverview}/conceptName:procurement`
export const productCatalog = `${productOverview}/conceptName:product-catalog`
export const benchmarks = `${productOverview}/conceptName:benchmarks`
export const changeManagement = `${productOverview}/conceptName:change-management`

export default function NestingExample() {
    return (
        <Router>
          <Switch>
            <Route exact path={home} component={Home} />
            <Route exact path={productOverview} component={ProductOverview} />
            <Route exact path={productWrapper} component={ProductWrapper} />
            <Route exact path={assetManagement} component={ProductWrapper} />
            <Route exact path={contarctManagement} component={ProductWrapper} />
            <Route exact path={procurement} component={ProductWrapper} />
            <Route exact path={productCatalog} component={ProductWrapper} />
            <Route exact path={benchmarks} component={ProductWrapper} />
            <Route exact path={changeManagement} component={ProductWrapper} />
          </Switch>
        </Router>
    )
}