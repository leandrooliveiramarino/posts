import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=leandromarino'

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	return {
		type: FETCH_POSTS,
		payload: request
	}
}

export function createPost(values, callBack) {
	return axios
		.post(`${ROOT_URL}/posts${API_KEY}`, values)
		.then((data) => {
			callBack();
			return {
				type: CREATE_POST,
				payload: data
			};
		});
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return {
		type: FETCH_POST,
		payload: request
	}
}

export function deletePost(id, callBack) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(() => {
		callBack();
	});
	return {
		type: DELETE_POST,
		payload: id
	}
}