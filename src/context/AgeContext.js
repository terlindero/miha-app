import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import mihaapi from '../api/mihaapi';
import { navigate } from '../navigationRef';


const ageReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_age':
			return action.payload;
		default:
			return state;
	}
};

const fetchAge = dispatch => async() => {
	const response = await mihaapi.get('/ages');
	dispatch({ type: 'fetch_age', payload: response.data });
};

const createAge = dispatch => async({birthday}) => {
	await mihaapi.post('/ages', { birthday });
	navigate('Weight');
};


export const { Context, Provider } = createDataContext(
	ageReducer,
	{ fetchAge, createAge },
	[]
);