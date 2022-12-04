import Button from '../../components/Button';
import React, {useState, useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import ErrorMessage from '../../components/ErrorMessage';
import DateTimePicker  from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  View, 
  Text, 
  Image, 
  TextInput,
  ScrollView, 
  TouchableOpacity, 
} from 'react-native';
import { 
  userInterface,
  updateUserInfo, 
  addUserToUsersList, 
} from '../../redux/slices/usersSlice';
import { styles } from './style';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';
import { RootState, store } from '../../redux/store';
import { ImagePickerOptions } from 'expo-image-picker';
import { matureDate } from '../../constants/utilities';


const Signup = ({route}) => {
  const {
    id,
    name,
    birthday,
    imageURL
  } = route.params;
  
  const [fullName, setFullName] = useState(name);
  const [userBirthday, setUserBirthday] = useState(birthday);
  const [userImageURL, setUserImageURL] = useState(imageURL);
  const [maxDate, setMaxDate] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const { users } = useSelector((state: RootState) => state.user);


  useEffect(() => {
    (async () => {
        await MediaLibrary.requestPermissionsAsync();
    })();
    setMaxDate(matureDate);
  }, [fullName, userBirthday]);


  const pickImage = async () => {
    try {
      const options: ImagePickerOptions = {
        mediaTypes:  ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        base64: false,
        exif: false,
        quality: 1,
        aspect: [4, 3],
      }
      const result = await ImagePicker.launchImageLibraryAsync(options);
      if(!result.canceled) {
        const url = result.assets[0].uri;
        setUserImageURL(url);
        if(error) {
          setError(false);
        }
      }
        
    } catch (error) {
      setError(true);
      setMessage(error);
    }
  }

  const handleDateChange = (e) => {
    setShow(false);

    const birthday = new Date(e['nativeEvent'].timestamp).toLocaleDateString('en-US', {
      year: 'numeric', 
      month: 'numeric', 
      day: 'numeric'
    });
    
    setUserBirthday(birthday);
    if(error) {
      setError(false);
    }
  }

  const handleNameChange = (e) => {
    setFullName(e)
    if(error) {
      setError(false);
    }
  }

  const signup = async () => {
    if(!fullName) {
      setError(true);
      setMessage('Name is required');
      return;
    }
    if(!userBirthday) {
      setError(true);
      setMessage('Birthday is required');
      return;
    }
    if(!imageURL) {
      setError(true);
      setMessage('Profile is required');
      return;
    }
    const userInfo:userInterface = {
      id: id,
      name: fullName,
      birthday: userBirthday,
      imageURL: userImageURL,
    };
    // update list
    store.dispatch(addUserToUsersList(userInfo));
    // set updated list as the new list in storage
    await AsyncStorage.setItem('@users', JSON.stringify(users));
    
    await AsyncStorage.setItem('@currentUser', JSON.stringify(userInfo));
    store.dispatch(updateUserInfo(userInfo));
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.scrollContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={pickImage}
            style={styles.imgWrapper}
          >
            <Text style={styles.imgText}>Edit</Text>
            <Image 
                source={{
                    uri: userImageURL,
                }}
                style={styles.img}
            />
          </TouchableOpacity>

          <TextInput 
            placeholder='FullName...'
            keyboardType='default'
            onChangeText={(e) => handleNameChange(e)}
            value={fullName}
            style={styles.input}
          />
          <Button 
            onPress={() => setShow(true)} 
            text={`Birthday: ${userBirthday}` || "Choose birthday Date"}
            styleContainer={[styles.btnDateContainer]}
            styleText={[styles.btnDateText]}
          />
          {show && <DateTimePicker
            testID="dateTimePicker"
            value={new Date(userBirthday)}
            mode={'date'}
            is24Hour={true}
            dateFormat="longdate"
            onChange={handleDateChange}
            minimumDate={new Date(1970, 0, 1)}
            maximumDate={new Date(maxDate)}
          />
          }
          <Button 
            Icon={() => <MaterialIcons color={'white'} name='assignment' size={24} />}
            text='Signup'
            styleContainer={[styles.btn]}
            styleText={[styles.btnText]}
            onPress={signup}
          />
          <ErrorMessage error={error} message={message} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Signup;