import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './../components/LineChart';
import CompletedChart from './../components/PieChart';
import Main from './../components/Main';
import { useStyles } from './../components/styles';

export default function index() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
      <Main
    content = {<Grid container spacing={3}>
               <Grid item xs={12} md={5} lg={4}>
               <Paper className={fixedHeightPaper}>
               <CompletedChart />
               </Paper>
               </Grid>
               <Grid item xs={12} md={7} lg={8}>
               <Paper className={fixedHeightPaper}>
               <Chart />
               </Paper>
               </Grid>
               </Grid>}
    title = "Dashboard" />
  );
}
