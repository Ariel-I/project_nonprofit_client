import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                   <a className="navbar-brand"><Link to='/'>PROJECT NONPROFIT</Link> </a> 
                </div>
            </nav>
            </div>
        )
    }
}

export default NavBar