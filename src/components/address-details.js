import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchAddress } from '../store/actions/address.action';

function AddressDetails(props) {
  const { getAddressById, value } = props
  const [ currentAddress, setAddress ] = useState()
  const [ isLoading, setLoading ] = useState(true)

  useEffect(() => {
    // if(value && addressModel.data && addressModel.data.allIds && addressModel.data.allIds.length && includes(addressModel.data.allIds, value)) {
    //   setAddress(addressModel.data.byId[value])
    // } else if(!addressModel.request.isLoading && !addressModel.request.error) {
    //   getAddressById(value)
    // }
    if(value) {
      async function init() {
        let res = await getAddressById(value)
        setAddress(res.payload.entities.address[value])
        setLoading(false)
      }
      init()
    }
  }, [])

  // if(value == 185) {
  //   console.log(value)
  // }
  if(isLoading) {
    return <div>Loading..</div>
  }
  return (
    <>
      { currentAddress && currentAddress.address && currentAddress.address.formatedAddress}
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  getAddressById: (id) => dispatch(fetchAddress(id))
})

export default connect(null, mapDispatchToProps)(AddressDetails)