import React, {Component} from 'react';
import './App.css';
import CategoryContainer from './containers/CategoryContainer';

class App extends Component {

  render(){

    return (
      <div className="App ">
        <h1>Nonprofit Organizations</h1>
        <hr/>
        <CategoryContainer />
        
      </div>
    )
  }
}
 
export default App;
