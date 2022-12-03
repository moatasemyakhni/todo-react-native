import React from 'react';
import Todo from '../screens/Todo';
import StackHeader from '../components/StackHeader';
import DrawerContent from '../components/DrawerContent';

import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MainStack = () => {
    const StackMain = createStackNavigator();
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen
                name='Todo'
                component={Todo}
                options={{ 
                    headerTitle: (props) => <StackHeader 
                    text={'MyTodos'} 
                    Icon={ () => <MaterialIcons name='assignment' size={29}/>}
                    {...props}/> 
                 }}
            />
        </Drawer.Navigator>
    );
}

export default MainStack;