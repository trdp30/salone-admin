import environment from './base';

const API_ROOT = 'https://homswag.herokuapp.com/api/v1';
const env = environment(API_ROOT, 'staging');

export default {
	...env,
	isProduction: false,
	isDevelopment: false,
	isStaging: true
};