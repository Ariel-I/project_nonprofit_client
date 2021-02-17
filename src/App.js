import React, {Component} from 'react';
import './App.css';
import NonprofitContainer from './containers/NonprofitContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Category from './components/categories/Category'
import Nonprofit from './components/nonprofits/Nonprofit'
import CategoryContainer from './containers/CategoryContainer'
import { connect } from 'react-redux';
import {getCategories} from './actions/categories'
import {getNonprofits} from './actions/nonprofits'

class App extends Component {

  componentDidMount(){
    this.props.getCategories();
    this.props.getNonprofits();
  } 


  render(){

    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/categories" component={CategoryContainer}/>
            <Route exact path="/categories/:category_id/nonprofits" component={Category} />
            <Route exact path="/nonprofits" component={NonprofitContainer} />
            <Route exact path="/nonprofits/:id" component={Nonprofit} />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categoryReducer.categories,
    nonprofits: state.nonprofitReducer.nonprofits
  }
}
 
export default connect(mapStateToProps, {getCategories, getNonprofits})(App)
