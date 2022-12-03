import React from 'react';
import SwitcherStack from './src/navigation/SwitcherStack';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <SwitcherStack/>
    </Provider>
  );
}



export default App;