import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../store/actions/category.action';
import { Link } from 'react-router-dom';

function Categories(props) {

  useEffect(() => {
    props.getCategories()
  }, [])

  console.log(props.categoryModel.data)

  return (
    <ol>
      {props.categoryModel && props.categoryModel.data && props.categoryModel.data.result && props.categoryModel.data.result.length &&
        props.categoryModel.data.result.map((categoryID) => (
          <li key={categoryID}>
            <Link to={`/category/${categoryID}/details`}>
              {props.categoryModel.data.entities.category[categoryID].name}
            </Link>
          </li>
        ))}
    </ol>
  )
}

const mapStateToProps = state => ({
  categoryModel: state.category
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
})
export default connect(mapStateToProps, mapDispatchToProps)(Categories)