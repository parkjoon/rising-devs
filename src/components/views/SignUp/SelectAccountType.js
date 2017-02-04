import React, { Component } from 'react';

import { SignUpViews } from '../../../utils/views';

export default class SelectAccountType extends Component {
	render() {
		return (
			<div>
				<div style={{height: '100px'}}></div>
				<div className="container">
					<div className="panel panel-default text-center">
						<div className="panel-heading">Who are you?</div>
						<div className="panel-body">
							<button type="button" className="btn btn-primary" onClick={() => this.props.changeView(SignUpViews.EMPLOYER_FORM)}>Employer</button>|
							<button type="button" className="btn btn-primary" onClick={() => this.props.changeView(SignUpViews.FREELANCER_FORM)}>Freelancer</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
