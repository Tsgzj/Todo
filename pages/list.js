import React from 'react';
import clsx from 'clsx';
import { mainListItems } from './../components/drawerItems';
import TodoList from './../components/TodoList';
import Main from './../components/Main';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './../components/styles';

export default function list() {
  const classes = useStyles();
  return (
      <Main
    content = {<Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <TodoList />
              </Paper>
            </Grid>
          </Grid>
    }
    title = "List" />
  )
}
