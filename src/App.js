import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {

  render(){

    const nonprofitCards = this.props.categories.map(category => <li key={category.id}>{category.name}</li>)

    return (
      <div className="App ">
        <h1>Nonprofit Organizations</h1>
        <hr/>
        <h2>Categories: -select box here-</h2>
        <h3>{nonprofitCards}</h3>
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
 
export default connect(mapStateToProps)(App);
