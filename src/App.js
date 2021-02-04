import React, {Component} from 'react';
import './App.css';
//import CategoryForm from './containers/CategoryForm';
import NonprofitContainer from './containers/NonprofitContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home';
import {connect} from 'react-redux'
import {getCategories} from './actions/categories'
import Category from './components/categories/Category'
import Nonprofit from './components/nonprofits/Nonprofit'

class App extends Component {

  componentDidMount(){
    this.props.getCategories()
  }

  render(){

    const categorySelect = this.props.categories.map(category => 
     <li><Link to='/categories/:id/nonprofits' key={category.id}>{category.name}</Link></li>)

    return (
      <div>
        <Router>
          <NavBar />
         
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path="/categories/:id/nonprofits" component={Category} />
            <Route exact path="/categories/:id/nonprofits/:id" component={Nonprofit} />
            <Route exact path="/nonprofits" component={NonprofitContainer} />
            <hr/>
          </Switch>
          <div className="container">
            <h2>Choose A Category: </h2>
            <ul>
              {categorySelect}
            </ul>
          </div>
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

export default connect(mapStateToProps, {getCategories})(App);
