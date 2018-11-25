import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import formatDate from '../helpers/formatDate';

const ProjectDetails = (props) => {
  const {project} = props;
  return (
    <div className="row">
        {project ? (
          <div className="col-md-12 mt-5">
        		<h3 className="mb-4">{project.title}</h3>
        		<p className="lead mb-4">{project.content}</p>
    				<hr />
    				<div className="text-muted">Posted By {`${project.authorFirstName} ${project.authorLastName}`}</div>
    				<div className="text-muted">{formatDate(project.createdAt)}</div>
          </div>
          ) : (
            <div className="col-md-12 mt-5">
              <p>Loading Project...</p>
            </div>
          )
        }
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const projectId = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[projectId] : null
  return {
    project: project
  };
}

export default compose(
  connect(mapStateToProps, {}),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails);