import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import {Foundation} from '@expo/vector-icons';

const ModuleScreen = props => {
	return <View style = {styles.container}>
	<View style = {styles.rowContainer}>
	
	<TouchableOpacity style = {styles.newTest}>
	<Text style = {styles.howToText}> How To's </Text>
	</TouchableOpacity>
	
	<TouchableOpacity onPress = {() => props.navigation.navigate('WeightInput')}
	style = {styles.updateWeight}>
	<Text style = {styles.buttonText}> How do I weigh my baby at home? </Text>
	</TouchableOpacity>
	
	<TouchableOpacity onPress = {() => props.navigation.navigate('SleepInput')}
	style = {styles.updateSleep}>
	<Text style = {styles.buttonText}> Understanding my MIHA readings </Text>
	</TouchableOpacity>
	
	<TouchableOpacity onPress = {() => props.navigation.navigate('FoodInput')}
	style = {styles.updateFeeding}>
	<Text style = {styles.buttonText}> What do I do if my baby is dehydrated? </Text>
	</TouchableOpacity>
	
	<TouchableOpacity onPress = {() => props.navigation.navigate('PoopInput')}
	style = {styles.updateGrowth}>
	<Text style = {styles.buttonText}>How can I get the clearest MIHA readings? </Text>
	</TouchableOpacity>
	
	</View>
	</View>
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff'
	},
	rowContainer: {
		flexDirection: 'column',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#fff',
		//borderWidth: 1,
		backgroundColor: 'white'
	},
	howToText: {
		color: "white",
		fontWeight: 'bold',
		fontSize: 25
	},
	newTest: {
		borderWidth:3,
		borderColor: "#rgb(45,189,212)",
		alignItems:'center',
		justifyContent:'center',
		width: 200,
		height: 100,
		backgroundColor: '#rgb(45,189,212)',
		borderRadius: 10
	},
	updateWeight: {
		width: '100%',
		backgroundColor: '#fd753e',
		borderRadius: 10,
		height:85,
		width: 350,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		marginTop: 30,
		flexDirection: "row"
	},
	updateSleep: {
		width: '100%',
		backgroundColor: '#fdb33e',
		borderRadius: 10,
		height:85,
		width: 350,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		marginTop: 20,
		flexDirection: "row"
	},
	updateFeeding: {
		width: '100%',
		backgroundColor: '#a085ff',
		borderRadius: 10,
		height:85,
		width: 350,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		marginTop: 20,
		flexDirection: "row"
	},
	updateGrowth: {
		width: '100%',
		backgroundColor: '#1cdf62',
		borderRadius: 10,
		height:85,
		width: 350,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		marginTop: 20,
		flexDirection: "row"
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 17
	}
		
});

export default ModuleScreen;