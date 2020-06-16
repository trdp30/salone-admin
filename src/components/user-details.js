import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { findUser } from '../store/actions/user.action';

function UserDetails(props) {
  const { userModel, getUserById, user_id } = props

  useEffect(() => {
    if(!userModel.request.isLoading && !userModel.request.error && userModel.data.allIds && !userModel.data.allIds.length) {
      getUserById(user_id)
    }
  }, [])

  return (
    <>
      {userModel.request.isLoading ? (<div>Loading..</div>) : (<div>{userModel.data && userModel.data.byId && userModel.data.byId[user_id] && userModel.data.byId[user_id].name}</div>)}
    </>
  )
}

const mapStateToProps = (state) => ({
  userModel: state.user,
})

const mapDispatchToProps = dispatch => ({
  getUserById: (id) => dispatch(findUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)