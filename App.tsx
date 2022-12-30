import 'expo-dev-client';
import 'react-native-gesture-handler';

import React from 'react';
import UserProvider from './src/providers/UserProvider';
import SwitcherStack from './src/navigation/SwitcherStack';


const App = () => {
  return (
    <UserProvider>
      <SwitcherStack/>
    </UserProvider>
  );
}



export default App;