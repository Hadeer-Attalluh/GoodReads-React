import axios from 'axios';
const BackendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';

////Get authors List
export const getauthorsList = () => {
	return axios.get(`${BackendUrl}/api/authors`, {
		// headers: {
		// 	authorization: `Bearer ${this.localStorage.getItem('token')}`
		// }
	})
		.then(res =>
			res.data
		)
		.catch(err => err)
}


//Get author details
export const getauthorDetails = async (id) => {
	return await axios.get(`${BackendUrl}/api/authors/${id}`, {
		// headers: {
		// 	authorization: `Bearer ${this.localStorage.getItem('token')}`
		// }id
	})
		.then(res =>
			res.data
		)
		.catch(err => err)
}
//Get author books
export const getauthorbooks = async (id) => {
	return await axios.get(`${BackendUrl}/api/authors/${id}/books`, {
		// headers: {
		// 	authorization: `Bearer ${this.localStorage.getItem('token')}`
		// }id
	})
		.then(res =>
			res.data
		)
		.catch(err => err)
}