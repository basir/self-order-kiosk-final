import React, { useContext } from 'react';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from '@material-ui/core';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
import { Store } from '../Store';
import { setOrderType } from '../actions';
export default function HomeScreen(props) {
  const { dispatch } = useContext(Store);
  const styles = useStyles();
  const chooseHandler = (orderType) => {
    setOrderType(dispatch, orderType);
    props.history.push('/order');
  };
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            className={styles.center}
            gutterBottom
            variant="h3"
            component="h3"
          >
            Where will you be eating today?
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler('Eat in')}>
                <CardMedia
                  component="img"
                  alt="Eat in"
                  image="/images/eatin.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p"
                  >
                    Eat In
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={[styles.card, styles.space]}>
              <CardActionArea onClick={() => chooseHandler('Take out')}>
                <CardMedia
                  component="img"
                  alt="Take Out"
                  image="/images/takeout.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p"
                  >
                    Take Out
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
