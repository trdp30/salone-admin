import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../store/actions/item.action';
import { Link } from 'react-router-dom';

function Items(props) {
  const { itemModel } = props
  useEffect(() => {
    if(!itemModel.request.isLoading && !itemModel.request.error) {
      props.getItems()
    }
  }, [])

  return (
    <ol>
      {!props.itemModel.isLoading && props.itemModel.data.allIds && props.itemModel.data.allIds.length &&
        props.itemModel.data.allIds.map((itemId) => (
          <li key={itemId}>
            <Link to={`/item/${itemId}/details`}>
              {props.itemModel.data.byId[itemId] && props.itemModel.data.byId[itemId].name}
            </Link>
          </li>
        ))}
    </ol>
  )
}

const mapStateToProps = state => ({
  itemModel: state.item
})

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(fetchItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)