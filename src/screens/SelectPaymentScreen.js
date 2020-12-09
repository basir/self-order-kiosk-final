import React from 'react';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
export default function HomeScreen(props) {
  const styles = useStyles();
  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Logo large></Logo>
        <Typography
          className={styles.center}
          gutterBottom
          variant="h3"
          component="h3"
        >
          Select payment type
        </Typography>
        <Box className={styles.cards}>
          <Card className={[styles.card, styles.space]}>
            <CardActionArea onClick={() => props.history.push('/payment')}>
              <CardMedia
                component="img"
                alt="Eat in"
                image="/images/payhere.png"
                className={styles.media}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="p"
                >
                  PAY HERE
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={[styles.card, styles.space]}>
            <CardActionArea onClick={() => props.history.push('/complete')}>
              <CardMedia
                component="img"
                alt="Take Out"
                image="/images/atcounter.png"
                className={styles.media}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="p"
                >
                  AT COUNTER
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
