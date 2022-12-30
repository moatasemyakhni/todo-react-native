import 'react-native-gesture-handler';

import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import TodoProvider from '../providers/TodoProvider';
import UserContextAPI from '../context/UserContextAPI';

import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';


const SwitcherStack = () => {
    const [user] = useContext(UserContextAPI);
    
    return (
        <NavigationContainer>
            {user.currentUser?.id?
                <TodoProvider><MainStack /></TodoProvider>
            :
            // UserProvide is already wrapping the SwitcherStack
                <AuthStack />
            }
        </NavigationContainer>
    );
}

export default SwitcherStack;