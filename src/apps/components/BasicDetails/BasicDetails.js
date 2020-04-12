import React from 'react'
import styles from './style.module.scss'
import classes from 'classnames'

import { Grid, Paper, TextField, MenuItem, Button } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'

const versions = [
    {
        value: 'Orlando',
        label: 'Orlando',
        year: 'January 2020'
    },
    {
        value: 'New York',
        label: 'New York',
        year: 'July 2019'
    },
    {
        value: 'Madrid',
        label: 'Madrid',
        year: 'January 2019'
    },
    {
        value: 'London',
        label: 'London',
        year: 'July 2018'
    },
    {
        value: 'Kingston',
        label: 'Kingston',
        year: 'January 2018'
    },
    {
        value: 'Store',
        label: 'Store',
        year: 'Monthly'
    },
    {
        value: 'Mobile',
        label: 'Mobile',
    }
];

const products = [
    {
        product_name: 'Analytics, Intelligence, and Reporting'
    },
    {
        product_name: 'Customer Service Management'
    },
    {
        product_name: 'DevOps'
    },
    {
        product_name: 'Field Service Management'
    },
    {
        product_name: 'Finance Operations Management'
    },
    {
        product_name: 'Governance, Risk, and Compliance'
    },
    {
        product_name: 'HR Service Delivery'
    },
    {
        product_name: 'IT Business Management'
    },
    {
        product_name: 'IT Operations Management'
    },
    {
        product_name: 'IT Service Management'
    },
    {
        product_name: 'Mobile Configurable and Navigation'
    },
    {
        product_name: 'Now Platform Administration'
    },
    {
        product_name: 'Now Platform App Engine'
    },
    {
        product_name: 'Now Platform Capabilities'
    },
    {
        product_name: 'Now Platform User Interface'
    },
    {
        product_name: 'Security Operations'
    },
    {
        product_name: 'Service Management - other'
    },
    {
        product_name: 'Software Asset Management'
    }
]

const newFeatures = [
    {
        title: 'Emergency Response Management',
        city: 'New York'
    },
    {
        title: 'Orlando Patch 2',
        city: 'Orlando'
    },
    {
        title: 'Personalized PRB release notes for Orlando',
        city: 'Orlando'
    },
    {
        title: 'UI Builder',
        city: 'Orlando'
    },
    {
        title: 'Mobile Analytics',
        city: 'Orlando'
    },
    {
        title: 'Customer Project Management',
        city: 'Orlando'
    },
]

function BasicDetails() {
    const [version, setversion] = React.useState('Orlando');

    const handleChange = (event) => {
        setversion(event.target.value);
    };

    const listItems = (title, listItemsArray) => (
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6 } className={styles.col}>
            <h3>{title ? title : 'NA'}</h3>
            {listItemsArray ? listItemsArray.map((listItem, index) => (
                <div key={index} className={styles.listItem}>
                    <p>{listItem.title}</p>
                    <span>{listItem.city}</span>
                </div>
            )) : null }
        </Grid>
    )

    return (
        <React.Fragment>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={8} className={styles.leftGrid}>
                    <div className={styles.intro}>
                        <h3 className={styles.introTitle}>
                            All the product documentation for the ServiceNow platform and ServiceNow applications for the enterprise.
                        </h3>
                    </div>
                    <div className={styles.cardSection}>
                        <div className={styles.cardContent}>
                            <h3>Explore Products</h3>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select"
                                value={version}
                                onChange={handleChange}
                                variant="outlined"
                            >
                                {versions.slice(0, 5).map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <Grid container spacing={2}>
                            {products.map((product, index) => (
                                <Grid className={styles.gridItem} item key={index} xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <Paper className={styles.gridTitle}>{product.product_name}</Paper>
                                </Grid>
                            ))}
                        </Grid>
                        <div className={styles.buttonContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                // className={classes.button}
                                endIcon={<ArrowForward />}
                            >
                                View all products
                            </Button>
                        </div>
                        <div className={styles.desktopInfo}>
                            <p>Some examples and graphics depicted herein are provided for illustration only. No real association or connection to ServiceNow products or services is intended or should be inferred.</p>
                            <p>Looking for product documentation on older releases? <a href="">Browse content for our archived release versions.</a></p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} className={styles.rightGrid}>
                    <h3>Release notes and upgrades</h3>
                    <Grid container spacing={2} className={styles.rightGridContainer}>
                        {versions.map((version, index) => (
                            <Grid className={classes(styles.gridItem)} item key={index} xs={12} sm={6} md={6} lg={4} xl={4}>
                                <Paper className={classes(styles.gridTitle, styles.rightGridItem)}>
                                    <p>{version.label}</p>
                                    <span>{version.year ? version.year : 'As needed'}</span>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <hr />
                    <Grid container spacing={2} className={styles.row}>
                        {listItems('What\'s new', newFeatures)}
                        {listItems('Featured content', newFeatures)}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default BasicDetails