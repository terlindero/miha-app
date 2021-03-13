import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { Context as DiaperContext} from '../context/DiaperContext';

const PoopInput = ({ navigation }) => {
	const { state, createDiaper } = useContext(DiaperContext);
	const [pee, setPee] = useState('');
	const [poop, setPoop] = useState('');
	const [concerns, setConcerns] = useState('');
	const [date, setDate] = useState('');
	
	return <SafeAreaView style = {styles.container}>
	<ScrollView contentContainerStyle = {styles.scrollView}>
	<TouchableOpacity onPress = {() => navigation.navigate('HomeScreen')}
	style = {styles.backBtn}>
	<Ionicons name ='md-arrow-round-back' size = {25} color = '#335e90' style={{marginRight: 10, marginLeft: 10}}/>
	<Text style = {styles.backText}>BACK</Text>
	</TouchableOpacity>
	<Text style = {styles.logo}>Log New Bathroom Information</Text>
	<Text style = {styles.extraInfo}>On average, how many times a day does your child urinate (pee)?</Text>
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "Times a Day"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {pee}
		onChangeText = {setPee}
		autoCapitalize = "none"
		autoCorrect = {false}/>
	</View>
	<Text style = {styles.extraInfo}>On average, how many times a day does your child have a bowel movement (poop)?</Text>
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "Times a Day"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {poop}
		onChangeText = {setPoop}
		autoCapitalize = "none"
		autoCorrect = {false}/>
	</View>
	<Text style = {styles.extraInfo}>Is there anything concerning about your child's diapers (e.g. color, texture, smell, etc)?</Text>
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "Concerns"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {concerns}
		onChangeText = {setConcerns}
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
	<TouchableOpacity onPress = {() => createDiaper({ pee, poop, concerns, date })} style = {styles.loginBtn}>
	<Text style = {styles.loginText}>Save Diaper Data</Text>
	</TouchableOpacity>
	</ScrollView>
	</SafeAreaView>

	
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
	},
	scrollView: {
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
		marginTop: 100,
		fontWeight: 'bold'
	},
	extraInfo: {
		fontSize: 17,
		color: '#335e90',
		marginBottom: 25,
		fontWeight: 'bold',
		marginLeft: 15,
		marginRight: 15
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
		marginTop:10,
		marginBottom:10,
		marginRight: 50,
		marginLeft: 50,
		position: 'absolute',
		top: 15,
		left: -30
	},
});

export default PoopInput;