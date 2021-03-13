import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import mihaapi from '../api/mihaapi';
import { navigate } from '../navigationRef';


const nameReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_name':
			return action.payload;
		default:
			return state;
	}
};

const fetchName = dispatch => async() => {
	const response = await mihaapi.get('/names');
	dispatch({ type: 'fetch_name', payload: response.data });
};

const createName = dispatch => async({childname, sex}) => {
	await mihaapi.post('/names', { childname, sex });
	navigate('Age');
};


export const { Context, Provider } = createDataContext(
	nameReducer,
	{ fetchName, createName },
	[]
);