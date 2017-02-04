import actions from '../utils/actions';

export default function profile(state = {}, action) {
	// console.log('In the profile reducer with action:', action);
	switch(action.type) {
		case actions.SET_PROFILE:
			return action.profile;
		case actions.SET_PARTIAL_PROFILE:
			return {
				...state,
				...action.profile
			};
		default:
			return state;
	}
}
