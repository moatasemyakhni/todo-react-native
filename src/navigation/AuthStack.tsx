import React from 'react';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

import { createStackNavigator } from '@react-navigation/stack';


const AuthStack = () => {
    const StackAuth = createStackNavigator();

    return (
        <StackAuth.Navigator>
            <StackAuth.Screen
                name='Login'
                component={Login}
                options={{ 
                    headerShown: false,
                 }}
            />

            <StackAuth.Screen
                name='Signup'
                component={Signup}
            />
        </StackAuth.Navigator>
    );
}

export default AuthStack;