import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/actions/user.action';

function Items(props) {
	const { userModel } = props

	useEffect(() => {
		if(!userModel.request.isLoading && !userModel.request.error) {
			props.getUsers()
		}
	}, [])

	return (
		<ol>
			{!props.userModel.isLoading && props.userModel.data.allIds && props.userModel.data.allIds.length &&
        props.userModel.data.allIds.map((userId) => (
				<li key={userId}>
					{props.userModel.data.byId[userId] && props.userModel.data.byId[userId].name}
				</li>
        ))}
		</ol>
	)
}

const mapStateToProps = state => ({
	userModel: state.user
})

const mapDispatchToProps = dispatch => ({
	getUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)