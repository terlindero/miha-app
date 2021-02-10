import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Context as AuthContext } from '../context/AuthContext';

const SettingScreen = ({navigate}) => {
	const { signout } = useContext(AuthContext);
	
	return <View style = {styles.container}>
	
	<Text style={styles.logo}>Settings</Text>
	
	<TouchableOpacity onPress = {signout} style = {styles.loginBtn}>
	<Text style = {styles.loginText}>SIGN OUT</Text>
	</TouchableOpacity>
	</View>
	
};

const styles = StyleSheet.create({
	container: {
		flex:0.5,
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
	rowContainer: {
		flexDirection: 'column',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#fff',
		//borderWidth: 1,
		backgroundColor: 'white'
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
});

export default SettingScreen;