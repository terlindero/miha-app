import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import mihaapi from '../api/mihaapi';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signup':
			return { errorMessage: '', token: action.payload };
		case 'signin':
			return{ errorMessage: '', token: action.payload };
		case 'signout':
			return{ token: null }
		default:
			return state;
	}
};


const signup = dispatch => async({ email, password }) => {
		try {
			const response = await mihaapi.post('/signup', {email, password});
			await AsyncStorage.setItem('token', response.data.token);
			dispatch({ type: 'signup', payload: response.data.token });
			
		navigate('Home');
		} catch (err) {
			dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
		}
	};


const signin = dispatch => async({ email, password }) => {
		try {
			const response = await mihaapi.post('/signin', {email, password});
			await AsyncStorage.setItem('token', response.data.token);
			dispatch({ type: 'signin', payload: response.data.token });
			navigate('Home');
			
		} catch (err) {
			dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
		}
	};
	

const signout = (dispatch) => async() => {
	await AsyncStorage.removeItem('token');
	dispatch({ type: 'signout' });
	navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup },
	{ token: null, errorMessage: ''}
);