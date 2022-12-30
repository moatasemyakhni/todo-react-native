import 'react-native-gesture-handler';
import 'expo-dev-client';

import React from 'react';
import SwitcherStack from './src/navigation/SwitcherStack';
import UserProvider from './src/providers/UserProvider';


const App = () => {
  return (
    <UserProvider>
      <SwitcherStack/>
    </UserProvider>
  );
}



export default App;