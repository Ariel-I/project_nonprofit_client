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

class App extends Component {

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
 
export default App;
