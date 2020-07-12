import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecord } from "../../store/selectors/index.selector";
import { findOrder } from "../../store/actions/order.action";

function ItemDetails(props) {
  const { currentOrder, itemModel, getItemById, match, orderModel } = props;

  useEffect(() => {
    if (
      !orderModel.request.isLoading &&
      !orderModel.request.error &&
      orderModel.data.allIds &&
      !orderModel.data.allIds.length
    ) {
      getItemById(match.params.order_id);
    }
  }, []);

  return <div>{currentOrder.address_id}</div>;
}

const mapStateToProps = (state, { match }) => ({
  itemModel: state.item,
  userModel: state.user,
  addressModel: state.address,
  appointmentModel: state.appointment,
  cartItemModel: state.cartItem,
  orderModel: state.order,
  currentOrder: getRecord(state.order.data, match.params.order_id),
});

const mapDispatchToProps = (dispatch) => ({
  getItemById: (id) => dispatch(findOrder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
