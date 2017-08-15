import { FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
	switch(action.type) {
		case CREATE_POST:
			var post = action.payload.data;
			return {...state, [post.id]: post};
		case DELETE_POST:
			return _.omit(state, action.payload);
		case FETCH_POST:
			var post = action.payload.data;
			return { ...state,  [post.id]: post};
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}