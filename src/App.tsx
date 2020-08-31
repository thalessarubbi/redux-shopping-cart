import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Catalog from './pages/Catalog';
import Cart from './components/Cart';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
