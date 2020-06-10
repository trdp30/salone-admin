import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { findItem } from '../../store/actions/item.action';
import { getRecord } from '../../store/selectors/index.selector';

function ItemDetails(props) {
  const { currentItem, itemModel, getItemById, match } = props

  useEffect(() => {
    if(!itemModel.isLoading && !itemModel.error && !itemModel.data.result) {
      getItemById(match.params.category_id)
    }
  })

  return (
    <div>{currentItem.name}</div>
  )
}

const mapStateToProps = (state, { match } ) => {
  return {
    itemModel: state.item,
    currentItem: getRecord(state.item.data.entities, 'item', match.params.item_id)
  }
}

const mapDispatchToProps = dispatch => ({
  getItemById: (id) => dispatch(findItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)