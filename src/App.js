import React, {Component} from 'react';
import './App.css';
//import CategoryContainer from './containers/CategoryContainer';
//import CategoryForm from './containers/CategoryForm';
import NonprofitContainer from './containers/NonprofitContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Category from './components/categories/Category'
import Nonprofit from './components/nonprofits/Nonprofit'

class App extends Component {

  render(){

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
        </Router>
      </div>
    )
  }
}
 
export default App;
