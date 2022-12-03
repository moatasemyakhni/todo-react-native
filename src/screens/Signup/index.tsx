import Button from '../../components/Button';
import React, {useState, useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import DateTimePicker  from '@react-native-community/datetimepicker';

import { 
  View, 
  Text, 
  Image, 
  TextInput,
  ScrollView, 
  TouchableOpacity, 
} from 'react-native';
import { styles } from './style';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';
import { ImagePickerOptions } from 'expo-image-picker';
import { matureDate } from '../../constants/utilities';

const Signup = ({route}) => {
  const {
    id,
    name,
    birthday,
    imageURL
  } = route.params;
  const [enable, setEnable] = useState(false);
  const [fullName, setFullName] = useState(name);
  const [userBirthday, setBirthday] = useState(birthday);
  const [userImageURL, setUserImageURL] = useState(imageURL);
  const [maxDate, setMaxDate] = useState('');
  const [show, setShow] = useState(false);
  useEffect(() => {
    (async () => {
        await MediaLibrary.requestPermissionsAsync();
    })();
    setEnable([fullName, userBirthday].every(Boolean));
    setMaxDate(matureDate)
}, [fullName, userBirthday]);


  const pickImage = async () => {
    try {
      setEnable(false);
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
        console.log(url);
        setUserImageURL(url);
      }
        
    } catch (error) {
      console.log(error);
    }
  }
  const handleNameChange = (e) => {
    setFullName(e)
    
    console.log(fullName);
  }
  const handleShowDate = () => {
    setShow(true);
  }
  const handleDateChange = (e) => {
    setShow(false);
    console.log(new Date(e['nativeEvent'].timestamp).toLocaleDateString());
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
            onChangeText={handleNameChange}
            value={fullName}
            style={styles.input}
          />
          <Button 
            onPress={handleShowDate} 
            text={`Birthday: ${birthday}` || "Choose birthday Date"}
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
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Signup;