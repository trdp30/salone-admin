import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../store/actions/category.action';
import { Link } from 'react-router-dom';

function Categories(props) {
  const { categoryModel } = props

  useEffect(() => {
    if(!categoryModel.request.isLoading && !categoryModel.request.error) {
      props.getCategories()
    }
  }, [])

  return (
    // <ol>
    //   {!props.categoryModel.isLoading && props.categoryModel.data.result && props.categoryModel.data.result.length &&
    //     props.categoryModel.data.result.map((categoryID) => (
    //       <li key={categoryID}>
    //         <Link to={`/category/${categoryID}/details`}>
    //           {props.categoryModel.data.byId[categoryID].name}
    //         </Link>
    //       </li>
    //     ))}
    // </ol>

    <div className="desktop-list" style={{marginTop : '24px', fontSize : '12px'}}>
      <div className="table-responsive">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Logo</th>
              <th scope="col">Display Name</th>
              <th scope="col">Name</th>
              <th scope="col">Image Source</th>
              <th scope="col">Item Details</th>
            </tr>
          </thead>
          <tbody>
          {categoryModel.data.allIds && categoryModel.data.allIds.length &&
            categoryModel.data.allIds.map((categoryID) => (
              <tr>
                <td>
                  <img src={categoryModel.data.byId[categoryID].image_source} alt="Avatar" style={{height : '23px', width : '31px'}}/>
                </td>
                <td>{categoryModel.data.byId[categoryID].display_name}</td>
                <td>{categoryModel.data.byId[categoryID].name}</td>
                <td>{categoryModel.data.byId[categoryID].image_source}</td>
                <td>
                <Link to={`/category/${categoryID}/details`}>
                  <button type="button" class="btn btn-info btn-sm">View Item</button>
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>


  )
}

const mapStateToProps = state => ({
  categoryModel: state.category
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
})
export default connect(mapStateToProps, mapDispatchToProps)(Categories)