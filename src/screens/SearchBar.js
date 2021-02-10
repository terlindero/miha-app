import React from 'react';
import { View, TextInput, Stylesheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
	return (
	<View style={styles.background}>
	<Feather name="search" size={30}/>
	<TextInput
		placeholder = Articles, Videos, and More />
	</View>
	);	
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row'
	},
	inputStyle: {
		flex: 1
	}
});