import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps90371Navigator from '../features/Maps90371/navigator';
import Add-Item90370Navigator from '../features/Add-Item90370/navigator';
import Maps90366Navigator from '../features/Maps90366/navigator';
import UserProfile90362Navigator from '../features/UserProfile90362/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps90371: { screen: Maps90371Navigator },
Add-Item90370: { screen: Add-Item90370Navigator },
Maps90366: { screen: Maps90366Navigator },
UserProfile90362: { screen: UserProfile90362Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
