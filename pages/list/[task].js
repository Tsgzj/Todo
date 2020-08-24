import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Main from './../../components/Main';
import { useRouter } from 'next/router';
import { useStyles } from './../../components/styles';
import Detail from './../../components/DetailCard';
import Chart from './../../components/LineChart';

export default function list() {
  const classes = useStyles();
  const router = useRouter();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { task } = router.query;


  return (
      <Main
    content = {<Grid container spacing={3}>
               <Grid item xs={12} lg={5}>
               <Paper className={classes.paper}>
               <Detail className={classes.detailCard}/>
               </Paper>
               </Grid>
               <Grid item xs={12} lg={7}>
               <Paper className={fixedHeightPaper}>
               <Chart />
               </Paper>
               </Grid>
        </Grid>}
    title = {task} />
  );
}
