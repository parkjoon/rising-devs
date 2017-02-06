import actions from '../utils/actions';

export default function freelancerProfiles(state = [], action) {
	switch(action.type) {
		case actions.SET_FREELANCER_PROFILES:
			return action.freelancerProfiles;
		default:
			return state;
	}
}
