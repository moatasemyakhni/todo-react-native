import 'react-native-gesture-handler';
import 'expo-dev-client';

import React from 'react';
import SwitcherStack from './src/navigation/SwitcherStack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import UserProvider from './src/providers/UserProvider';


const App = () => {
  return (
    <UserProvider>
      <SwitcherStack/>
    </UserProvider>
  );
}



export default App;