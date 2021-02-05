import React from 'react'
import {Link} from 'react-router-dom'


const CategoryList = (props) => {
    //console.log(props)
    return(
        <div className="card bg-dark text-white" >
            <img className="card-img" src='https://www.andreajenkyns.co.uk/sites/www.andreajenkyns.co.uk/files/styles/gallery_large/public/2019-01/OPTT.png?itok=iO21t4Bp' />
            <div className="card-img-overlay">
                <h5 className="card-title">
                    <Link to={`/categories/${props.category.id}/nonprofits`}>{props.category.name}</Link>
                </h5>
            </div>
        </div>
    )
}

export default CategoryList