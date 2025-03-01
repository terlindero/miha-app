import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Context as WeightContext} from '../context/WeightContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const WeightScreen = ({navigation}) => {
	const { state, createWeight } = useContext(WeightContext);
	const [newweight, setWeight] = useState('');
	const [date, setDate] = useState('');
	
	return <KeyboardAwareScrollView resetScrollToCoords={{ x:0, y:0}} contentContainerStyle = {styles.container}>
	<Text style = {styles.logo}>Weight is an important health indicator for your child.</Text>
	<Text style = {styles.extraInfo}>How much does your child weigh?</Text>
	
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "Weight (lbs)"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {newweight}
		onChangeText = {setWeight}
		autoCapitalize = "none"
		autoCorrect = {false}/>
	</View>
	
	<Text style = {styles.extraInfo}>When was this weight taken?</Text>
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "MM/DD/YY"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {date}
		onChangeText = {setDate}
		autoCapitalize = "none"
		autoCorrect = {false}/>
	</View>
	
	<View style = {styles.rowContainer}>
	<TouchableOpacity onPress = {() => navigation.navigate('Name')}
	style = {styles.loginBtn}>
	<Text style = {styles.loginText}>BACK</Text>
	</TouchableOpacity>
	<TouchableOpacity onPress = {() => createWeight({ newweight, date})}
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
	exInfo: {
		fontSize: 17,
		color: '#335e90',
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

export default WeightScreen;