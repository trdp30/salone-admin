import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { findUser } from '../../store/actions/user.action';

function UserDetails(props) {
  const { value, fetchUser } = props
  const [ isLoading, setLoading ] = useState(true)
  const [ user, setUser ] = useState({})

  useEffect(() => {
    if(value) {
      async function init() {
        let res  = await fetchUser(value)
        setUser(res.payload.entities.users[value])
        setLoading(false)
      }
      init()
    }
  }, [])

  if(isLoading && !Object.keys(user).length) {
    return <span>Loading..</span>
  }
  return (
    <span>{ user && user.name}</span>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(findUser(id))
})

export default connect(null, mapDispatchToProps)(UserDetails)