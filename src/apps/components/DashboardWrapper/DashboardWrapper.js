import React from 'react'
import styles from './style.module.scss'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { home, productWrapper } from '../../../routes'

import { AppBar, Toolbar, Typography, Button, IconButton, ListItem, List, TextField, MenuItem } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import Sidebar from '../Sidebar/Sidebar'

const products = [
    {
        product_name: 'Product'
    },
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

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        cursor: 'pointer'
    }
}));

function DashboardWrapper(props) {
    const history = props.history
    const classes = useStyles();
    const [product, setproduct] = React.useState('Product');

    const handleChange = (event) => {
        setproduct(event.target.value);
    };
    const navigateTo = (location) => () => {
        history.push(location)
    }
    return (
        <div>
            <AppBar position="static" className={styles.appbar}>
                <Toolbar className={styles.toolbar}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <img
                            src='https://docs.servicenow.com/static/custom/logo.svg?etag=XkLv6Onl'
                            alt='Logo'
                            onClick={navigateTo(home)}
                        />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} onClick={navigateTo(home)}>
                        | Product Documentation
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                <div className={styles.custombar}>
                    <div className={styles.menuItemsSection}>
                        <List className={styles.list}>
                            <ListItem className={styles.listItem} onClick={navigateTo(home)}>Home</ListItem>
                            <ListItem className={styles.listItem} onClick={navigateTo(productWrapper)}>
                                {/* <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Product"
                                    value={product}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    {products.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.product_name}
                                        </MenuItem>
                                    ))}
                                    </TextField> */}
                                Product
                            </ListItem>
                            <ListItem className={styles.listItem}>Release notes and upgrades</ListItem>
                            <ListItem className={styles.listItem}>Archive</ListItem>
                        </List>
                    </div>
                    <div className={styles.searchbarSection} />
                </div>
            </AppBar>
            <div>
                {props.sidebar ? <Sidebar /> : null}
                {props.children}
            </div>
        </div>
    )
}
export default compose(withRouter)(DashboardWrapper)