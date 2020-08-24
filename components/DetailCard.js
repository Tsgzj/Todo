import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { EditableTextField, EditableMultiLineTextField } from './EditableTextField';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';

const task = {
    name: 'Detail view',
    project: 'Todo List',
    context: 'Coding',
    status: 'Inprogress',
    eta: '2 Hours',
    start: '08/20/2020',
    due: '08/24/2020',
    note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
};

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(2),
    },
    note: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    submit: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    submitButton: {
        "float": "right",
    },
}));

export default function Detail() {
    const classes = useStyles();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
            <React.Fragment>
            <Typography variant="h6" className={classes.title}>
            Action
        </Typography>
            <List disablePadding={true}>
            <ListItem className={classes.listItem} key={task.name}>
            <ListItemText primary="Project" className={classes.listItemText} />
            <EditableTextField title="Project" value={task.project} />
            </ListItem>
            <ListItem className={classes.listItem} key={task.name}>
            <ListItemText primary="Context" className={classes.listItemText}/>
            <EditableTextField title="Project" value={task.context} />
            </ListItem>
            <ListItem className={classes.listItem} key={task.name}>
            <ListItemText primary="Status" className={classes.listItemText}/>
            <EditableTextField title="Project" value={task.status} />
            </ListItem>
            </List>
            <Typography variant="h6" className={classes.title}>
            Dates
        </Typography>
            <List disablePadding={true}>
            <ListItem>
            <ListItemText primary="ETA" className={classes.listItemText}/>
            <EditableTextField title="Project" value={task.eta} />
            </ListItem>
            <ListItem className={classes.listItem}>
            <ListItemText primary="Start" className={classes.listItemText}/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline-start"
        value={task.start}
        onChange={handleDateChange}
        KeyboardButtonProps={{
            'aria-label': 'change date',
        }}
            />
            </MuiPickersUtilsProvider>
            </ListItem>
            <ListItem className={classes.listItem}>
            <ListItemText primary="Due" className={classes.listItemText}/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline-due"
        value={task.due}
        onChange={handleDateChange}
        KeyboardButtonProps={{
            'aria-label': 'change date',
        }}
            />
            </MuiPickersUtilsProvider>
            </ListItem>
            </List>
            <Typography variant="h6" className={classes.title}>
            Notes
        </Typography>
            <div className={classes.note}>
            <EditableMultiLineTextField value={task.note} row={4} />
            </div>
            <div className={classes.submit}>
            <Button className={classes.submitButton} variant="contained" color="primary" onClick={() => { alert('Changes Uploaded') }}>Submit</Button>
            </div>
            </React.Fragment>
    );
}
