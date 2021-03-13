import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { Context as NameContext} from '../context/NameContext';
import DropDownPicker from 'react-native-dropdown-picker';

const NameScreen = ({navigation}) => {
	const { state, createName } = useContext(NameContext);
	const [childname, setName] = useState('');
	const [sex, setSex] = useState('');
	
	return <View style = {styles.container}>
	<Text style = {styles.logo}>How should we refer to your child?</Text>
	
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = " Your Child's First Name"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {childname}
		onChangeText = {setName}
		autoCorrect = {false}/>
	</View>
	
	<Text style = {styles.sexlogo}>Please type your child's birth sex</Text>
	
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "Female/Male/N/A"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {sex}
		onChangeText = {setSex}
		autoCorrect = {false}/>
	</View>
	
	<TouchableOpacity onPress = {() => createName({ childname, sex})}
	style = {styles.loginBtn}>
	<Text style = {styles.loginText}>NEXT</Text>
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
	rowContainer: {
		justifyContent: 'flex-start'
	},
	logo: {
		fontSize: 20,
		color: '#335e90',
		marginBottom: 40,
		fontWeight: 'bold'
	},
	sexlogo: {
		fontSize: 20,
		color: '#335e90',
		marginBottom: 40,
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
	genderBtn: {
		width: '25%',
		backgroundColor: '#f3f1f1',
		borderRadius: 20,
		height:90,
		alignItems: "center",
		justifyContent: "center",
		marginTop:20,
		marginBottom:20,
		marginRight: 30,
		marginLeft: 30
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

export default NameScreen;