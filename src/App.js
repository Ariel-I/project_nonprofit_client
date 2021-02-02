import React, {Component} from 'react';
import './App.css';
import CategoryContainer from './containers/CategoryContainer';
import NonprofitContainer from './containers/NonprofitContainer';

class App extends Component {

  render(){

    return (
      <div className="App ">
        <h1>Nonprofit Organizations</h1>
        <hr/>
        <CategoryContainer />
        <NonprofitContainer />
        
      </div>
    )
  }
}
 
export default App;
