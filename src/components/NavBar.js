import React, {Component} from 'react'
//import { Link } from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">PROJECT NONPROFIT</a>
                </div>
            </nav>
        )
    }
}

export default NavBar