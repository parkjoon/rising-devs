import actions from '../utils/actions';

export function setFreelancerProfiles(freelancerProfiles) {
	return {
		type: actions.SET_FREELANCER_PROFILES,
		freelancerProfiles
	};
}
