import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to='/'>Nonprofits</Link>
                    <a class="nav-link" href="#">About</a>
                    <a class="nav-link" href="#">Categories</a>

                </nav>
            </div>
        )
    }
}

export default NavBar