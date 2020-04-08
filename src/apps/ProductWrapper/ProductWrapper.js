import React from 'react'
import styles from './style.module.scss'

import DashboardWrapper from '../components/DashboardWrapper/DashboardWrapper'

export default class ProductWrapper extends React.Component {
    render() {
        return (
            <DashboardWrapper
               sidebar={true}
            >
               <div className={styles.container} />
            </DashboardWrapper>
        )
    }
}