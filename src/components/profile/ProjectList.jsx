import React, {Component} from 'react';

class ProjectList extends Component {
	render() {
		const {projects} = this.props;
		return (
			<div className="card">
				<div className="card-body">
					<ul className="list-group list-group-flush">
						{projects && projects.map(project => (
							<li className="list-group-item d-flex justify-content-between align-items-center" key={project.id}>
								{project.title}
								<span>
									<button className="btn btn-sm btn-primary mr-2">Edit</button>
									<button className="btn btn-sm btn-danger">Delete</button>
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default ProjectList;
