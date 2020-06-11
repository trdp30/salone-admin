import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { findCategory } from '../../store/actions/category.action';
import { getRecord } from '../../store/selectors/index.selector';

function CategoryDetails(props) {
  const { currentCategory, categoryModel, getCategoryById, match } = props

  useEffect(() => {
    if(!categoryModel.isLoading && !categoryModel.error && !categoryModel.data.result) {
      getCategoryById(match.params.category_id)
    }
  })

  return (
    <div>{currentCategory.name}</div>
  )
}

const mapStateToProps = (state, { match } ) => ({
  categoryModel: state.category,
  currentCategory: getRecord(state.category.data.entities, 'category', match.params.category_id)
})

const mapDispatchToProps = dispatch => ({
  getCategoryById: (id) => dispatch(findCategory(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetails)