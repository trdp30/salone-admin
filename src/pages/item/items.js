import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../store/actions/item.action';
import { Link } from 'react-router-dom';

function Items(props) {
  useEffect(() => {
    props.getItems()
  }, [])

  return (
    <ol>
      {!props.itemModel.isLoading && props.itemModel.data.result && props.itemModel.data.result.length &&
        props.itemModel.data.result.map((itemId) => (
          <li key={itemId}>
            <Link to={`/item/${itemId}/details`}>
              {props.itemModel.data.entities.item[itemId].name}
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