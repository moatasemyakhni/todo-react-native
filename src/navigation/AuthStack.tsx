import React from 'react';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import StackHeader from '../components/StackHeader';

import { MaterialIcons } from '@expo/vector-icons';
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
                options={{ 
                    headerTitle: (props) => 
                    <StackHeader 
                        Icon={() => <MaterialIcons name='assignment' size={29} />}
                        text="MyTodos"
                        {...props}
                    />
                 }}
            />
        </StackAuth.Navigator>
    );
}

export default AuthStack;