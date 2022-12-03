import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const SwitcherStack = () => {
    const user = useSelector((state: RootState) => state.user);
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            {user.currentUser?.id?
                <MainStack />
            :
                <AuthStack />
            }
        </NavigationContainer>
    );
}

export default SwitcherStack;