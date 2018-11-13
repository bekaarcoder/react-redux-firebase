import React from 'react';

const ProjectDetails = (props) => {
	console.log(props);
  return (
    <div className="row">
    	<div className="col-md-12 mt-5">
    		<h3 className="mb-4">Project Title {props.match.params.id}</h3>
    		<p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, pariatur placeat non aperiam, quos impedit minima. Alias dolore neque earum repudiandae nostrum, excepturi, odio ut deleniti enim quos, hic optio?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, ratione. Porro quae consequuntur sed nulla sapiente eveniet officia, officiis optio ipsum dolores totam itaque, repellendus, voluptatum, nemo! Nam, incidunt, eos!</p>
				<hr />
				<div className="text-muted">Posted By Shashank</div>
				<div className="text-muted">13th November, 2018</div>
    	</div>
    </div>
  )
}

export default ProjectDetails;