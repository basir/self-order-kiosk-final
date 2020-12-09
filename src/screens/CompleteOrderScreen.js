import React from 'react';
import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
export default function CompleteOrderScreen(props) {
  const styles = useStyles();

  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Box>
          <Logo large></Logo>
          <Typography
            gutterBottom
            className={styles.title}
            variant="h3"
            component="h3"
          >
            Your order has been placed
          </Typography>

          <Typography
            gutterBottom
            className={styles.title}
            variant="h1"
            component="h1"
          >
            Thank you!
          </Typography>

          <Typography
            gutterBottom
            className={styles.title}
            variant="h3"
            component="h3"
          >
            Your order number is 123
          </Typography>
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => props.history.push('/')}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          Order Again
        </Button>
      </Box>
    </Box>
  );
}
