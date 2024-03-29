import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';

import { isTokenExpired } from './jwtHelper';
import { setPartialProfile } from '../actions/profile';
import { store } from '../index';

export default class AuthService {
	constructor(clientId, domain) {
		// Configure Auth0
		this.lock = new Auth0Lock(clientId, domain, {
			auth: {
				redirectUrl: 'http://localhost:3000/',
				responseType: 'token'
			}
		});
		// Add callback for lock `authenticated` event
		this.lock.on('authenticated', this._doAuthentication.bind(this));
		this.login = this.login.bind(this);
		this.signup = this.signup.bind(this);
	}

	_doAuthentication(authResult) {
		// Saves the user token
		this.setToken(authResult.idToken);
		// navigate to the home route
		browserHistory.replace('/home');
		// Async loads the user profile data
		this.lock.getProfile(authResult.idToken, (error, profile) => {
			if(error) {
				console.log('Error loading the Profile', error);
			}
			else {
				this.setProfile(profile);
				store.dispatch(setPartialProfile(profile));
			}
		});
	}

	login() {
		// Call the show method to display the widget.
		this.lock.show();
	}

	signup(username, email, password) {
		this.auth0.redirect.signupAndLogin({
			connection: 'Username-Password-Authentication',
			username,
			email,
			password,
		}, err => {
			if(err) {
				alert('Error:', err.description);
			}
		});
	}


	loggedIn() {
		// Checks if there is a saved token and it's still valid
		const token = this.getToken();
		return !!token && !isTokenExpired(token);
	}

	setToken(idToken) {
		// Saves user token to local storage
		localStorage.setItem('id_token', idToken);
	}

	getToken() {
		// Retrieves the user token from local storage
		return localStorage.getItem('id_token');
	}

	logout() {
		// Clear user token and profile data from local storage
		localStorage.removeItem('id_token');
		localStorage.removeItem('profile');
	}

	setProfile(profile) {
		// Saves profile data to local storage
		localStorage.setItem('profile', JSON.stringify(profile));
		// Triggers profile_updated event to update the UI
		// this.emit('profile_updated', profile); // ?
	}

	getProfile() {
		// Retrieves the profile data from local storage
		const profile = localStorage.getItem('profile');
		return profile ? JSON.parse(localStorage.profile) : {};
	}
}
