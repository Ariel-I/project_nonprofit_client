import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getCategories} from '../actions/categories'
import CategoryForm from '../containers/CategoryForm'

class CategoryContainer extends Component {

    componentDidMount(){
        this.props.getCategories()
    }

    render(){

        const categorySelect = this.props.categories.map(category => 
            <li key={category.id}>{category.name}</li>)

        return (
            <div>
                <h2>Choose A Category: </h2>
                <ul>
                    {categorySelect}
                </ul>
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