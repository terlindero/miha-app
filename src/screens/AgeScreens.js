import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Context as AgeContext} from '../context/AgeContext';
import { Foundation } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AgeScreens = ({navigation}) => {
	const { state, createAge } = useContext(AgeContext);
	const [birthday, setBirthday] = useState('');
	
	return <KeyboardAwareScrollView resetScrollToCoords={{ x:0, y:0}} contentContainerStyle = {styles.container}>
	<Text style = {styles.logo}>MIHA provides age-appropriate information to best suit your situation.</Text>
	<Text style = {styles.extraInfo}>To do this, we use your childs birthday:</Text>
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "MM/DD/YY"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {birthday}
		onChangeText = {setBirthday}/>
	</View>
	<View style = {styles.rowContainer}>
	<TouchableOpacity onPress = {() => navigation.navigate('Name')}
	style = {styles.loginBtn}>
	<Text style = {styles.loginText}>BACK</Text>
	</TouchableOpacity>
	
	<TouchableOpacity onPress = {() => createAge({ birthday })}
	style = {styles.loginBtn}>
	<Text style = {styles.loginText}>NEXT</Text>
	</TouchableOpacity>
	</View>
	</KeyboardAwareScrollView>

	
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
		bottom: 0,
		justifyContent: 'center'
	},
	logo: {
		fontSize: 25,
		color: '#335e90',
		marginBottom: 40,
		fontWeight: 'bold'
	},
	extraInfo: {
		fontSize: 17,
		color: '#335e90',
		marginBottom: 35,
		fontWeight: 'bold'
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
		
	loginBtn: {
		width: '30%',
		backgroundColor: 'rgb(144,212,57)',
		borderRadius: 20,
		height:50,
		alignItems: "center",
		justifyContent: "center",
		marginTop:20,
		marginBottom:20,
		marginRight: 50,
		marginLeft: 50
	},
	bottom: {
		justifyContent: 'flex-end'
	},
	loginText: {
		color: 'white',
		fontWeight: 'bold'
	}
});

export default AgeScreens;