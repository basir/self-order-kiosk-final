import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Store } from './Store';
import { Route, BrowserRouter } from 'react-router-dom';
import ChooseScreen from './screens/ChooseScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import QueueScreen from './screens/QueueScreen';
import { createMuiTheme } from '@material-ui/core';
import ReviewScreen from './screens/ReviewScreen';
import PaymentScreen from './screens/PaymentScreen';
import AdminScreen from './screens/AdminScreen';
import SelectPaymentScreen from './screens/SelectPaymentScreen';
import CompleteOrderScreen from './screens/CompleteOrderScreen';
import { Helmet } from 'react-helmet';

const theme = createMuiTheme({
  typography: {
    h1: { fontWeight: 'bold' },
    h2: {
      fontSize: '2rem',
      color: 'black',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'white',
    },
  },
  palette: {
    primary: { main: '#ff1744' },
    secondary: {
      main: '#118e16',
      contrastText: '#ffffff',
    },
  },
});
function App() {
  const { state } = useContext(Store);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Self-Order Kiosk</title>
      </Helmet>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={state.widthScreen ? 'lg' : 'sm'}>
          <Paper>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/admin" component={AdminScreen} exact></Route>
            <Route path="/queue" component={QueueScreen} exact></Route>
            <Route path="/choose" component={ChooseScreen} exact></Route>
            <Route path="/order" component={OrderScreen} exact></Route>
            <Route path="/review" component={ReviewScreen} exact></Route>
            <Route
              path="/select-payment"
              component={SelectPaymentScreen}
              exact
            ></Route>
            <Route path="/payment" component={PaymentScreen} exact></Route>
            <Route
              path="/complete"
              component={CompleteOrderScreen}
              exact
            ></Route>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
