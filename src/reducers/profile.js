import actions from '../utils/actions';

export default function profile(state = [], action) {
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
