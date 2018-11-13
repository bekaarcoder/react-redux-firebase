import React, {Component} from 'react';

import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';

class Dashboard extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12 mt-4">
					<h2>Dashboard</h2>
					<div className="row mt-4">
						<div className="col-md-7">
							<ProjectList />
						</div>
						<div className="col-md-5">
							<Notifications />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard;