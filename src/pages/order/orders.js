import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrders } from '../../store/actions/order.action';
import AddressDetails from '../../components/address-details';
import ListView from '../../components/list-view';
import UserDetails from '../../components/helpers/user-details';

const columns = [
  { valuePath: "id",
    label: "A. No",
    width: 80
  },
  { valuePath: "user_id",
    label: "Customer Name",
    width: 200,
    component: UserDetails,
    isSortable: true,
    sortKey: 'user_name'
  },
  { valuePath: "cartItems",
    label: "Items",
    width: 260
  },
  { valuePath: "created_at",
    label: "Appointment Placed on",
    width: 250
  },
  { valuePath: "appointment.from",
    label: "Appointment Placed for",
    width: 250
  },
  { valuePath: "confirm_from",
    label: "Appointment Confirm for",
    width: 250
  },
  { valuePath: "total_paid",
    label: "Total Paid",
    width: 150
  },
  { valuePath: "formatedStatus",
    label: "Status",
    width: 250
  },
  { valuePath: "address_id",
    label: "Address",
    width: 300,
    component: AddressDetails
  },
  { valuePath: "device.osName",
    label: "Device",
    width: 100
  },
];

function Orders(props) {
  const { orderModel, getOrders } = props

  return (
    <ListView 
      data={orderModel}
      fetchData={getOrders}
      columns={columns}
    />
  )
}

const mapStateToProps = state => ({
  orderModel: state.order
})

const mapDispatchToProps = dispatch => ({
  getOrders: (query) => dispatch(fetchOrders(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)