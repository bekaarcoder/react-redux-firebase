import React from 'react';

const ProjectList = (props) => {
	return (
		<div>
		<div className="card mb-4">
			<div className="card-body">
				<h5 className="card-title">{props.project.title}</h5>
				<h6 className="card-subtitle text-muted mb-2">Posted By Shashank</h6>
				<p className="card-text">{props.project.content}</p>
				<p className="text-muted">13th November, 2018</p>
			</div>
		</div>
		</div>
	)
}

export default ProjectList;

