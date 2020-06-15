import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { findCategory } from '../../store/actions/category.action';
import { getRecord } from '../../store/selectors/index.selector';
import Loading from '../../components/loading';

function CategoryDetails(props) {
  const { currentCategory, categoryModel, getCategoryById, match } = props
  const [ showList, toogleListView ] = useState(false)
  const [ showSubCategory, toogleSubCategoryView ] = useState(false)
  

  useEffect(() => {
    if(!categoryModel.isLoading && !categoryModel.error && !categoryModel.data.result) {
      getCategoryById(match.params.category_id)
    }
  })

  const toogleList = () => {
    if(showList) {
      toogleListView(false)
    } else {
      toogleListView(true)
      toogleSubCategoryView(false)
    }
  }


  const toogleSubCategory = () => {
    if(showSubCategory) {
      toogleSubCategoryView(false)
    } else {
      toogleSubCategoryView(true)
      toogleListView(false)
    }
  }


console.log("Manoj", currentCategory);
  return (
    <>
      {!props.categoryModel.isLoading  ? 
      (
        <div>
          <div class="container-fluid text-center">
            <div class="container" style={{marginTop : '10px'}}>
              <div class="row justify-content-md-center">
                <div class="col-md-auto">
                  <img src={currentCategory.image_source} class="rounded-circle" alt="Category"/>
                </div>
              </div>
            <h4>{currentCategory.name}</h4>
            </div> 
            <br/><br/>
            <div class="row">
              <div class="col-sm-4">
                <h5>Category Name</h5>
                <h6>{currentCategory.name}</h6>
              </div>
              <div class="col-sm-4">
                <h5>Display Name</h5>
                <h6>{currentCategory.display_name}</h6>
              </div>
              <div class="col-sm-4">
                <h5>Has Sub Category</h5>
                <h6>{currentCategory.hasSubCategory ? 'True' : 'False'}</h6>
              </div>
            </div>
            <br/><br/>
            <div class="row">
              {currentCategory && currentCategory.items && currentCategory.items.length &&
                <div class="col-sm-4">
                  <h5>Items</h5>
                  { showList ? 
                    <button type="button" class="btn btn-info" onClick={toogleList}>Click to Close Items</button> :
                    <button type="button" class="btn btn-info" onClick={toogleList}>Click to View Items</button>
                  }
                </div>
              }
              { currentCategory.hasSubCategory && 
                <div class="col-sm-4">
                  <h5>Sub Categories</h5>
                  { showSubCategory ? 
                    <button type="button" class="btn btn-info" onClick={toogleSubCategory}>Click to Close Sub Categories</button> :
                    <button type="button" class="btn btn-info" onClick={toogleSubCategory}>Click to View Sub Categories</button>
                  }
                </div>
              }
            </div>
          </div>

          {showList && (
            <div style={{marginTop : '24px', fontSize : '12px'}}>
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
                  {currentCategory && currentCategory.items && currentCategory.items.length &&
                    currentCategory.items.map((itemId) => (
                      <tr>
                        <td>
                          <img src={categoryModel.data.entities.items[itemId].image_source} alt="Avatar" style={{height : '23px', width : '31px'}}/>
                        </td>
                        <td>{categoryModel.data.entities.items[itemId].name}</td>
                        <td>{categoryModel.data.entities.items[itemId].description}</td>
                        <td>{categoryModel.data.entities.items[itemId].duration}</td>
                        <td>{categoryModel.data.entities.items[itemId].price}</td>
                        <td>{categoryModel.data.entities.items[itemId].mrp_price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            )
          }
          {showSubCategory && (
            <div style={{marginTop : '24px', fontSize : '12px'}}>
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                  {currentCategory && currentCategory.sub_categories && currentCategory.sub_categories.length &&
                    currentCategory.sub_categories.map((sub_category) => (
                      <tr>
                        <td>{sub_category.name}</td>
                        <td>{sub_category.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            )
          }
        </div> 
      ):
        <Loading/>
      }
    </>
  )
}

const mapStateToProps = (state, { match } ) => {
  return {
    categoryModel: state.category,
    currentCategory: getRecord(state.category.data.entities, 'categories', match.params.category_id)
  }
}

const mapDispatchToProps = dispatch => ({
  getCategoryById: (id) => dispatch(findCategory(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails)