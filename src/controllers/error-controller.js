import { toast } from 'react-toastify';
// import * as Sentry from '@sentry/browser';

export const toastError = (e) => {
	if(e && e.errors && Array.isArray(e.errors) && e.errors.length) {
		e.errors.forEach(error => {
			if(error && error.message) {
				toast.error(error.message)
			} else {
				toast.error(error)
			}
		});
	} else if(e && e.message) {
		if(e && e.message) {
			toast.error(e.message)
		} else {
			toast.error(e)
		}
	} else {
		toast.error("Try again, Something went wrong")
	}
	// Sentry.captureException(e)
}