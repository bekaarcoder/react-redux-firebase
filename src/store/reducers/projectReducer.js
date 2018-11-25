import {CREATE_PROJECT} from '../actions/types';

const initialState = {
	projects: [
		{
			id: 1,
			title: "Project 1",
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolorum aperiam labore alias, expedita corrupti vero iusto dolor illo, quaerat similique saepe, facere architecto voluptatum rerum nobis. Odio, cumque, aperiam!"
		},
		{
			id: 2,
			title: "Project 2",
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolorum aperiam labore alias, expedita corrupti vero iusto dolor illo, quaerat similique saepe, facere architecto voluptatum rerum nobis. Odio, cumque, aperiam!"
		},
		{
			id: 3,
			title: "Project 3",
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, dolorum aperiam labore alias, expedita corrupti vero iusto dolor illo, quaerat similique saepe, facere architecto voluptatum rerum nobis. Odio, cumque, aperiam!"
		}
	]
}

const projectReducer = (state = initialState, action) => {
	switch(action.type) {
		case CREATE_PROJECT:
			console.log('created project', action.payload);
			return state;
		default:
			return state;
	}
}

export default projectReducer;