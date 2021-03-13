import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WeightModule = ({ navigation}) => {
	return <View style = {styles.container}>
	<TouchableOpacity onPress = {() => navigation.navigate('ModuleScreen')}
	style = {styles.backBtn}>
	<Ionicons name ='md-arrow-round-back' size = {25} color = '#335e90' style={{marginRight: 10, marginLeft: 10}}/>
	<Text style = {styles.backText}>BACK</Text>
	</TouchableOpacity>
	<Text style = {styles.logo}>How do I weight my Baby at Home?</Text>
	<Text style = {styles.extraInfo}>In the first years of your child's life, weight is one of the most important indicators of health.
	An infants weight can give a lot of information about their growth, hydration, and more!</Text>
	
	<Text style = {styles.extraInfo}>Althought your pediatrician will weigh your child at each appoinment, MIHA encourages you to
	weigh them at home. This will allow us and your doctor to better understand your child and what is abnormal for them.</Text>
	
	<Text style = {styles.extraInfo}>Even though most parents dont have a special scale to weigh their child at home, there are plenty 
	of ways to get a weight using a bathroom scale!</Text>
	
	<Text style = {styles.extraInfo}>To weigh your baby on a bathroom scale you should first weigh yourself. Once you have your weight,
	you can weigh yourself holding your baby. Subtract your weight from the weight of you and the baby and you will have the baby's weight! 
	Make sure to input this new weight into the MIHA app for tracking!
	</Text>
	
	
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
		marginLeft: 6,
		marginRight: 6
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

export default WeightModule;