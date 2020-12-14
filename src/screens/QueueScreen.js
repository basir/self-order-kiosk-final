import React, { useContext, useEffect } from 'react';
import { Store } from '../Store';
import { listQueue } from '../actions';
import {
  Box,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Paper,
} from '@material-ui/core';
import { useStyles } from '../styles';
import { Alert } from '@material-ui/lab';
import { Helmet } from 'react-helmet';
export default function QueueScreen(props) {
  const styles = useStyles();

  const { state, dispatch } = useContext(Store);
  const { queue, loading, error } = state.queueList;

  useEffect(() => {
    listQueue(dispatch);
  }, []);

  return (
    <Box className={[styles.root]}>
      <Helmet>
        <title>Queue</title>
      </Helmet>
      <Box className={[styles.main]}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Paper>
                <h1 className={styles.processing}>In Progress</h1>
                <List>
                  {queue.inProgressOrders.map((order) => (
                    <ListItem key={order.number}>
                      <h1>{order.number}</h1>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper>
                <h1 className={styles.ready}>Now Serving </h1>
                <List>
                  {queue.servingOrders.map((order) => (
                    <ListItem key={order.number}>
                      <h1>{order.number}</h1>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
