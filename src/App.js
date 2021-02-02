import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getCategories} from './actions/categories'
import CategoryForm from './containers/CategoryForm'

class App extends Component {

  componentDidMount(){
    this.props.getCategories()
  }

  render(){

    const nonprofitCards = this.props.categories.map(category => <option key={category.id}>{category.name}</option>)

    return (
      <div className="App ">
        <h1>Nonprofit Organizations</h1>
        <hr/>
        <label for="categories"><h2>Choose A Category: </h2></label>
        <select name="categories"> {nonprofitCards}</select> 
        <br/><br/>
        <button onClick={ () => {return(<CategoryForm/>)}}> Add New Category </button>
        <br/><br/>
        
        <ul></ul>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("I am the state", state)
  return {
    categories: state.categoryReducer.categories,
    loading: state.categoryReducer.loading
  }
}
 
export default connect(mapStateToProps, {getCategories})(App);
