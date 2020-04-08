import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import LoginScreen from '../screens/loginScreen';
import RootDrawer from './drawer';

const screens = {
  Login: {
    screen: LoginScreen,
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