import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getCategories} from '../actions/categories'
import CategoryForm from '../containers/CategoryForm'

class CategoryContainer extends Component {

    componentDidMount(){
        this.props.getCategories()
    }

    render(){

        const categorySelect = this.props.categories.map(category => <option key={category.id}>{category.name}</option>)

        return (
            <div>
                <label htmlFor="categories"><h2>Choose A Category: </h2></label>
                <select name="categories"> {categorySelect}</select>
                <br/><br/>
                <CategoryForm />
            </div>
        )
        
    }

}

const mapStateToProps = state => {
    //console.log("I am the state", state)
    return {
      categories: state.categoryReducer.categories,
      loading: state.categoryReducer.loading
    }
}

export default connect(mapStateToProps, {getCategories})(CategoryContainer)