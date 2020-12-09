import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import ChooseScreen from './screens/ChooseScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import { createMuiTheme } from '@material-ui/core';
import ReviewScreen from './screens/ReviewScreen';
import PaymentScreen from './screens/PaymentScreen';
import SelectPaymentScreen from './screens/SelectPaymentScreen';
import CompleteOrderScreen from './screens/CompleteOrderScreen';

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
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/choose" component={ChooseScreen} exact></Route>
            <Route
              path="/order/:orderType/:categoryName?"
              component={OrderScreen}
              exact
            ></Route>
            <Route
              path="/review/:orderType"
              component={ReviewScreen}
              exact
            ></Route>
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
