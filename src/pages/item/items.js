import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../store/actions/item.action';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading';

function Items(props) {
  useEffect(() => {
    props.getItems()
  }, [])

  return (
    <>
      {!props.itemModel.isLoading  ? 
        (
          <div className="desktop-list" style={{marginTop : '24px', fontSize : '12px'}}>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Logo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Price</th>
                    <th scope="col">MRP</th>
                  </tr>
                </thead>
                <tbody>
                {!props.itemModel.isLoading && props.itemModel.data.result && props.itemModel.data.result.length &&
                  props.itemModel.data.result.map((itemId) => (
                    <tr>
                      <td>
                        <img src={props.itemModel.data.entities.items[itemId].image_source} alt="Avatar" style={{height : '23px', width : '31px'}}/>
                      </td>
                      <td>{props.itemModel.data.entities.items[itemId].name}</td>
                      <td>{props.itemModel.data.entities.items[itemId].description}</td>
                      <td>{props.itemModel.data.entities.items[itemId].duration}</td>
                      <td>{props.itemModel.data.entities.items[itemId].price}</td>
                      <td>{props.itemModel.data.entities.items[itemId].mrp_price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) :
        <Loading/>
      }
    </>
  )
}

const mapStateToProps = state => ({
  itemModel: state.item
})

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(fetchItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)