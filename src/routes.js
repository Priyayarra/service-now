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
export const mobileITAssetManagement = `${assetManagement}/mobile-it-asset-management`
export const assetAndCiManagement = `${assetManagement}/aseet-and-ci-management`
export const assetClasses = `${assetManagement}/asset-classes`
export const createFixedAssets = `${assetManagement}/create-fixed-assets`
export const consumablesLifeCycle = `${assetManagement}/consumables-life-cycle`
export const createPreAllocatedAssets = `${assetManagement}/create-pre-allocated-assets`
export const stockrooms = `${assetManagement}/stockrooms`
export const transferOrdersForAssetManagement = `${assetManagement}/transfer-orders-for-asset-management`
export const exampleAssetManagementProcess = `${assetManagement}/example-asset-management-process`
export const itsmSoftwareAssetManagement = `${assetManagement}/itsm-software-asset-management`
export const organizationManagement = `${assetManagement}/organization-management`
export const installedWithModelManagement = `${assetManagement}/installed-with-model-management`
export const installedWithAssetManagement = `${assetManagement}/installed-with-asset-management`
export const domainSeperationAndAssetManagement = `${assetManagement}/domain-seperation-and-asset-management`
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
        <Route exact path={mobileITAssetManagement} component={ProductWrapper} />
        <Route exact path={assetAndCiManagement} component={ProductWrapper} />
        <Route exact path={assetClasses} component={ProductWrapper} />
        <Route exact path={createFixedAssets} component={ProductWrapper} />
        <Route exact path={consumablesLifeCycle} component={ProductWrapper} />
        <Route exact path={createPreAllocatedAssets} component={ProductWrapper} />
        <Route exact path={stockrooms} component={ProductWrapper} />
        <Route exact path={transferOrdersForAssetManagement} component={ProductWrapper} />
        <Route exact path={exampleAssetManagementProcess} component={ProductWrapper} />
        <Route exact path={itsmSoftwareAssetManagement} component={ProductWrapper} />
        <Route exact path={organizationManagement} component={ProductWrapper} />
        <Route exact path={installedWithModelManagement} component={ProductWrapper} />
        <Route exact path={installedWithAssetManagement} component={ProductWrapper} />
        <Route exact path={domainSeperationAndAssetManagement} component={ProductWrapper} />
      </Switch>
    </Router>
  )
}