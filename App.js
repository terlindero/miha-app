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
import ModuleScreen from './src/screens/ModuleScreen';
import SettingScreen from './src/screens/SettingScreen';
import WeightInput from './src/screens/weightInput';
import PoopInput from './src/screens/poopInput';
import FoodInput from './src/screens/foodInput';
import SleepInput from './src/screens/sleepInput';
import BottleInput from './src/screens/bottleInput';
import SolidInput from './src/screens/solidFoodInput';
import WeightModule from './src/screens/weightModule';
import OverviewScreen from './src/screens/OverviewScreen';
import GraphScreen from './src/screens/GraphScreen';
import WeightOverview from './src/screens/WeightOverview';
import SleepOverview from './src/screens/SleepOverview';
import PoopOverview from './src/screens/PoopOverview';
import FoodOverview from './src/screens/FoodOverview';
import WeightGraphs from './src/screens/WeightGraphs';
import BeginScreen from './src/screens/BeginScreen';
import TempScreen from './src/screens/TempScreen';

import { MaterialIcons } from '@expo/vector-icons';
import {Foundation} from '@expo/vector-icons';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import { Provider as WeightProvider } from './src/context/WeightContext';
import { Provider as SleepProvider } from './src/context/SleepContext';
import { Provider as BottleProvider } from './src/context/BottleContext';
import { Provider as FoodProvider } from './src/context/FoodContext';
import { Provider as DiaperProvider } from './src/context/DiaperContext';
import { Provider as NameProvider } from './src/context/NameContext';
import { Provider as AgeProvider } from './src/context/AgeContext';

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
		}),
	mainFlow: createBottomTabNavigator({
		Home: createStackNavigator({
			HomeScreen: HomeScreen,
			WeightInput: WeightInput,
			PoopInput: PoopInput,
			FoodInput: FoodInput,
			SleepInput: SleepInput,
			BottleInput: BottleInput,
			SolidInput: SolidInput,
			Begin: BeginScreen,
			Temp: TempScreen
		}, {
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false,
			tabBarIcon:({tintColor})=>(<MaterialIcons name = 'add' style = {{marginTop: 7}} size = {43} color = {tintColor} />
				)
		},
		}),
		
		Data:createStackNavigator({
			OverviewScreen: OverviewScreen,
			GraphScreen: GraphScreen,
			WeightOverview: WeightOverview,
			SleepOverview: SleepOverview,
			FoodOverview: FoodOverview,
			PoopOverview: PoopOverview,
			WeightGraphs: WeightGraphs
		}, {
			headerMode: 'none',
			navigationOptions: {
				headerVisible: false,
				tabBarIcon:({tintColor})=>(<Foundation name = 'graph-bar' style = {{marginTop: 7}} size = {43} color = {tintColor} />
				)
			},
		}),
		
		Modules: createStackNavigator({
			ModuleScreen: ModuleScreen,
			WeightModule: WeightModule
		}, {
			headerMode: 'none',
			navigationOptions: {
				tabBarIcon:({tintColor})=>(<MaterialIcons name = 'view-module' style = {{marginTop: 7}} size = {43} color = {tintColor} />
				)
			},
		}),
		
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
	<DiaperProvider>
	<BottleProvider>
	<FoodProvider>
	<SleepProvider>
	<WeightProvider>
	<AgeProvider>
	<NameProvider>
	<AuthProvider>
	<App ref={(navigator) => { setNavigator(navigator) }}/>
	</AuthProvider>
	</NameProvider>
	</AgeProvider>
	</WeightProvider>
	</SleepProvider>
	</FoodProvider>
	</BottleProvider>
	</DiaperProvider>
	);
};
