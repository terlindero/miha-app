import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const FirstWelcome = props => {
	return <View style = {styles.container}>
	<View>
	<Text style = {styles.logo}>Howdy!</Text>
	<Text style = {styles.logo}>To provide you with the best results, we will need to gather some information from you.</Text>
	</View>
	<TouchableOpacity onPress = {() => props.navigation.navigate('Name')} 
	style = {styles.loginBtn}>
	<Text style = {styles.loginText}>LET'S GO!</Text>
	</TouchableOpacity>
	
	</View>
	
	
	
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff'
	},
	logo: {
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
	}
});

export default FirstWelcome;