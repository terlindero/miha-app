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

const tryLocalSignin = dispatch => async() => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'signin', payload: token });
		navigate('Home');
	} else {
		navigate('LogIn');
	}
	
};

const signup = dispatch => async({ email, password }) => {
		try {
			const response = await mihaapi.post('/signup', {email, password});
			await AsyncStorage.setItem('token', response.data.token);
			dispatch({ type: 'signup', payload: response.data.token });
			
		navigate('Name');
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
	{ signin, signout, signup, tryLocalSignin },
	{ token: null, errorMessage: ''}
);