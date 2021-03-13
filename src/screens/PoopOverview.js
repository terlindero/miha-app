import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as DiaperContext } from '../context/DiaperContext';

const PoopOverview = ({ navigation}) => {
	const { state, fetchDiaper } = useContext(DiaperContext);
	
	console.log(state);
	
return (
	<>
		<NavigationEvents onWillFocus = {fetchDiaper} />
		<View style = {styles.container}>
		<Text style = {styles.logo}>Previous Diaper Data</Text>
		</View>
		<FlatList 
			style = {{ flex: 1, backgroundColor: 'white'}}
			data = {state}
			keyExtractor = {item => item._id}
			renderItem = {({ item }) => {
				return (
					<>
					<ListItem bottomDivider>
					<ListItem.Content>
					<ListItem.Title>
						<Text style = {styles.dateText}> {item.date} </Text>
					</ListItem.Title>
					</ListItem.Content>
					</ListItem>
						
					<ListItem bottomDivider>
					<ListItem.Content>
					<ListItem.Title>
					<Text>     </Text>
					<Text style = {styles.detailsText}> Urination: </Text>
						<Text style = {styles.detailsText}>{item.pee}</Text>
					</ListItem.Title>
					</ListItem.Content>
					</ListItem>
					
					<ListItem bottomDivider>
					<ListItem.Content>
					<ListItem.Title>
					<Text>     </Text>
					<Text style = {styles.detailsText}> Stool: </Text>
						<Text style = {styles.detailsText}>{item.poop}</Text>
					</ListItem.Title>
					</ListItem.Content>
					</ListItem>
					
					<ListItem bottomDivider>
					<ListItem.Content>
					<ListItem.Title>
					<Text>     </Text>
					<Text style = {styles.detailsText}> Concerns: </Text>
						<Text style = {styles.detailsText}>{item.concerns}</Text>
					</ListItem.Title>
					</ListItem.Content>
					</ListItem>
				
					</>
					);
			}}
			/>
			</>
			
);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff'
	},
	rowContainer: {
		flexDirection: 'row',
		position: 'absolute',
		top: 60,
		justifyContent: 'center'
	},
	logo: {
		fontSize: 25,
		color: '#335e90',
		marginBottom: 40,
		fontWeight: 'bold',
		marginTop: 100
	},
	overviewContainer: {
		flexDirection: 'column',
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#fff',
		backgroundColor: 'white'
	},
	dateText: {
		color: '#335e90',
		fontWeight: 'bold'
	},
	detailsText: {
		color: '#335e90',
		fontWeight: "500"
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
	newTest: {
		marginTop: 40,
		borderWidth:3,
		borderColor: "#rgb(45,189,212)",
		alignItems:'center',
		justifyContent:'center',
		width:200,
		height: 200,
		backgroundColor: '#rgb(45,189,212)',
		borderRadius: 100
	},
	updateWeight: {
		width: '100%',
		backgroundColor: '#fd753e',
		borderRadius: 10,
		height:85,
		width: 350,
		alignItems: "center",
		//justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		flexDirection: "row"
	},
	updateSleep: {
		width: '100%',
		backgroundColor: '#fdb33e',
		borderRadius: 10,
		height:85,
		width: 350,
		alignItems: "center",
		//justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		marginTop: 20,
		flexDirection: "row"
	},
	updateFeeding: {
		width: '100%',
		backgroundColor: '#a085ff',
		borderRadius: 10,
		height:85,
		width: 350,
		alignItems: "center",
		//justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		marginTop: 20,
		flexDirection: "row"
	},
	updateGrowth: {
		width: '100%',
		backgroundColor: '#1cdf62',
		borderRadius: 10,
		height:85,
		width: 350,
		alignItems: "center",
		//justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		marginTop: 20,
		flexDirection: "row"
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 25
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
		justifyContent: "center",
		marginTop:20,
		marginBottom:20,
		marginRight: 50,
		marginLeft: 50
	}
		
});

export default PoopOverview;