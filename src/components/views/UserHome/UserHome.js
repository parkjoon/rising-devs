import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmployerHome from './Employer/EmployerHome';
import FreelancerHome from './Freelancer/FreelancerHome';

class UserHome extends Component {
	render() {
		if(!this.props.profile.user_metadata) {
			return <div>NO PROFILE</div>;
		}

		if(this.props.profile.user_metadata.type == 'freelancer') {
			return <FreelancerHome />;
		}
		return <EmployerHome />;
	}
}

function mapStateToProps(state) {
	return {
		profile: state.profile
	};
}

export default connect(
	mapStateToProps,
	null
)(UserHome);
