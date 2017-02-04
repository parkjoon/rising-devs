import React, { Component } from 'react';

import SelectAccountType from './SelectAccountType';
import { SignUpViews } from '../../../utils/views';

export default class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			view: SignUpViews.SELECT_ACCOUNT_TYPE
		};
	}

	signup() {
		this.props.auth.signup(this.state.email, this.state.username, this.state.password);
	}

	handleChangeView(view) {
		this.setState({ view });
	}

	render() {
		switch(this.state.view) {
			case SignUpViews.SELECT_ACCOUNT_TYPE:
				return <SelectAccountType changeView={view => this.handleChangeView(view)} />;
			default:
				return <div>{'UNRECOGNIZED SIGNUP VIEW!'}</div>;
		}
	}
}
