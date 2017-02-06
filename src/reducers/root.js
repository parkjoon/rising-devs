import { combineReducers } from 'redux';

import freelancerProfiles from './freelancerProfiles';
import jobPosts from './jobPosts';
import profile from './profile';

export default combineReducers({
	// socket,
	freelancerProfiles,
	jobPosts,
	profile
});
