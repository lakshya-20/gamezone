import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/loginScreen';
import RootDrawer from './drawer';
import SignupScreen from '../screens/signupScreen';
const screens = {
  Login: {
    screen: LoginScreen,
  },
  Signup:{
    screen: SignupScreen,
  },
  Drawer: {
    screen: RootDrawer,
  },
};

const LoginStack = createStackNavigator(screens,{
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false
      }
});

export default createAppContainer(LoginStack);