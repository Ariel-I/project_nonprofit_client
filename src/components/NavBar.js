import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">PROJECT NONPROFIT</a>
                </div>
            </nav>
        )
    }
}

export default NavBar