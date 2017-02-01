import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import AuthService from './utils/AuthService';
import Home from './components/views/Home';
import Login from './components/views/Login';
import RootReducer from './reducers/root';

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
import '../styles/css/skins/skin-corporate-7.css';
import '../styles/css/custom.css';

const auth = new AuthService('cv7kliXmF2S1m36YSmpq0RdzH4JHZMWg', 'risingdevs.auth0.com'); // Move this to env file.

// Validate authentication for private routes.
const requireAuth = (nextState, replace) => {
  if(!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
}

const store = createStore(RootReducer);

ReactDOM.render(
<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App} auth={auth}>
			<IndexRoute component={Home} />
			<Route path="/login" component={Login} />
			{/* <Route path="preview_report_form/report_form_id/:report_form_id" component={FormPreview} onEnter={requireAuth} /> */}
		</Route>
	</Router>
</Provider>,
document.getElementById('react-root'));
