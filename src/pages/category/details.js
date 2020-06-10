import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { findCategory } from '../../store/actions/category.action';

function CategoryDetails(props) {
  console.log(props)
  const { currentCategory, categoryModel, getCategotyById, match } = props

  useEffect(() => {
    debugger
    if(!categoryModel.isLoading && !categoryModel.error && !categoryModel.data.result) {
      getCategotyById(match.params.category_id)
    }
  })

  return (
    <div>{currentCategory.name}</div>
  )
}

const mapStateToProps = (state, { match } ) => {
  return {
    categoryModel: state.category,
    currentCategory: getCategory(state.category.data.entities, match.params.category_id)
  }
}

const mapDispatchToProps = dispatch => ({
  getCategotyById: (id) => dispatch(findCategory(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryDetails))

const getCategory = (categories, category_id) => {
  if(categories && categories.category && category_id) {
    return categories.category[category_id]
  } else {
    return {}
  }
}