import React, { useState } from 'react'
import { compose } from 'recompose'
import { withRouter, Link } from 'react-router-dom'
import { productOverview } from '../../../routes'

import { Drawer, List, ListItem, ListItemText, Typography, ListItemIcon } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'


function Sidebar(props) {

    const history = props.history

    const [productItemExpander, setProductItemExpander] = useState(false)
    const [productSubItemExpander, setProductSubItemExpander] = useState(true)
    
    const handleClickProductItemExpander = () => {
        setProductItemExpander(!productItemExpander);
    }
    const handleClickProductSubItemExpander = () => {
        setProductSubItemExpander(!productSubItemExpander);
    }
    const navigateTo = location => {
        // console.log('location', history.push)
        history.push(location)
    }
    const sidebarItems = [
        {
            label: 'IT Service Management',
            onClick: navigateTo(productOverview),
            sidebar: false,
            items: [
                {
                    label: 'Asset Management',
                    onClick: '',
                    sidebar: true,
                    subItems: [
                        {
                            label: 'Mobile for IT Asset Management',
                            onClick: ''
                        },
                        {
                            label: 'Asset and CI management',
                            onClick: ''
                        },
                        {
                            label: 'Asset classes',
                            onClick: '',
                            subItems: [
                                {
                                    label: 'Create an asset class' ,
                                    onClick: ''
                                },
                                {
                                    label: 'Add depreciation to an asset',
                                    onClick: ''
                                },
                                {
                                    label: 'Create License assets',
                                    onClick: ''
                                },
                                {
                                    label: 'Set asset states and substates',
                                    onClick: ''
                                },
                            ]
                        },
                        {
                            label: 'Create fixed assets',
                            onClick: ''
                        },
                        {
                            label: 'Consumables life cycle',
                            onClick: ''
                        },
                        {
                            label: 'Create pre-allocated assets',
                            onClick: ''
                        },
                        {
                            label: 'Stockrooms',
                            onClick: ''
                        },
                        {
                            label: 'Transfer orders for Asset Management',
                            onClick: ''
                        },
                        {
                            label: 'Create a transfer order for Asset Management',
                            onClick: ''
                        },
                        {
                            label: 'Transfer order line asset tracking',
                            onClick: ''
                        },
                        {
                            label: 'Example Asset Management process',
                            onClick: ''
                        },
                        {
                            label: 'ITSM Software Asset Management',
                            onClick: '',
                            subItems: [
                                {
                                    label: 'Software Asset Management plugin',
                                    onClick: '',
                                    subItems: [
                                        {
                                            label: 'Software Asset Management plugin Overview module',
                                            onClick: ''
                                        },
                                        {
                                            label: 'Software Asset Management plugin setup process',
                                            onClick: ''
                                        },
                                    ]
                                },
                                {
                                    label: 'Software Asset Management Foundation plugin',
                                    onClick: ''
                                },
                            ]
                        },
                        {
                            label: 'Organization Management',
                            onClick: ''
                        },
                        {
                            label: 'Installed with Model Management',
                            onClick: ''
                        },
                        {
                            label: 'Installed with Asset Management',
                            onClick: ''
                        },
                        {
                            label: 'Domain separation and Asset Management',
                            onClick: ''
                        },
                    ]
                },
                {
                    label: 'Contract Management',
                    onClick: '',
                    subItems: [
                        {
                            label: 'Contact',
                            onClick: ''
                        }
                    ]
                },
                {
                    label: 'Procurement',
                    onClick: '',
                    subItems: [
                        {
                            label: 'Contact',
                            onClick: ''
                        }
                    ]
                },
                {
                    label: 'Product Catalog',
                },
                {
                    label: 'Benchmarks',
                },
                {
                    label: 'Change Management',
                },
                {
                    label: 'Coaching',
                },
                {
                    label: 'Continual Improvement Management',
                },
                {
                    label: 'Expense Line',
                },
                {
                    label: 'ITSM Virtual Agent',
                },
                {
                    label: 'Walk-up Experience',
                },
                {
                    label: 'ITSM Agent Workspace',
                },
                {
                    label: 'Incident Communications Management',
                },
                {
                    label: 'Incident Management',
                },
                {
                    label: 'On-call scheduling',
                },
                {
                    label: 'Problem Management',
                },
                {
                    label: 'Release Management',
                },
                {
                    label: 'Request Management',
                },
                {
                    label: 'Service Catalog',
                },
                {
                    label: 'Service Desk',
                },
                {
                    label: 'Service Portfolio Management',
                },
                {
                    label: 'Service Level Management',
                },
                {
                    label: 'task Outage',
                },
                {
                    label: 'Collaboration services for Task Communications Management',
                },
                {
                    label: 'Vendor Manager Workspace',
                },
                {
                    label: 'Vendor Performance',
                },
                {
                    label: 'Performance Analytics ITSM Dashboards',
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
                        marginTop: '64px',
                    },
                }}
            >
                <List>
                    {sidebarItems.map((listItem, index) => (
                        <React.Fragment key={index}>
                            <ListItem onClick={listItem.onClick}>
                                <ListItemText>{listItem.label}</ListItemText>
                                <ListItemIcon style={{minWidth: '0'}} onClick={handleClickProductItemExpander}>
                                    { productItemExpander ? <ExpandLess /> : <ExpandMore /> }
                                </ListItemIcon>
                            </ListItem>
                            { productItemExpander ? 
                                <List style={{ paddingLeft: '12px' }}>
                                    {listItem && listItem.items && listItem.items.length > 0 ? listItem.items.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <ListItem>
                                                <ListItemText>{item.label}</ListItemText>
                                                <ListItemIcon style={{minWidth: '0'}} onClick={handleClickProductSubItemExpander}>
                                                    { productSubItemExpander ? <ExpandLess /> : <ExpandMore /> }
                                                </ListItemIcon>
                                            </ListItem>
                                            { productSubItemExpander ?
                                                <List style={{ paddingLeft: '12px' }}>
                                                    {item && item.subItems && item.subItems.length > 0 ? item.subItems.map((subItem, index) => (
                                                        <ListItem key={index}>
                                                            <ListItemText>{subItem.label}</ListItemText>
                                                            <ListItemIcon style={{minWidth: '0'}}>
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
export default compose(withRouter)(Sidebar)