import { DASHBOARD_REQUEST_INITIATED,   DASHBOARD_REQUEST_SUCCEED,  DASHBOARD_REQUEST_FAILED } from '../action-type';
import { query } from '../async-actions';
import { countSchema } from '../schemas/index.schema'
import { actionInitiated, catchReduxError, normalizedData, actionSucceed } from './general.action';

export const findDashboardCount = () => {
  return function(dispatch) {
    dispatch(actionInitiated(DASHBOARD_REQUEST_INITIATED))
    return query('dashboard')
    .then((response) => dispatch(actionSucceed(DASHBOARD_REQUEST_SUCCEED, response)))
    .catch((e) => dispatch(catchReduxError(DASHBOARD_REQUEST_FAILED, e)))
  }
}