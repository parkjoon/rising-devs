import actions from '../utils/actions';

export function setProfile(profile) {
	return {
		type: actions.SET_PROFILE,
		profile
	};
}

export function setPartialProfile(profile) {
	return {
		type: actions.SET_PARTIAL_PROFILE,
		profile
	};
}
