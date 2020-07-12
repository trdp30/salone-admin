import { ITEMS_REQUEST_INITIATED, ITEMS_REQUEST_SUCCEED, ITEMS_REQUEST_FAILED } from '../action-type';
import { combineReducers } from 'redux';
import { getAllIds, getById } from './extract_id.reducer';

const initialState = {
	isLoading: false,
	error: null
}

const request = (state=initialState, action) => {
	switch(action.type) {
	case ITEMS_REQUEST_INITIATED: {
		return {
			...state,
			isLoading: true,
			error: null
		}
	}
	case ITEMS_REQUEST_SUCCEED: {
		return {
			...state,
			isLoading: false,
			error: null
		}
	}
	case ITEMS_REQUEST_FAILED: {
		return {
			...state,
			isLoading: false,
			error: action.error
		}
	}
	default: return state;
	}
}

const dataReducer = combineReducers({
	byId: getById('items'),
	allIds: getAllIds('items')
})

const itemReducer = combineReducers({
	request,
	data: dataReducer
})

export default itemReducer;