import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Context as AuthContext} from '../context/AuthContext';

const LogInScreen = ({ navigation}) => {
	const { state, signin } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	return <KeyboardAwareScrollView resetScrollToCoords={{ x:0, y:0}} contentContainerStyle = {styles.container}>
	<Text style={styles.logo}>Log In</Text>
	
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "Email Address"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {email}
		onChangeText = {setEmail}
		autoCapitalize = "none"
		autoCorrect = {false}/>
	</View>
	
	<View style = {styles.inputView}>
	<TextInput 
		secureTextEntry
		placeholder = "Password"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {password}
		onChangeText = {setPassword}
		autoCapitalize = "none"
		autoCorrect = {false} />
	</View>
	
	<TouchableOpacity onPress = {() => signin({ email, password})} style = {styles.loginBtn}>
	<Text style = {styles.loginText}>LOG IN</Text>
	</TouchableOpacity>
	
	{state.errorMessage ? <Text style = {styles.errorMessage}>{state.errorMessage}</Text> : null}
	
	<TouchableOpacity onPress = {() => props.navigation.navigate('ForgotPassEmail')}>
	<Text style = {styles.forgot}>Forgot Password?</Text>
	</TouchableOpacity>
	<TouchableOpacity onPress={() => navigation.navigate('FirstWelcome')}>
	<Text style = {styles.forgot}>Sign Up</Text>
	</TouchableOpacity>
	
	</KeyboardAwareScrollView>
	

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
	errorMessage: {
		fontSize: 16,
		color: 'red'
	}
});

export default LogInScreen;