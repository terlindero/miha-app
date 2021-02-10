import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';

const NameScreen = props => {
	return <View style = {styles.container}>
	<Text style = {styles.logo}>How should we refer to your child?</Text>
	<View style = {styles.inputView}>
	<TextInput 
	placeholder = " Your Child's First Name"
	placeholderTextColor = "#c3c3c3"
	style = {styles.inputText}/>
	</View>
	<View style = {styles.rowContainer}>
	<TouchableOpacity style = {styles.genderBtn}>
	<Foundation name='female-symbol' size={40} color = '#335e90'/>
	</TouchableOpacity>
	<TouchableOpacity style = {styles.genderBtn}>
	<Foundation name='male-symbol' size={40} color = '#335e90'/>
	</TouchableOpacity>
	</View>
	<TouchableOpacity onPress = {() => props.navigation.navigate('Age')}
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
		flexDirection: 'row'
	},
	logo: {
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