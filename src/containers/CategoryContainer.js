import React, {Component} from 'react'
//import {BrowserRouter as Router, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCategories} from '../actions/categories'
import CategoryList from '../components/categories/CategoryList'

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