import React, { Component } from 'react';

export default class EmployerForm extends Component {
	render() {
		return (
			<div>
				<div style={{height: '100px'}}></div>
				<div className="container">
					<div className="panel panel-default text-center">
						<div className="panel-heading">What would you like to do?</div>
						<div className="panel-body">
							<button type="button" className="btn btn-primary">Employer</button>|
							<button type="button" className="btn btn-primary">Freelancer</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
