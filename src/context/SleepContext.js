import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import mihaapi from '../api/mihaapi';
import { navigate } from '../navigationRef';


const sleepReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_sleep':
			return action.payload;
		default:
			return state;
	}
};

const fetchSleep = dispatch => async() => {
	const response = await mihaapi.get('/sleeps');
	dispatch({ type: 'fetch_sleep', payload: response.data });
};

const createSleep = dispatch => async({night, hours, naps, date}) => {
	await mihaapi.post('/sleeps', { night, hours, naps, date });
	navigate('HomeScreen');
};


export const { Context, Provider } = createDataContext(
	sleepReducer,
	{ fetchSleep, createSleep },
	[]
);