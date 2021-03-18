import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile215776Navigator from '../features/UserProfile215776/navigator';
import Maps215757Navigator from '../features/Maps215757/navigator';
import Settings215735Navigator from '../features/Settings215735/navigator';
import Settings215720Navigator from '../features/Settings215720/navigator';
import NotificationList215719Navigator from '../features/NotificationList215719/navigator';
import Maps215718Navigator from '../features/Maps215718/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile215776: { screen: UserProfile215776Navigator },
Maps215757: { screen: Maps215757Navigator },
Settings215735: { screen: Settings215735Navigator },
Settings215720: { screen: Settings215720Navigator },
NotificationList215719: { screen: NotificationList215719Navigator },
Maps215718: { screen: Maps215718Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
