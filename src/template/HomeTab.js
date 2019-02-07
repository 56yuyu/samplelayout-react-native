/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { createStackNavigator, createTabNavigator } from 'react-navigation';
import TabNavigationRoot from './TabNavigationRoot';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Video from '../screens/Video';
import Account from '../screens/Account';

// inisialisasi tab menu
const TabNavigatorScreen = createTabNavigator(
	{
		Home: { screen: Home },
		Category: { screen: Category },
		Video: { screen: Video },
		LoginScreen: { screen: Account },
		Account: { screen: Account },
	}, {
		tabBarComponent: TabNavigationRoot,
		tabBarPosition: 'bottom',
		animationEnabled: true,
		swipeEnabled: false
	}
);

// inisialisasi screen
export const Root = createStackNavigator(
	{
		LandingScreen: { screen: TabNavigatorScreen },

	}, {
		mode: 'modal',
		headerMode: 'none',
	}
)

export default Root;