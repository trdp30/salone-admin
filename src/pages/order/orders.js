import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrders } from '../../store/actions/order.action';
import AddressDetails from '../../components/address-details';

function Orders(props) {
  const { orderModel } = props
  useEffect(() => {
    if(!orderModel.request.isLoading && !orderModel.request.error) {
      props.getOrders()
    }
  }, [])

  return (
    <ol>
      {!props.orderModel.request.isLoading && props.orderModel.data.allIds && props.orderModel.data.allIds.length &&
        props.orderModel.data.allIds.map((orderId) => (
          <li key={orderId}>
            <Link to={`/order/${orderId}/details`}>
              {props.orderModel.data.byId[orderId] && <AddressDetails address_id={props.orderModel.data.byId[orderId].address_id} />}
            </Link>
          </li>
        ))}
    </ol>
  )
}

const mapStateToProps = state => ({
  orderModel: state.order
})

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(fetchOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)