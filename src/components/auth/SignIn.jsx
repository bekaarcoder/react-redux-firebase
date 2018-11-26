import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {loginUser} from '../../store/actions/authActions';
import Input from '../common/Input';

class SignIn extends Component {
	constructor() {
		super();
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			email: '',
			password: ''
		};
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.loginUser(this.state);
	}

	render() {
		const {authError, auth} = this.props;

		if(auth.uid) {
			return (
				<Redirect to='/' />
			)
		}
		return (
			<div className="row justify-content-center mt-5">
				<div className="col-md-6">
					<div className="card">
						<div className="card-body">
							<h4 className="card-title text-center mb-4">Sign In</h4>
							<form onSubmit={this.onFormSubmit}>
								<Input
									type="text"
									name="email"
									placeholder="Enter Email Address"
									label="Email Address"
									onChange={this.onChange}
									value={this.state.email}
									autoComplete="nope"
								/>
								<Input
									type="password"
									name="password"
									placeholder="Enter Password"
									label="Password"
									onChange={this.onChange}
									value={this.state.password}
								/>
								<div className="text-center">
									<button className="btn btn-primary" type="submit">Submit</button>
								</div>
								<div className="text-center">
									{authError ? <p className="lead mt-3">{authError}</p> : null}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps, {loginUser})(SignIn);
