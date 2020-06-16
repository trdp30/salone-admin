import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrders } from '../../store/actions/order.action';
import Loading from '../../components/loading';
import UserDetails from '../../components/user-details';

function Orders(props) {

  const { orderModel } = props
  useEffect(() => {
    if(!orderModel.request.isLoading && !orderModel.request.error) {
      props.getOrders()
    }
  }, [])

  return (
    // <ol>
    //   {!props.orderModel.request.isLoading && props.orderModel.data.allIds && props.orderModel.data.allIds.length &&
    //     props.orderModel.data.allIds.map((orderId) => (
    //       <li key={orderId}>
    //         <Link to={`/order/${orderId}/details`}>
    //           {props.orderModel.data.byId[orderId] && props.orderModel.data.byId[orderId].address_id}
    //         </Link>
    //       </li>
    //     ))}
    // </ol>
    <>
      {!props.orderModel.request.isLoading ? 
        (
          <div className="desktop-list" style={{marginTop : '24px', fontSize : '12px'}}>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">A.No</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Items</th>
                    <th scope="col">Placed On</th>
                    <th scope="col">Placed For</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Total Paid</th>
                    <th scope="col">Status</th>
                    <th scope="col">Device</th>
                  </tr>
                </thead>
                <tbody>
                {!props.orderModel.request.isLoading && props.orderModel.data.allIds && props.orderModel.data.allIds.length &&
                  props.orderModel.data.allIds.map((orderId) => (
                    <tr>
                      <td>{props.orderModel.data.byId[orderId].id}</td>
                      <td>
                        <UserDetails user_id={props.orderModel.data.byId[orderId].id}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) :
        <Loading/>
      }
    </>
  )
}

const mapStateToProps = state => ({
  orderModel: state.order
})

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(fetchOrders())
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)