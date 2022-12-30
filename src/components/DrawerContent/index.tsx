import React from 'react';
import Button from '../Button';
import * as SecureStore from 'expo-secure-store';
import UserContextAPI from '../../context/UserContextAPI';

import { styles } from './style';
import { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const DrawerContent = () => {
    const [{ currentUser }, dispatch] = useContext(UserContextAPI);

    const signout = async () => {
        dispatch({
            type: 'DELETE_USER'
        });
        await SecureStore.deleteItemAsync('currentUser');
    }
  return (
    <View style={styles.container}>
        <Image 
            source={{
                uri: currentUser.imageURL,
            }}
            style={styles.img}
            />
        <Text style={styles.name}>{currentUser.name}</Text>
        <View style={styles.bodWrapper}>
            <Text style={styles.bod}>{ currentUser.birthday }</Text>
            <FontAwesome name="birthday-cake" size={25} color="black" />
        </View>
        <Button 
            onPress={signout}
            text="Logout"
            styleContainer={[styles.btn]}
            styleText={[styles.btnText]}
            Icon={() => <MaterialIcons name="logout" size={29} color="white" />}
        />
    </View>
  );
}

export default DrawerContent;