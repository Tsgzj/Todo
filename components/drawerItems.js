import React from 'react';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
    <div>
    <ListItem button component='a' href="/">
    <ListItemIcon>
    <DashboardIcon />
    </ListItemIcon>
    <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component='a' href="/list">
    <ListItemIcon>
    <ListIcon />
    </ListItemIcon>
    <ListItemText primary="Todo List" />
    </ListItem>
    <ListItem button >
    <ListItemIcon>
    <ViewWeekIcon />
    </ListItemIcon>
    <ListItemText primary="Perspectives" />
    </ListItem>
    <ListItem button>
    <ListItemIcon>
    <InfoIcon />
    </ListItemIcon>
    <ListItemText primary="About" />
    </ListItem>
    </div>
);
