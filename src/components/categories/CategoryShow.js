import React from 'react'
import {Link} from 'react-router-dom'

const CategoryShow = (props) => {

    return(
        <div key={props.nonprofit.id}>
          <div className="container">
                <ul>
                    <li>
                        <Link to={`/nonprofits/${props.nonprofit.id}`}>{props.nonprofit.name}</Link>
                    </li>
                </ul>
          </div>
        </div>
    ) 
}

export default CategoryShow