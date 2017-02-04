import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from './common/Footer';
import Header from './common/Header';
import { setPartialProfile } from '../actions/profile';

class App extends Component {
	componentDidMount() {
		this.props.setPartialProfile(this.props.route.auth.getProfile());
	}

	render() {
		return (
			<div className="body">
				<Header auth={this.props.route.auth} />
				<div className="main" role="main">
					{React.cloneElement(this.props.children, { ...this.propsToPass, auth: this.props.route.auth })}
				</div>
				<Footer />
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setPartialProfile: profile => dispatch(setPartialProfile(profile))
	};
}

export default connect(
	null,
	mapDispatchToProps
)(App);
