import React from 'react'

import ProductOverview from '../ProductOverview/ProductOverviewPge'
import ProductWrapper from '../ProductWrapper/ProductWrapper'

class PageContainer extends React.Component {
    render(){
        const { sidebar } = this.props
        return !sidebar ? <ProductWrapper /> : <ProductOverview />
    }
}
export default PageContainer