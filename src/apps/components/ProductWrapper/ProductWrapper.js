import React from 'react'

import Sidebar from '../Sidebar/Sidebar'
import ItemContainer from '../ItemContainer/ItemContainer'

export default class ProductWrapper extends React.Component {
    render() {
        return (
            <div>
               <Sidebar />
               <ItemContainer />
            </div>
        )
    }
}