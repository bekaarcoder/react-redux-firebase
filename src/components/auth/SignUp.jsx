import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {registerUser} from '../../store/actions/authActions';
import Input from '../common/Input';

class SignUp extends Component {
	constructor() {
		super();
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			fname: '',
			lname: '',
			email: '',
			password: '',
			repeatPassword: ''
		};
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.registerUser(this.state);
	}

	render() {
		const {auth, authError} = this.props;

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
							<h4 className="card-title text-center mb-4">Sign Up</h4>
							<form onSubmit={this.onFormSubmit}>
								<Input
									type="text"
									name="fname"
									placeholder="Enter your first name"
									label="First Name"
									onChange={this.onChange}
									value={this.state.fname}
									autoComplete="nope"
									error={authError ? authError.fname : null}
								/>
								<Input
									type="text"
									name="lname"
									placeholder="Enter your last name"
									label="Last Name"
									onChange={this.onChange}
									value={this.state.lname}
									autoComplete="nope"
									error={authError ? authError.lname : null}
								/>
								<Input
									type="text"
									name="email"
									placeholder="Enter Email Address"
									label="Email Address"
									onChange={this.onChange}
									value={this.state.email}
									autoComplete="nope"
									error={authError ? authError.email : null}
								/>
								<Input
									type="password"
									name="password"
									placeholder="Enter your password"
									label="Password"
									onChange={this.onChange}
									value={this.state.password}
									error={authError ? authError.password : null}
								/>
								<Input
									type="password"
									name="repeatPassword"
									placeholder="Enter your password again"
									label="Repeat Password"
									onChange={this.onChange}
									value={this.state.repeatPassword}
									error={authError ? authError.repeatPassword : null}
								/>
								<div className="text-center">
									<button className="btn btn-primary" type="submit">Submit</button>
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
		auth: state.firebase.auth,
		authError: state.auth.authError
	}
}

export default connect(mapStateToProps, {registerUser})(SignUp);
