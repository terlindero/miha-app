import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator} from 'react-navigation';

import LogInScreen from './src/screens/LogInScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPassEmailScreen from './src/screens/ForgotPassEmailScreen';
import ForgotPassEmailConfirm from './src/screens/ForgotPassEmailConfirm';
import NewPassword from './src/screens/NewPassword';
import FirstWelcome from './src/screens/FirstWelcome';
import NameScreen from './src/screens/NameScreen';
import AgeScreens from './src/screens/AgeScreens';
import WeightScreen from './src/screens/WeightScreen';
import HomeScreen from './src/screens/HomeScreen';
import HealthDataScreen from './src/screens/HealthDataScreen';
import ModuleScreen from './src/screens/ModuleScreen';
import SettingScreen from './src/screens/SettingScreen';
import WeightInput from './src/screens/weightInput';
import PoopInput from './src/screens/poopInput';
import FoodInput from './src/screens/foodInput';
import SleepInput from './src/screens/sleepInput';

import { MaterialIcons } from '@expo/vector-icons';
import {Foundation} from '@expo/vector-icons';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
	loginFlow: createStackNavigator({
		Welcome: WelcomeScreen,
		LogIn: LogInScreen,
		SignUp: SignUpScreen,
		FirstWelcome: FirstWelcome,
		Name: NameScreen,
		Age: AgeScreens,
		Weight: WeightScreen,
		
	}, {
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false,
		},
		}
		
	),
	mainFlow: createBottomTabNavigator({
		Home:{
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon:({tintColor})=>(<MaterialIcons name='add'  style = {{marginTop: 7}} size = {43} color = {tintColor} />
			),
			},
		},
		Data:{
			screen: HealthDataScreen,
			navigationOptions: {
				tabBarIcon:({tintColor})=>(<Foundation name = 'graph-bar' style = {{marginTop: 7}} size = {43} color = {tintColor} />
				)
			}
		},
		Modules:{
			screen: ModuleScreen,
			navigationOptions: {
				tabBarIcon:({tintColor})=>(<MaterialIcons name = 'view-module' style = {{marginTop: 7}} size = {43} color = {tintColor} />
				)
			}
		},
		Settings:{
			screen: SettingScreen,
			navigationOptions: {
				tabBarIcon: ({tintColor})=>(<MaterialIcons name = 'settings' style = {{marginTop: 7}} size = {43} color = {tintColor} />
				)
			}
		}
	}, {
		tabBarOptions: {
			inactiveTintColor: '#bebcbc',
			activeTintColor: '#c9da20',
			showLabel: false,
			style: {
				borderTopColor: 'white'
			},
			indicatorStyle: {
				height: 0,
			},
			showIcon: true
		}
		
	})

});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
	<AuthProvider>
	<App ref={(navigator) => { setNavigator(navigator) }}/>
	</AuthProvider>
	);
};
