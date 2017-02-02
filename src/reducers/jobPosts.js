import actions from '../utils/actions';

export default function jobPosts(state = [], action) {
	switch(action.type) {
		case actions.SET_JOB_POSTS:
			return action.jobPosts;
		default:
			return state;
	}
}
