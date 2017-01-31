import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.js';
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

const store = createStore(RootReducer);

ReactDOM.render(
<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			{/*<IndexRoute component={FormList} />
			<Route path="/preview_report_form/report_form_id/:report_form_id" component={FormPreview} />*/}
		</Route>
	</Router>
</Provider>,
document.getElementById('react-root'));
