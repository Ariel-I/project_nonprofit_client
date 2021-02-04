import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getCategories} from '../actions/categories'

class CategoryContainer extends Component {

    componentDidMount(){
        this.props.getCategories()
    }

    render(){
        const { categories } = this.props;

        const categorySelect = categories.map(category => {
            return (
                <div key={category.id}>
                    <li><Link to={`/categories/${category.id}/nonprofits`}>{category.name}</Link></li>
                </div>
            )
        })
       

        return(
            <div>
                <h2>Choose A Category: </h2>
                    <ul>
                    {categorySelect}
                    </ul>
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