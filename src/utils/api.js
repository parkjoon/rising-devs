import axios from 'axios';

export function getJobPosts() {
	return axios.get('http://localhost:3001/api/jobs');
}

export function updateProfile(data) {
	return axios.post('http://localhost:3001/api/profile/update', data);
}
