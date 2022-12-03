import 'expo-dev-client';
import Button from '../../components/Button';
import React, { useCallback, FC } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import EmptyState from '../../components/EmptyState';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  Text, 
  View, 
  Image,
  StyleSheet, 
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
import { useFonts } from 'expo-font';
import { store } from '../../redux/store';
import { Entypo } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { updateUserInfo, userInterface } from '../../redux/slices/usersSlice';
import { styles } from './style';

SplashScreen.preventAutoHideAsync();

interface LoginInterface {
  navigation?: StackNavigationProp<any>
}

const Login: FC<LoginInterface> = ({ navigation }) => {
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
      const response = await LoginManager.logInWithPermissions(["public_profile"]);
      if(response.isCancelled) {
        console.log("Login Cancelled");
        return;
      }
      console.log("Permission granted!", response.grantedPermissions?.toString());

      const result = await AccessToken.getCurrentAccessToken();

      if(result) {
        const accessToken = result.accessToken.toString();
        getInformationFromToken(accessToken);
      }
    } catch (error) {
      console.log("ERROR No Login", error);
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
          console.log('Login info has an error');
          return;
        }
        if(result?.isCancelled) {
          console.log("Login Cancelled");
          return;
        }
        if(result?.email === undefined) {
          console.log("Error: email access is needed");
          return;
        }
        
        console.log("CALLBACK:", result);
        const users = await AsyncStorage.getItem('@users');
        const response = await Profile.getCurrentProfile();
        console.log(response, "RESPONSE");
        const imageUrl = response?.imageURL;
        const userInfo:userInterface = {
          id: result.id,
          name: result.name,
          birthday: result.birthday,
          imageURL: imageUrl,
        };
        if(navigation) {
        if(!users) {
          // The first ever register
          console.log("new user");
          navigation.navigate('Signup', userInfo);
        }else {
          const userExist = checkUser(users, result.id);
          !userExist?

            navigation.navigate('Signup', userInfo)
          :
            await AsyncStorage.setItem('@currentUser', JSON.stringify(userInfo));
            store.dispatch(updateUserInfo(userInfo));
            console.log("LOG IN!");
          }
        }
      }
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  }

  const checkUser = (users: string, userId: string | unknown) => {
    const allUsers = JSON.parse(users);
    const findUser = allUsers.filter((user: userInterface) => user.id === userId);
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
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Login;