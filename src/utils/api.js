import axios from 'axios';

export function getJobPosts() {
	return axios.get('http://localhost:3001/api/jobs');
}
