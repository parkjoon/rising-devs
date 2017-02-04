import { combineReducers } from 'redux';

import jobPosts from './jobPosts';
import profile from './profile';

export default combineReducers({
	// socket,
	jobPosts,
	profile
});
