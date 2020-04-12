import React, { useState } from 'react'
import { compose } from 'recompose'
import { withRouter, Link } from 'react-router-dom'
import {
    productOverview,
    productWrapper,
    getRoute,
    assetManagement,
    changeManagement,
    contarctManagement,
    procurement,
    productCatalog,
    benchmarks,
} from '../../../routes'
import styles from './style.module.scss'

import { Drawer, List, ListItem, ListItemText, Typography, ListItemIcon } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'


function Sidebar(props) {

    const history = props.history

    const itemExpander = useExpander(true)
    const subItemExpander = useExpander(true)
    
    const navigateTo = location => () => {
        console.log('location', location);
        
        history.push(location)
    }
    const sidebarItems = [
        {
            label: 'IT Service Management',
            onClick: navigateTo(productOverview),
            items: [
                {
                    label: 'Asset Management',
                    onClick: navigateTo(assetManagement),
                    subItems: [
                        {
                            label: 'Mobile for IT Asset Management',
                            onClick: navigateTo(productOverview)
                        },
                        {
                            label: 'Asset and CI management',
                            onClick: navigateTo(productOverview)
                        },
                        {
                            label: 'Asset classes',
                            onClick: navigateTo(productOverview),
                            subItems: [
                                {
                                    label: 'Create an asset class',
                                    onClick: navigateTo(productOverview),
                                },
                                {
                                    label: 'Add depreciation to an asset',
                                    onClick: navigateTo(productOverview),
                                },
                                {
                                    label: 'Create License assets',
                                    onClick: navigateTo(productOverview),
                                },
                                {
                                    label: 'Set asset states and substates',
                                    onClick: navigateTo(productOverview),
                                },
                            ]
                        },
                        {
                            label: 'Create fixed assets',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'Consumables life cycle',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'Create pre-allocated assets',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'Stockrooms',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'Transfer orders for Asset Management',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'Create a transfer order for Asset Management',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'Transfer order line asset tracking',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'Example Asset Management process',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'ITSM Software Asset Management',
                            onClick: navigateTo(productOverview),
                            subItems: [
                                {
                                    label: 'Software Asset Management plugin',
                                    onClick: navigateTo(productOverview),
                                    subItems: [
                                        {
                                            label: 'Software Asset Management plugin Overview module',
                                            onClick: navigateTo(productOverview),
                                        },
                                        {
                                            label: 'Software Asset Management plugin setup process',
                                            onClick: navigateTo(productOverview),
                                        },
                                    ]
                                },
                                {
                                    label: 'Software Asset Management Foundation plugin',
                                    onClick: navigateTo(productOverview),
                                },
                            ]
                        },
                        {
                            label: 'Organization Management',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'Installed with Model Management',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'Installed with Asset Management',
                            onClick: navigateTo(productOverview),
                        },
                        {
                            label: 'Domain separation and Asset Management',
                            onClick: navigateTo(productOverview),
                        },
                    ]
                },
                {
                    label: 'Contract Management',
                    onClick: navigateTo(contarctManagement),
                    subItems: [
                        {
                            label: 'Contact',
                            onClick: navigateTo(productOverview),
                        }
                    ]
                },
                {
                    label: 'Procurement',
                    onClick: navigateTo(procurement),
                    subItems: [
                        {
                            label: 'Contact',
                            onClick: navigateTo(productOverview),
                        }
                    ]
                },
                {
                    label: 'Product Catalog',
                    onClick: navigateTo(productCatalog)
                },
                {
                    label: 'Benchmarks',
                    onClick: navigateTo(benchmarks)
                },
                {
                    label: 'Change Management',
                    onClick: navigateTo(changeManagement)
                },
            ]
        },
    ]
    return (
        <React.Fragment>
            <Drawer
                open
                variant="permanent"
                PaperProps={{
                    style: {
                        width: '280px',
                        marginTop: '114px',
                    },
                }}
            >
                <List>
                    {sidebarItems.map((listItem, index) => (
                        <React.Fragment key={index}>
                            <ListItem style={{ backgroundColor: itemExpander.onClick ? '#99999985' : '#fff' }}>
                                <ListItemText onClick={listItem.onClick}>{listItem.label}</ListItemText>
                                <ListItemIcon className={styles.listItemIcon} onClick={itemExpander.onClick}>
                                    {itemExpander.expander ? <ExpandLess /> : <ExpandMore />}
                                </ListItemIcon>
                            </ListItem>
                            {itemExpander.expander ?
                                <List className={styles.list}>
                                    {listItem && listItem.items && listItem.items.length > 0 ? listItem.items.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <ListItem onClick={item.onClick} className={styles.listItem} style={{ backgroundColor: subItemExpander.expander ? '#eee' : '#fff' }}>
                                                <ListItemText>{item.label}</ListItemText>
                                                <ListItemIcon className={styles.listItemIcon} onClick={subItemExpander.onClick}>
                                                    {subItemExpander.expander ? <ExpandLess /> : <ExpandMore />}
                                                </ListItemIcon>
                                            </ListItem>
                                            {subItemExpander.expander ?
                                                <List className={styles.list}>
                                                    {item && item.subItems && item.subItems.length > 0 ? item.subItems.map((subItem, index) => (
                                                        <ListItem key={index} className={styles.subItemsListItem}>
                                                            <ListItemText>{subItem.label}</ListItemText>
                                                            <ListItemIcon className={styles.listItemIcon}>
                                                                <ExpandLess />
                                                            </ListItemIcon>
                                                        </ListItem>
                                                    )) : null}
                                                </List> : null
                                            }
                                        </React.Fragment>
                                    )) : null}
                                </List> : null
                            }
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
        </React.Fragment>
    )
}

function useExpander(initialValue) {
    const [expander, setExpander] = useState(initialValue)

    function handleClickExpander(){
        setExpander(!expander);
    }

    return {
        expander,
        onClick: handleClickExpander
    };
}

export default compose(withRouter)(Sidebar)