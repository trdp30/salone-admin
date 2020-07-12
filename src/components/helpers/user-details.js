import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { findUser } from '../../store/actions/user.action';
import { getUserById } from '../../store/selectors/user.selector';

function UserDetails(props) {
	const { value, fetchUser, user } = props

	useEffect(() => {
		if(value && !user) {
			fetchUser(value)
		}
	}, [user])

	if(user && !Object.keys(user).length) {
		return <span>Loading..</span>
	}
	return (
		<span>{ user && user.name}</span>
	)
}

const mapStateToProps = () => {
	const getUser = getUserById()
	return (state, ownProps) => ({
		user: getUser(state.user, ownProps.value)
	})
}

const mapDispatchToProps = (dispatch) => ({
	fetchUser: (id) => dispatch(findUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)