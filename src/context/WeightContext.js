import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import mihaapi from '../api/mihaapi';
import { navigate } from '../navigationRef';


const weightReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_weight':
			return action.payload;
		default:
			return state;
	}
};

const fetchWeight = dispatch => async() => {
	const response = await mihaapi.get('/weights');
	dispatch({ type: 'fetch_weight', payload: response.data });
};

const createWeight = dispatch => async({newweight, date}) => {
	await mihaapi.post('/weights', { newweight, date });
	navigate('HomeScreen');
};


export const { Context, Provider } = createDataContext(
	weightReducer,
	{ fetchWeight, createWeight },
	[]
);

