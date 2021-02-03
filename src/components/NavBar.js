import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-light" style={{background: '#fc45dd' }}>
                    <Link to='/'>Home</Link>
                </nav>
            </div>
        )
    }
}

export default NavBar