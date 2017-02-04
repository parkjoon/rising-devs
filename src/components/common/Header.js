import React, { Component } from 'react';
import { Link } from 'react-router';

import AuthService from '../../utils/AuthService';

export default class Header extends Component {
	renderSignUpButton() {
		if(!this.props.auth.loggedIn()) {
			return (
				<li>
					<Link to='/signup'>Sign Up</Link>
				</li>
			);
		}
	}

	renderAuthButton() {
		if(this.props.auth.loggedIn()) {
			return (
				<li>
					<Link to='/' onClick={() => this.props.auth.logout()}>Logout</Link>
				</li>
			);
		}

		return (
			<li>
				<a href="javascript:;" onClick={() => this.props.auth.login()}>Login</a>
			</li>
		);
	}

	render() {
		return (
			<header id="header" className="header-narrow header-semi-transparent header-transparent-sticky-deactive header-transparent-bottom-border" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 1, "stickySetTop": "1"}'>
				<div className="header-body">
					<div className="header-container container">
						<div className="header-row">
							<div className="header-column">
								<div className="header-logo">
									<Link to='/'><img alt="Porto" width="82" height="40" src="../../styles/img/logo-default-slim-dark.png" /></Link>
								</div>
							</div>
							<div className="header-column">
								<div className="header-row">
									<div className="header-nav header-nav-dark-dropdown">
										<div className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1 collapse">
											<nav>
												<ul className="nav nav-pills" id="mainNav2">
													<li>
														<Link to='/howitworks'>How It Works</Link>
													</li>
													<li>
														<Link to='/faq'>FAQ</Link>
													</li>
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
							<div className="header-column">
								<div className="header-row">
									<div className="header-nav header-nav-dark-dropdown">
										<button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
											<i className="fa fa-bars"></i>
										</button>
										<div className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1 collapse">
											<nav>
												<ul className="nav nav-pills" id="mainNav">
													<li>
														<Link to='/'>Home</Link>
													</li>
													{this.renderSignUpButton()}
													{this.renderAuthButton()}
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}