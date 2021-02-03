import React, {Component} from 'react';
import './App.css';
import CategoryContainer from './containers/CategoryContainer';
//import CategoryForm from './containers/CategoryForm';
import NonprofitContainer from './containers/NonprofitContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'

class App extends Component {

  render(){

    return (
      <div className="App ">
        <NavBar />
        <h1>Nonprofit Organizations</h1>
        <hr/>
        <CategoryContainer />
        <hr/>
        <NonprofitContainer />
        
      </div>
    )
  }
}
 
export default App;
