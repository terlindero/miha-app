import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import mihaapi from '../api/mihaapi';
import { navigate } from '../navigationRef';

const bottleReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_bottle':
			return action.payload;
		default:
			return state;
	}
};

const fetchBottle = dispatch => async() => {
	const response = await mihaapi.get('/bottles');
	dispatch({ type: 'fetch_bottle', payload: response.data });
};

const createBottle = dispatch => async({quantity, time, date}) => {
	await mihaapi.post('/bottles', { quantity, time, date });
	navigate('HomeScreen');
};


export const { Context, Provider } = createDataContext(
	bottleReducer,
	{ fetchBottle, createBottle },
	[]
);

