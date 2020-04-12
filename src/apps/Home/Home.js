import React from 'react'
import styles from './style.module.scss'

import DashboardWrapper from '../components/DashboardWrapper/DashboardWrapper'
import BasicDetails from '../components/BasicDetails/BasicDetails'

export default class Home extends React.Component {
    render() {
        return (
            <DashboardWrapper>
                <BasicDetails />
            </DashboardWrapper>
        )
    }
}