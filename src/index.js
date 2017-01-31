import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.js';
import RootReducer from './reducers/root';

require('../styles/application.scss');

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
