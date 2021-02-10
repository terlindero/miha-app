import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const ForgotPassEmailConfirm = props => {
	return <View style = {styles.container}>
	<Text style={styles.logo}>Enter Confirmation Code</Text>
	<Text style={styles.explain1}>Enter the 6-digit code we sent to your email</Text>
	<TouchableOpacity>
	<Text  style={styles.newOne}>Request a New One</Text>
	</TouchableOpacity>
	<View style = {styles.inputView}>
	<TextInput 
	placeholder = "Confirmation Number"
	placeholderTextColor = "#c3c3c3"
	style = {styles.inputText}/>
	</View>
	<TouchableOpacity onPress = {() => props.navigation.navigate('NewPassword')}
	style = {styles.loginBtn}>
	<Text style = {styles.loginText}>Confirm Email</Text>
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
		fontSize: 35,
		color: '#335e90',
		marginBottom: 40
	},
	inputView: {
		width: '80%',
		backgroundColor: '#ffffff',
		borderRadius:20,
		borderColor: '#c3c3c3',
		borderWidth: 2,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		padding: 20
	},
	inputText: {
		height: 90,
		color: 'black',
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
		color: "white",
		fontWeight: 'bold'
	},
	explain1: {
		fontWeight: 'bold',
		fontSize: 14,
		color: '#335e90',
		marginBottom: 20,
		textAlign: 'center'
	},
	newOne: {
		color: '#87c6ec',
		fontSize:15,
		marginBottom: 17,
		fontWeight: 'bold'
	}
});

export default ForgotPassEmailConfirm;