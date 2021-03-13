import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Context as WeightContext} from '../context/WeightContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';

const BeginScreen = props => {
	return <View style = {styles.container}>
	<TouchableOpacity onPress = {() => props.navigation.navigate('Temp')}
	style = {styles.backBtn}>
	<Ionicons name ='md-arrow-round-back' size = {25} color = '#335e90' style={{marginRight: 10, marginLeft: 10}}/>
	<Text style = {styles.backText}>BACK</Text>
	</TouchableOpacity>
	<View>
	<Text style = {styles.logo}>Let's begin a new MIHA test!</Text>
	</View>
	<TouchableOpacity onPress = {() => props.navigation.navigate('Temp')}
	style = {styles.loginBtn}>
	<Text style = {styles.loginText}>LET'S GO!</Text>
	</TouchableOpacity>
	
	</View>	
	
	
}


const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff'
	},
	logo: {
		marginTop: 70,
		fontWeight: 'bold',
		fontSize: 25,
		color: '#335e90',
		marginBottom: 40
	},
	inputView: {
		width: '80%',
		backgroundColor: '#ffffff',
		borderRadius:25,
		borderColor: '#335e90',
		borderWidth: 2,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		padding: 20
	},
	inputText: {
		height: 90,
		color: '#335e90',
		fontWeight: 'bold'
	},
	forgot: {
		color: '#969faa',
		fontSize:14,
		marginBottom: 17
	},
	loginBtn: {
		width: '80%',
		backgroundColor: 'rgb(144,212,57)',
		borderRadius: 20,
		height:50,
		alignItems: "center",
		justifyContent: "center",
		marginTop:20,
		marginBottom:20
	},
	loginText: {
		color: 'white',
		fontWeight: 'bold'
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
		paddingVertical: 5,
		flexDirection: 'row',
		marginTop:20,
		marginBottom:20,
		marginRight: 50,
		marginLeft: 50,
		position: 'absolute',
		top: 45,
		left: -30
	},
});

export default BeginScreen;