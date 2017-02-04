import React, { Component } from 'react';

import { SignUpViews } from '../../../utils/views';

export default class EmployerForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				username: '',
				email: '',
				password: ''
			}
		};
	}

	updateFormValue(key, val) {
		this.setState({
			form: {
				...this.state.form,
				[key]: val
			}
		});
	}

	signUp(e) {
		e.preventDefault();
		this.props.auth.signup(this.state.username, this.state.email, this.state.password);
	}

	render() {
		return (
			<div>
				<div style={{height: '100px'}}></div>
				<div className="container">
					<div className="panel panel-default text-center">
						<div className="panel-heading">Employer Form</div>
						<div className="panel-body">
							<div className="row">
								<button type="button" className="btn btn-primary" onClick={() => this.props.changeView(SignUpViews.SELECT_ACCOUNT_TYPE)}>Back</button>
							</div>

							<div className="row">
								<div className="col-md-3" style={{marginLeft: '38%'}}>
									<form>
										<div className="form-group">
											<label htmlFor="username">Username:</label>
											<input type="username" className="form-control" id="username" value={this.state.username} onChange={e => this.updateFormValue('username', e.target.value) } />
										</div>
										<div className="form-group">
											<label htmlFor="email">Email:</label>
											<input type="email" className="form-control" id="email" value={this.state.email} onChange={e => this.updateFormValue('email', e.target.value) } />
										</div>
										<div className="form-group">
											<label htmlFor="pwd">Password:</label>
											<input type="password" className="form-control" id="pwd" value={this.state.password} onChange={e => this.updateFormValue('password', e.target.value) } />
										</div>
										<button className="btn btn-default" onClick={e => this.signUp(e)}>Submit</button>
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
