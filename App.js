import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/LoginStack';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {

  //Preventing back to login from home
  const prevGetStateForAction = Navigator.router.getStateForAction;

  Navigator.router.getStateForAction = (action, state) => {
  // Do not allow to go back from Home
  /*
  if (action.type === 'Navigation/BACK' && state && state.routes[state.index].routeName === 'Home') {
    return null;
  }
  */
  // Do not allow to go back to Login
  if (action.type === 'Navigation/BACK' && state) {
    const newRoutes = state.routes.filter(r => r.routeName !== 'Login');
    const newIndex = newRoutes.length - 1;
    return prevGetStateForAction(action, { index: newIndex, routes: newRoutes });
  }
  return prevGetStateForAction(action, state);
  };


  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } 
  else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }
}
