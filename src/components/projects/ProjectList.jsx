import React from 'react';

import ProjectSummary from './ProjectSummary';

const ProjectList = (props) => {
	const projects = props.projects
	return (
		<div>
			{projects && projects.map((project) => {
				return (
					<ProjectSummary project={project} key={project.id} />
				)
			})}
		</div>
	)
}

export default ProjectList;

