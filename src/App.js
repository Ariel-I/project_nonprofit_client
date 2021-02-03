import React, {Component} from 'react';
import './App.css';
import CategoryContainer from './containers/CategoryContainer';
//import CategoryForm from './containers/CategoryForm';
import NonprofitContainer from './containers/NonprofitContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';
import Category from './components/categories/Category'


class App extends Component {

  render(){

    return (
      <div className="App ">
        <Router>
          <NavBar />
          
          <div >
            <Route exact path='/' component={Home} />
            
            <Route exact path="/categories/:id/nonprofits" component={Category} />
            <Route exact path="/categories/:id/nonprofits/:id" component={NonprofitContainer} />
            <hr/>
            
          </div>
        </Router>
      </div>
    )
  }
}
 
export default App;
