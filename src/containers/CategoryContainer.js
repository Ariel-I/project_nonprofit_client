import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getCategories} from '../actions/categories'
import CategoryForm from '../containers/CategoryForm'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

class CategoryContainer extends Component {

    componentDidMount(){
        this.props.getCategories()
    }

    render(){

        const categorySelect = this.props.categories.map(category => 
           <a><Link to='/categories/:id/nonprofits' key={category.id}>{category.name}</Link></a> )

        return (
            <div>
                <h2>Choose A Category: </h2>
                <Router>
                <ul>
                    {categorySelect}
                </ul>
                <br/><br/>
               
                </Router>
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