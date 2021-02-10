import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const WelcomeScreen = props => {
	return <View style = {styles.container}>
	<Text style={styles.logo}>MIHA</Text>
	<TouchableOpacity onPress = {() => props.navigation.navigate('FirstWelcome')} style = {styles.loginBtn}>
	<Text style = {styles.loginText}>I'M NEW</Text>
	</TouchableOpacity>
	<TouchableOpacity onPress = {() => props.navigation.navigate('LogIn')} style = {styles.signUpBtn}>
	<Text style = {styles.signUpText}>I'm returning to Sign In</Text>
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
		//fontWeight: 'bold',
		fontSize: 60,
		color: '#335e90',
		marginBottom: 40,
		fontWeight: 'bold'
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
		color: "white",
		fontWeight: 'bold',
		fontSize: 15
	},
	signUpBtn: {
		alignItems: "center",
		justifyContent: "center",
		marginTop:20,
		marginBottom:20
	},
	signUpText: {
		color: "rgb(45,189,212)",
		fontWeight: 'bold',
		fontSize: 14
	}
});

export default WelcomeScreen;