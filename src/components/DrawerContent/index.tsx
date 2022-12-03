import React from 'react';
import Button from '../Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './style';
import { useSelector } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { RootState, store } from '../../redux/store';
import { deleteUser } from '../../redux/slices/usersSlice';

const DrawerContent = () => {
    const { currentUser } = useSelector((state: RootState) => state.user);

    const signout = async () => {
        store.dispatch(deleteUser());
        await AsyncStorage.removeItem('@currentUser');
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