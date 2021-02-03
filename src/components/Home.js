import React, {Component} from 'react'
import CategoryContainer from '../containers/CategoryContainer'

class Home extends Component {
    render(){
        return(
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Welcom to Project Nonprofit</h1>
                    <p className="lead">There are roughly 5.6 million nonprofit organizations operating all over the globe. Project Nonprofit is here narrow down some of the worlds most popular organizations. Are you ready to explore? </p>
                </div> 
            </div>
            
            
        )
    }

}

export default Home