import React from 'react';
import formatDate from '../helpers/formatDate';

const ProjectSummary = (props) => {
	return (
		<div className="card mb-4">
			<div className="card-body">
				<h5 className="card-title">{props.project.title}</h5>
				<h6 className="card-subtitle text-muted mb-2">Posted By {props.project.authorFirstName}</h6>
				<p className="card-text">{props.project.content}</p>
				<p className="text-muted">{formatDate(props.project.createdAt)}</p>
			</div>
		</div>
	)
}

export default ProjectSummary;

