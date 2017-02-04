import React, { Component } from 'react';

import EmployerForm from './EmployerForm';
import FreelancerForm from './FreelancerForm';
import SelectAccountType from './SelectAccountType';
import { SignUpViews } from '../../../utils/views';

export default class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			view: SignUpViews.SELECT_ACCOUNT_TYPE
		};
	}

	render() {
		switch(this.state.view) {
			case SignUpViews.SELECT_ACCOUNT_TYPE:
				return <SelectAccountType changeView={view => this.setState({ view })} />;
			case SignUpViews.FREELANCER_FORM:
				return <FreelancerForm changeView={view => this.setState({ view })} />;
			case SignUpViews.EMPLOYER_FORM:
				return <EmployerForm changeView={view => this.setState({ view })} />;
			default:
				return <div>{'UNRECOGNIZED SIGNUP VIEW!'}</div>;
		}
	}
}
