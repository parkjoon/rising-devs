import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentJobs from './CurrentJobs';
import NewJobs from './NewJobs';
import SavedJobs from './SavedJobs';
import Tasks from './Tasks';

class FreelancerHome extends Component {
	render() {
		return (
			<div className="container" style={{marginTop: '10em'}}>
				<div className="row">
					<div className="col-md-12 center">
						<h2>Welcome, <strong>{this.props.profile.user_metadata.firstName}</strong></h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<Tasks />
					</div>
					<div className="col-md-4">
						<NewJobs />
					</div>
					<div className="col-md-4">
						<SavedJobs />
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<CurrentJobs />
					</div>
				</div>
			</div>
		);
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
)(FreelancerHome);
