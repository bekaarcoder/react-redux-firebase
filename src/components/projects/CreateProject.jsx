import React, {Component} from 'react';
import Input from '../common/Input';

class CreateProject extends Component {
	constructor() {
		super();
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {
			title: '',
			content: ''
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
							<h4 className="card-title text-center mb-4">Create a New Project</h4>
							<form onSubmit={this.onFormSubmit}>
								<Input
									type="text"
									name="title"
									placeholder="Enter title"
									label="Project Title"
									onChange={this.onChange}
									value={this.state.title}
									autoComplete="nope"
								/>
								<Input
									type="text"
									name="content"
									placeholder="Enter project content"
									label="Project Content"
									onChange={this.onChange}
									value={this.state.content}
								/>
								<div className="text-center">
									<button className="btn btn-primary" type="submit">Create Project</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CreateProject;
