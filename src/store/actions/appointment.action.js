import { APPOINTMENT_REQUEST_INITIATED, APPOINTMENT_REQUEST_SUCCEED, APPOINTMENT_REQUEST_FAILED } from '../action-type';
import { query, findRecord } from '../async-actions';
import { cartItemArraySchema, cartItemSchema } from '../schemas/index.schema'
import { actionInitiated, catchReduxError, normalizedData } from './general.action';

export const fetchCartItems = () => {
	return function(dispatch) {
		dispatch(actionInitiated(APPOINTMENT_REQUEST_INITIATED))
		return query('appointment', { organization_id: 2 })
			.then((response) => dispatch(normalizedData({
				data: response,
				modelName: 'appointment',
				type: APPOINTMENT_REQUEST_SUCCEED,
				schema: cartItemArraySchema,
				relationShips: []
			})))
			.catch((e) => dispatch(catchReduxError(APPOINTMENT_REQUEST_FAILED, e)))
	}
}

export const findCartItem = (cart_item_id) => {
	return function(dispatch) {
		dispatch(actionInitiated(APPOINTMENT_REQUEST_INITIATED))
		return findRecord('appointment', cart_item_id)
			.then((response) => dispatch(normalizedData({
				data: response,
				modelName: 'appointment',
				type: APPOINTMENT_REQUEST_SUCCEED,
				schema: cartItemSchema,
				relationShips: []
			})))
			.catch((e) => dispatch(catchReduxError(APPOINTMENT_REQUEST_FAILED, e)))
	}
}