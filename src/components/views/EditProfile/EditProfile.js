import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateProfile } from '../../../utils/api';

class EditProfile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			profile: {
				username: ''
			}
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			profile: nextProps.profile
		});
	}

	updateProfileValue(key, val) {
		this.setState({
			profile: {
				...this.state.profile,
				[key]: val
			}
		});
	}

	onEditProfileSaveClick(e) {
		e.preventDefault();
		updateProfile(this.state.profile);
	}

	onEditProfileCancelClick(e) {
		e.preventDefault();
		this.setState({
			profile: this.props.profile
		});
	}

	render() {
		return (
			<div>
				<div style={{height: '100px'}}></div>
				<div className="container">
					<div className="panel panel-default text-center">
						<div className="panel-heading">Edit Profile</div>
						<div className="panel-body">
							<div className="row">
								<div className="col-md-3" style={{marginLeft: '38%'}}>
									<form>
										<div className="form-group">
											<label htmlFor="username">Username</label>
											<input type="text" className="form-control" id="username" value={this.state.profile.username} onChange={e => this.updateProfileValue('username', e.target.value)} />
										</div>
										<button className="btn btn-default" onClick={e => this.onEditProfileSaveClick(e)}>Save</button>
										<button className="btn btn-default" onClick={e => this.onEditProfileCancelClick(e)}>Cancel</button>
									</form>
								</div>
							</div>
						</div>
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

// function mapDispatchToProps(dispatch) {
// 	return {
// 		setPartialProfile: profile => dispatch(setPartialProfile(profile))
// 	};
// }

export default connect(
	mapStateToProps,
	null
)(EditProfile);
