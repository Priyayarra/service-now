import React from 'react'
import styles from './style.module.scss'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { home } from '../../../routes'

import { AppBar, Toolbar, Typography, Button, IconButton, ListItem, List } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import Sidebar from '../Sidebar/Sidebar'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        cursor: 'pointer'
    }
}));

function DashboardWrapper(props) {
    const history = props.history
    const classes = useStyles();
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
                            <ListItem className={styles.listItem}>Products</ListItem>
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