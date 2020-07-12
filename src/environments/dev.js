import environment from './base';

const API_ROOT = 'https://homswag.herokuapp.com/api/v1';
const env = environment(API_ROOT, 'development');

export default {
	...env,
	isProduction: false,
	isDevelopment: true,
	isStaging: false
};