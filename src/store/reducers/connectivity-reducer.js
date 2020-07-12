import { NETWORK_AVAIABLE, NETWORK_UNAVAIABLE } from '../action-type';

export default function connectivityReducer(state={isOffline:false}, action) {
	switch (action.type) {
	case NETWORK_AVAIABLE: {
		return {
			...state,
			isOffline: false
		}
	}
	case NETWORK_UNAVAIABLE: {
		return {
			...state,
			isOffline: true
		}
	}
	default: return state;
	}
}