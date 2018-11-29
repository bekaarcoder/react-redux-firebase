import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Redirect} from 'react-router-dom';

import ProjectList from './ProjectList';
import {uploadSelectedFile} from '../../store/actions/profileActions';

class Profile extends Component {
	constructor() {
		super();
		this.onChange = this.onChange.bind(this);
		this.uploadFile = this.uploadFile.bind(this);
		this.state = {
			selectedFile: null,
			fileValue: ''
		}
	}

	onChange(e) {
		this.setState({
			selectedFile: e.target.files[0],
			fileValue: e.target.value
		});
	}

	uploadFile(e) {
		e.preventDefault();
		this.props.uploadSelectedFile(this.state.selectedFile);
		this.setState({
			selectedFile: null,
			fileValue: ''
		});
	}

	render() {
		const {user, auth, projects, loading, uploadTask} = this.props;
		if(!auth.uid) {
			return (
				<Redirect to="/signin" />
			)
		}
		return (
			<div className="row">
				{user ? (
					<div className="col-md-12 mt-5">
						<h2 className="display-4">Welcome, {user.firstName}</h2>
						<h4 className="mt-5 mb-2">Update Your Profile</h4>
						<div className="card mt-2">
							<div className="card-body">
								<p><strong>First Name :</strong> {user.firstName}</p>
								<p><strong>Last Name :</strong> {user.lastName}</p>
								<form>
									<div className="form-group">
										<label><strong>Upload Your Display Picture</strong></label>
										<input
											type="file"
											className="form-control-file"
											onChange={this.onChange}
											value={this.state.fileValue}
										/>
									</div>
									<div>
										<button
											className="btn btn-sm btn-success"
											onClick={this.uploadFile}
											disabled
										>Upload</button>
										{loading && <span className="ml-2 text-info">Uploading...</span>}
										{(uploadTask && !loading) && <span className="ml-2 text-success">Upload Successful!</span>}
									</div>
								</form>
							</div>
						</div>
						<h4 className="mt-5">Manage Your Projects</h4>
						<ProjectList projects={projects} />

					</div>
				) : ( user === undefined ? (
						<Redirect to="/" />
					) : (
						<div className="col-md-12">
							<p>Loading Profile...</p>
						</div>
					)
				)
				}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const uid = ownProps.match.params.id;
	const users = state.firestore.data.users;
	const user = users ? users[uid] : null
	return {
		user,
		auth: state.firebase.auth,
		projects: state.firestore.ordered.projects,
		loading: state.profile.loading,
		uploadTask: state.profile.uploadTask
	}
}

export default compose(
	connect(mapStateToProps, {uploadSelectedFile}),
	firestoreConnect(props => [
		{
			collection: 'users'
		},
		{
			collection: 'projects',
			where: ['authorId', '==', props.match.params.id]
		}
	])
)(Profile);
