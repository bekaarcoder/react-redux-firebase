import React from 'react';

const Notifications = (props) => {
	const {notifications} = props
	return (
		<div className="card">
			<div className="card-body">
				<h5>Notifications</h5>
				<ul className="list-group list-group-flush">
					{notifications && notifications.map((item) => (
						<li className="list-group-item" key={item.id}>
							<span>{item.user}</span> <span className="text-info">{item.content}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Notifications;