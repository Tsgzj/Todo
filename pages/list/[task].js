import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Main from './../../components/Main';
import { useRouter } from 'next/router';
import { useStyles } from './../../components/styles';
import Typography from '@material-ui/core/Typography';

export default function list() {
  const classes = useStyles();
  const router = useRouter()
  const { task } = router.query


  return (
      <Main
    content = {<Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
		    <Typography component="h1" variant="h6" color="inherit">
		    {task}
		  </Typography>
        </Paper>
        </Grid>
        </Grid>}
    title = {task} />
  );
}
