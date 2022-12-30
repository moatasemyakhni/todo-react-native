import 'expo-dev-client';

import React from 'react';
import Button from '../../components/Button';
import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import EmptyState from '../../components/EmptyState';
import ErrorMessage from '../../components/ErrorMessage';
import UserContextAPI from '../../context/UserContextAPI';

import { 
  Text, 
  View, 
  Image,
  ScrollView, 
} from 'react-native';
import { 
  LoginManager,
  GraphRequestParameters, 
} from 'react-native-fbsdk-next';
import { 
  Profile,  
  AccessToken, 
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import { styles } from './style';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import { UserInterface } from '../../context/UserContextAPI';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCallback, FC, useState, useContext } from 'react';

SplashScreen.preventAutoHideAsync();

interface LoginInterface {
  navigation?: StackNavigationProp<any>
}


const Login: FC<LoginInterface> = ({ navigation }) => {

  const [_, dispatch] = useContext(UserContextAPI);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  //font section
  const [fontsLoaded] = useFonts({
    'bad-script': require('../../../assets/fonts/BadScript-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <EmptyState 
      Icon={() => <Entypo name='emoji-sad' size={42} />} 
      text={"Fonts Failed to Download, Please Restart App"} 
    />;
  }
  // end font section

  const login = async () => {
    try {
      setError(false);
      const response = await LoginManager.logInWithPermissions(["public_profile"]);
      if(response.isCancelled) {
        setError(true);
        setMessage('Login Cancelled');
        return;
      }
      const result = await AccessToken.getCurrentAccessToken();

      if(result) {
        const accessToken = result.accessToken.toString();
        getInformationFromToken(accessToken);
      }
    } catch (error) {
      setError(true);
      setMessage(`Error: ${error}`);
    }
  }

  const getInformationFromToken = (token: string) => {
    const requestedParameters: GraphRequestParameters = {
      fields: {
        string: 'name, first_name, last_name, birthday, email',
      },
    };
    const profileRequest: GraphRequest = new GraphRequest(
      '/me', 
      {
      accessToken: token,
      parameters: requestedParameters,
      },
      async (error, result): Promise<GraphRequest | undefined> => {
        if(error) {
          setError(true);
          setMessage('Login info has an error');
          return;
        }
        if(result?.isCancelled) {
          setError(true);
          setMessage('Login Cancelled');
          return;
        }
        if(result?.email === undefined) {
          setError(true);
          setMessage('Error: email access is needed');
          return;
        }

        const users = await SecureStore.getItemAsync('users');
        const response = await Profile.getCurrentProfile();
        const imageUrl = response?.imageURL;
        const userInfo:UserInterface = {
          id: result.id,
          name: result.name,
          birthday: result.birthday,
          imageURL: imageUrl,
        };
        if(navigation) {
        if(!users) {
          // The first ever register
          navigation.navigate('Signup', userInfo);
        }else {
          const userExist = checkUser(users, result.id);
          !userExist?

            navigation.navigate('Signup', userInfo)
          :
            await SecureStore.setItemAsync('currentUser', JSON.stringify(userInfo));
            dispatch({
              type: 'UPDATE_USER_INFO',
              payload: userInfo
            });            
          }
        }
      }
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  }

  const checkUser = (users: string, userId: string | unknown) => {
    const allUsers = JSON.parse(users);
    const findUser = allUsers.filter((user: UserInterface) => user.id === userId);
    return findUser.length !== 0;
  }


  return (
    
    <ScrollView scrollEnabled style={styles.scrollContainer}>
      
      <SafeAreaView onLayout={onLayoutRootView}>
        <View style={styles.container}>
          <Text style={styles.title}>MyTodos</Text>
          <Image 
            source={require('../../../assets/images/giphy.gif')}
            style={styles.image}
          />
          <Button 
            Icon={() => <Entypo name='facebook-with-circle' size={26} color="white" />}
            onPress={login}
            text={'Login'}
            styleContainer={[styles.btn]}
            styleText={[styles.btnText]}
          />

          <ErrorMessage error={error} message={message} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Login;