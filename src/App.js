import React, {Component} from 'react';
import './App.css';
import CategoryContainer from './containers/CategoryContainer';
//import CategoryForm from './containers/CategoryForm';
import NonprofitContainer from './containers/NonprofitContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home';


class App extends Component {

  render(){

    return (
      <div className="App ">
        <NavBar />
        <Home />
        <Router>
          <div >
            <Router exact path='/' component={Home} />
            <CategoryContainer />
            <hr/>
            <NonprofitContainer />
          </div>
        </Router>
      </div>
    )
  }
}
 
export default App;
