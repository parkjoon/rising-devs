import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmployerHome extends Component {
	render() {
		return (
			<div className="container" style={{marginTop: '10em'}}>
				<div className="row">
					<div className="col-md-12 center">
						<h2>Welcome, <strong>{this.props.profile.user_metadata.firstName}</strong></h2>
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
)(EmployerHome);
