import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import {Foundation} from '@expo/vector-icons';

const GraphScreen = ({ navigation}) => {
	return <View style = {styles.container}>
	<View style = {styles.rowContainer}>
	<TouchableOpacity onPress = {() => navigation.navigate('OverviewScreen')}
	style = {styles.backBtn}>
	<Text style = {styles.backText}>OVERVIEW</Text>
	</TouchableOpacity>
	<TouchableOpacity onPress = {() => navigation.navigate('GraphScreen')}
	style = {styles.backBtn}>
	<Text style = {styles.backText}>GRAPHS</Text>
	</TouchableOpacity>
	</View>
	
	<View style = {styles.overviewContainer}>
	<TouchableOpacity onPress = {() => navigation.navigate('WeightGraphs')}
	style = {styles.updateWeight}>
	<MaterialCommunityIcons name ='scale-bathroom' size = {40} color = 'black' style={{marginRight: 18, marginLeft: 15}}/>
	<Text style = {styles.buttonText}> Weight Tracking</Text>
	</TouchableOpacity>
	
	<TouchableOpacity
	style = {styles.updateSleep}>
	<MaterialCommunityIcons name ='sleep' size = {40} color = 'black' style={{marginRight: 18, marginLeft: 15}}/>
	<Text style = {styles.buttonText}> Sleep Tracking</Text>
	</TouchableOpacity>
	
	<TouchableOpacity
	style = {styles.updateFeeding}>
	<MaterialCommunityIcons name ='baby-bottle' size = {40} color = 'black' style={{marginRight: 18, marginLeft: 15}}/>
	<Text style = {styles.buttonText}> Feeding Tracking</Text>
	</TouchableOpacity>
	
	<TouchableOpacity
	style = {styles.updateGrowth}>
	<FontAwesome5 name ='toilet-paper' size = {40} color = 'black' style={{marginRight: 18, marginLeft: 15}} />
	<Text style = {styles.buttonText}> Diaper Tracking</Text>
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
		flexDirection: 'row',
		position: 'absolute',
		top: 60,
		justifyContent: 'center'
	},
	navigationBar: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: 18,
		justifyContent: 'center',
		borderColor: 'white',
		borderWidth: 1,
		backgroundColor: 'white'
	},
	navigationButton: {
		width: '25%',
		backgroundColor: 'white',
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		marginTop:10,
		marginBottom: 5,
		marginRight: 3,
		marginLeft: 3
	},
	newTest: {
		marginTop: 40,
		borderWidth:3,
		borderColor: "#rgb(45,189,212)",
		alignItems:'center',
		justifyContent:'center',
		width:200,
		height: 200,
		backgroundColor: '#rgb(45,189,212)',
		borderRadius: 100
	},
	updateWeight: {
		width: '100%',
		backgroundColor: '#fd753e',
		borderRadius: 10,
		height:85,
		width: 350,
		alignItems: "center",
		//justifyContent: "center",
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
		//justifyContent: "center",
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
		//justifyContent: "center",
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
		//justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		marginTop: 20,
		flexDirection: "row"
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 25
	},
	backText: {
		color: '#335e90',
		fontWeight: 'bold'
	},
	backBtn: {
		width: '30%',
		backgroundColor: 'white',
		borderRadius: 20,
		height:50,
		alignItems: "center",
		justifyContent: "center",
		marginTop:20,
		marginBottom:20,
		marginRight: 50,
		marginLeft: 50
	}
		
});

export default GraphScreen;