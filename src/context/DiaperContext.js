import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import mihaapi from '../api/mihaapi';
import { navigate } from '../navigationRef';


const diaperReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_diaper':
			return action.payload;
		default:
			return state;
	}
};

const fetchDiaper = dispatch => async() => {
	const response = await mihaapi.get('/diapers');
	dispatch({ type: 'fetch_diaper', payload: response.data });
};

const createDiaper = dispatch => async({pee, poop, concerns, date}) => {
	await mihaapi.post('/diapers', { pee, poop, concerns, date });
	navigate('HomeScreen');
};


export const { Context, Provider } = createDataContext(
	diaperReducer,
	{ fetchDiaper, createDiaper },
	[]
);