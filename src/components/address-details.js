import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRecord } from '../store/selectors/index.selector';
import { fetchAddress } from '../store/actions/address.action';
import { includes } from 'lodash';

function AddressDetails(props) {
  const { addressModel, getAddressById, address_id } = props
  const [ currentAddress, setAddress ] = useState()

  useEffect(() => {
    if(address_id && addressModel.data && addressModel.data.allIds && addressModel.data.allIds.length && includes(addressModel.data.allIds, address_id)) {
      setAddress(addressModel.data.byId[address_id])
    } else if(!addressModel.request.isLoading && !addressModel.request.error) {
      getAddressById(address_id)
    }
  }, [])

  return (
    <>
      { addressModel.data && addressModel.data.allIds && addressModel.data.allIds.length && addressModel.data.byId[address_id] && addressModel.data.byId[address_id].address.formatedAddress}
    </>
  )
}

const mapStateToProps = (state) => ({
  addressModel: state.address,
})

const mapDispatchToProps = dispatch => ({
  getAddressById: (id) => dispatch(fetchAddress(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressDetails)