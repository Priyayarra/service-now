import React from 'react'

import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import PageContainer from './components/Pagecontainer/PageContainer'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        // marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function DashboardWrapper() {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <img src='https://docs.servicenow.com/static/custom/logo.svg?etag=XkLv6Onl' alt='Logo' />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        | Product Documentation
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <PageContainer />
        </div>
    )
}