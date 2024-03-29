import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import '../styles/vendor/bootstrap/css/bootstrap.min.css';
import '../styles/vendor/font-awesome/css/font-awesome.min.css';
import '../styles/vendor/animate/animate.min.css';
import '../styles/vendor/simple-line-icons/css/simple-line-icons.min.css';
import '../styles/vendor/owl.carousel/assets/owl.carousel.min.css';
import '../styles/vendor/owl.carousel/assets/owl.theme.default.min.css';
import '../styles/vendor/magnific-popup/magnific-popup.min.css';
import '../styles/css/theme.css';
import '../styles/css/theme-elements.css';
import '../styles/css/theme-blog.css';
import '../styles/css/theme-shop.css';
import '../styles/vendor/rs-plugin/css/settings.css';
import '../styles/vendor/rs-plugin/css/layers.css';
import '../styles/vendor/rs-plugin/css/navigation.css';
import '../styles/css/skins/default.css';
import '../styles/css/skins/skin-corporate-7.css';
import '../styles/css/custom.css';

import App from './components/App';
import AuthService from './utils/AuthService';
import EditProfile from './components/views/EditProfile/EditProfile';
import FAQ from './components/views/FAQ/FAQ';
import Freelancers from './components/views/Freelancers/Freelancers';
import Home from './components/views/Home/Home';
import HowItWorks from './components/views/HowItWorks/HowItWorks';
import Jobs from './components/views/Jobs/Jobs';
import NotFound from './components/views/NotFound/NotFound';
import Profile from './components/views/Profile/Profile';
import RootReducer from './reducers/root';
import SignUp from './components/views/SignUp/SignUp';
import UserHome from './components/views/UserHome/UserHome';

const auth = new AuthService('cv7kliXmF2S1m36YSmpq0RdzH4JHZMWg', 'risingdevs.auth0.com'); // Move this to env file.

// Validate authentication for private routes.
const requireAuth = (nextState, replace) => {
	if(!auth.loggedIn()) {
		replace({ pathname: '/' });
	}
};

export const store = createStore(RootReducer);

ReactDOM.render(
(<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App} auth={auth}>
			<IndexRoute component={Home} />

			<Route path="/faq" component={FAQ} />

			<Route path="/freelancers" component={Freelancers} />

			<Route path="/home" component={UserHome} onEnter={requireAuth} />

			<Route path="/howitworks" component={HowItWorks} />

			<Route path="/jobs" component={Jobs} />

			<Route path="/profile/:username" component={Profile} />
			<Route path="/profile/edit/:username" component={EditProfile} onEnter={requireAuth} />

			<Route path="/signup" component={SignUp} />

			<Route path="*" component={NotFound} />
		</Route>
	</Router>
</Provider>),
document.getElementById('root'));
