import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer} from 'react-navigation';

import Loading from '../screens/loading';
import LoginScreen from '../screens/loginScreen';
import RootDrawer from './drawer';
import SignupScreen from '../screens/signupScreen';
const screens = {
  Loading:{
    screen:Loading,
  },
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

const LoginStack = createSwitchNavigator(screens,{
  initialRouteName:'Loading'  
});

export default createAppContainer(LoginStack);