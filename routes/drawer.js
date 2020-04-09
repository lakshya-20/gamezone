import { createDrawerNavigator} from 'react-navigation-drawer';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import loginScreen from '../screens/logoutScreen';

const screens={
    Home:{
        screen:HomeStack,
    },
    About:{
        screen:AboutStack,
    },
    Logout:{
        screen:loginScreen
    }
};

const RootDrawer =createDrawerNavigator(screens);
export default RootDrawer;
