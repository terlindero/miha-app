import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import mihaapi from '../api/mihaapi';
import { navigate } from '../navigationRef';


const foodReducer = (state, action) => {
	switch (action.type) {
		case 'fetch_foods':
			return action.payload;
		default:
			return state;
	}
};

const fetchFood = dispatch => async() => {
	const response = await mihaapi.get('/foods');
	dispatch({ type: 'fetch_foods', payload: response.data });
};

const createFood = dispatch => async({solids, liquids, date}) => {
	await mihaapi.post('/foods', { solids, liquids, date });
	navigate('HomeScreen');
};


export const { Context, Provider } = createDataContext(
	foodReducer,
	{ fetchFood, createFood },
	[]
);