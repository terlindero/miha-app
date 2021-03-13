import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Context as BottleContext} from '../context/BottleContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const BottleInput = ({ navigation}) => {
	const { state, createBottle } = useContext(BottleContext);
	const [quantity, setQuantity] = useState('');
	const [time, setTime] = useState('');
	const [date, setDate] = useState('');
	
	return <KeyboardAwareScrollView resetScrollToCoords={{ x:0, y:0}} contentContainerStyle = {styles.container}>
	<TouchableOpacity onPress = {() => navigation.navigate('FoodInput')}
	style = {styles.backBtn}>
	<Ionicons name ='md-arrow-round-back' size = {25} color = '#335e90' style={{marginRight: 10, marginLeft: 10}}/>
	<Text style = {styles.backText}>BACK</Text>
	</TouchableOpacity>
	<Text style = {styles.logo}>Log New Feeding Data</Text>
	<Text style = {styles.extraInfo}>If your child drinks formula, approximately how much formula do they drink?</Text>
	
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "Quantity (oz)"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {quantity}
		onChangeText = {setQuantity}
		autoCapitalize = "none"
		autoCorrect = {false}/>
	</View>
	
	<Text style = {styles.extraInfo}>If your child drinks breast milk, how long do they approximately drink for?</Text>
	
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "Time (minutes)"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {time}
		onChangeText = {setTime}
		autoCapitalize = "none"
		autoCorrect = {false}/>
	</View>
	
	<Text style = {styles.extraInfo}>When was this data taken?</Text>
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
	
	
	<TouchableOpacity onPress = {() => createBottle({ quantity, time, date})}
	style = {styles.loginBtn}>
	<Text style = {styles.loginText}>Log Data</Text>
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
	rowContainer: {
		flexDirection: 'column',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#fff',
		backgroundColor: 'white'
	},
	logo: {
		fontSize: 25,
		color: '#335e90',
		marginBottom: 40,
		fontWeight: 'bold',
		marginTop: 100
	},
	extraInfo: {
		fontSize: 17,
		color: '#335e90',
		marginBottom: 25,
		fontWeight: 'bold',
		marginLeft: 15,
		marginRight: 15
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
		width: '80%',
		backgroundColor: 'rgb(144,212,57)',
		borderRadius: 20,
		height:50,
		alignItems: "center",
		justifyContent: "center",
		marginTop:20,
		marginBottom:20
	},
	bottom: {
		justifyContent: 'flex-end'
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

export default BottleInput;