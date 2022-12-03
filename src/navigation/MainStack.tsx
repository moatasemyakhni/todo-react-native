import React from 'react';
import Todo from '../screens/Todo';

import { createStackNavigator } from '@react-navigation/stack';


const MainStack = () => {
    const StackMain = createStackNavigator();

    return (
        <StackMain.Navigator>
            <StackMain.Screen
                name='Todo'
                component={Todo}
            />
        </StackMain.Navigator>
    );
}

export default MainStack;