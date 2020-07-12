import axios from 'axios';
// import environment from 'environment';

// const host = environment.API_ROOT;
const host = "https://homswag.herokuapp.com/api/v1";

const axiosInstance = axios.create({
	baseURL: host
});

const createErrorObject = (error, message="Something went wrong") => {
	return {
		error: error,
		message: message
	}
}

export const initializeAxiosHeader = (token) => {
	try {
		if(token) {
			axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		}
	} 
	catch (e) {
		return createErrorObject(e, "Header not added")
	}
}

export const removeAxiosHeader = () => {
	return delete axiosInstance.defaults.headers.common["Authorization"];
}

//GET Calls
export function findAll(type) {
	let url = `/${type}`;
	return getRecord(url)
}

export function findRecord(type, id) {
	let url = `/${type}`;
	if(!id) {
		throw new Error("'id' not provided")
	} else {
		url = `${url}/${id}`
	}
	return getRecord(url)
}

//Making GET call
async function getRecord(url) {
	return await axiosInstance.get(url)
}

//Making Query request call
export async function query(type, query={}) {
	let url = `/${type}`;
	if(!query) {
		throw new Error("'query' not available")
	}
	return await axiosInstance.get(url, { params: query })
}

//POST Calls
export async function createRecord(type, payload={}) {
	if(!type) {
		throw new Error("'type' not provided")
	}
	return axiosInstance.post(type, payload)
}

//PUT Calls
export function updateRecord(type, id, payload={}) {
	let url;
	if(!type) {
		throw new Error("'type' not provided")
	} else if(!id) {
		throw new Error("'id' not provided")
	}

	url = `${type}/${id}`
	return axiosInstance.put(url, payload)
}
