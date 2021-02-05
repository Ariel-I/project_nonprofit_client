import React from 'react'
//import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Nonprofit = (props) => {

    return(
        <div>
            <Link to={`/categories/${props.category_id}`}>{props.nonprofit.name}</Link>
        </div>
    )
}

export default Nonprofit