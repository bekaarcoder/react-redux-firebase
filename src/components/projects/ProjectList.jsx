import React from 'react';
import {Link} from 'react-router-dom';

import ProjectSummary from './ProjectSummary';

const ProjectList = (props) => {
	const projects = props.projects
	return (
		<div>
			{projects && projects.map((project) => {
				return (
					<Link to={`/project/details/${project.id}`} style={{textDecoration: 'none', color: '#343a40'}} key={project.id}>
						<ProjectSummary project={project} />
					</Link>
				)
			})}
		</div>
	)
}

export default ProjectList;

