import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { findItem } from '../../store/actions/item.action';
import { getRecord } from '../../store/selectors/index.selector';

function ItemDetails(props) {
	const { currentItem, itemModel, getItemById, match } = props

	useEffect(() => {
		if(!itemModel.request.isLoading && !itemModel.request.error && itemModel.data.allIds && !itemModel.data.allIds.length) {
			getItemById(match.params.item_id)
		}
	}, [])

	return (
		<div>{currentItem.name}</div>
	)
}

const mapStateToProps = (state, { match } ) => ({
	itemModel: state.item,
	currentItem: getRecord(state.item.data, match.params.item_id)
})

const mapDispatchToProps = dispatch => ({
	getItemById: (id) => dispatch(findItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)