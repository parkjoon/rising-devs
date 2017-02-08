import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmployerHome from './Employer/EmployerHome';
import FreelancerHome from './Freelancer/FreelancerHome';

class UserHome extends Component {
	render() {
		console.log(this.props);
		return <div></div>;
	}
}

function mapStateToProps(state) {
	return {
		profile: state.profile
	};
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		setJobPosts: jobPosts => dispatch(setJobPosts(jobPosts))
// 	};
// }

export default connect(
	mapStateToProps,
	null
)(UserHome);
