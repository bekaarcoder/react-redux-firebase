import React, {Component} from 'react';
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
		console.log(this.state);
	}

	render() {
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
								/>
								<Input
									type="text"
									name="lname"
									placeholder="Enter your last name"
									label="Last Name"
									onChange={this.onChange}
									value={this.state.lname}
									autoComplete="nope"
								/>
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
									placeholder="Enter your password"
									label="Password"
									onChange={this.onChange}
									value={this.state.password}
								/>
								<Input
									type="password"
									name="repeatPassword"
									placeholder="Enter your password again"
									label="Repeat Password"
									onChange={this.onChange}
									value={this.state.repeatPassword}
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

export default SignUp;
