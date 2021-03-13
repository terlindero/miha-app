import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Context as SleepContext} from '../context/SleepContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SleepInput = ({ navigation}) => {
	const { state, createSleep } = useContext(SleepContext);
	const [night, setNight] = useState('');
	const [hours, setHours] = useState('');
	const [naps, setNaps] = useState('');
	const [date, setDate] = useState(new Date());
	
	return <KeyboardAwareScrollView resetScrollToCoords={{ x:0, y:0}} contentContainerStyle = {styles.container}>
	<TouchableOpacity onPress = {() => navigation.navigate('HomeScreen')}
	style = {styles.backBtn}>
	<Ionicons name ='md-arrow-round-back' size = {25} color = '#335e90' style={{marginRight: 10, marginLeft: 10}}/>
	<Text style = {styles.backText}>BACK</Text>
	</TouchableOpacity>
	<Text style = {styles.logo}>How is your child sleeping?</Text>
	<Text style = {styles.extraInfo}>Is your child sleeping through the night?</Text>
	
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "YES/NO"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {night}
		onChangeText = {setNight}
		autoCapitalize = "none"
		autoCorrect = {false}/>
	</View>
	
	<Text style = {styles.extraInfo}>On average, how many hours per night does your child sleep for?</Text>
	
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "TIME (HRS)"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {hours}
		onChangeText = {setHours}
		autoCapitalize = "none"
		autoCorrect = {false}/>
	</View>
	
	<Text style = {styles.extraInfo}>How many naps does your child take per day?</Text>
	
	<View style = {styles.inputView}>
	<TextInput 
		placeholder = "# OF NAPS"
		placeholderTextColor = "#c3c3c3"
		style = {styles.inputText}
		value = {naps}
		onChangeText = {setNaps}
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
	
	<TouchableOpacity onPress = {() => createSleep({ night, hours, naps, date })} style = {styles.loginBtn}>
	<Text style = {styles.loginText}>Save Sleep Data</Text>
	</TouchableOpacity>
	</KeyboardAwareScrollView>

	
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
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
		marginTop: 80,
		fontWeight: 'bold',
		marginTop: 120
	},
	extraInfo: {
		fontSize: 17,
		color: '#335e90',
		marginBottom: 25,
		marginLeft: 15,
		marginRight: 15,
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

export default SleepInput;