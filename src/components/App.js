import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';

export default class App extends Component {
	render() {
		return (
			<div className="body">
				<Header auth={this.props.route.auth} />
				<div className="main" role="main">
					{React.cloneElement(this.props.children, this.propsToPass)}
				</div>
				<Footer />
			</div>
		);
	}
}
