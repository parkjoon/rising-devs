import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFreelancerProfiles } from '../../../utils/api';
import { setFreelancerProfiles } from '../../../actions/freelancerProfiles';

class Freelancers extends Component {
	renderFreelancerPreviews() {

	}

	render() {
		return (
			<div>
				<div style={{height: '100px'}}></div>
				<div className="container">
					<div className="panel panel-default">
						<div className="panel-heading">Freelancers</div>
						<div className="panel-body">
							<ul className="list-group">
								{this.renderFreelancerPreviews()}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		freelancerProfiles: state.freelancerProfiles
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setFreelancerProfiles: freelancerProfiles => dispatch(setFreelancerProfiles(freelancerProfiles))
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Freelancers);
