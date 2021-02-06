import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCategories} from '../actions/categories'
import CategoryList from '../components/categories/CategoryList'
import CategoryForm from '../containers/CategoryForm'


class CategoryContainer extends Component {

    componentDidMount(){
        this.props.getCategories()
    }

    render(){
      
        const categoryList = this.props.categories.map( (ct) => <CategoryList key={ct.id} category={ct}/>)
       
        return(
            <div className="container">
                <h2>Choose A Category: </h2>
                    {categoryList}
                <h3>Add A New Category:</h3>
                    <CategoryForm/>
                </div>    
        )
    }
}

const mapStateToProps = state => {
    return {
      categories: state.categoryReducer.categories,
      loading: state.categoryReducer.loading
    }
}

export default connect(mapStateToProps, {getCategories})(CategoryContainer)