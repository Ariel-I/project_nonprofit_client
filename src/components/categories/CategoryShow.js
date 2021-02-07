import React from 'react'

const CategoryShow = (props) => {

    return(
        <div key={props.nonprofit.id}>
          <div className="container">
            <div className="card-group" >
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-header" >
                        <h2>{props.nonprofit.name}</h2>
                    </div>
                    <img className="card-img-top" src={props.nonprofit.image} />
                    <hr/>
                    <div className="card-body">
                        <p className="card-text">Bio: {props.nonprofit.description}</p>
                        <p className="card-text">Contact: {props.nonprofit.contact_info}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{props.nonprofit.link}</small>
                    </div>
                </div>
            </div>
          </div>
        </div>
    ) 
}

export default CategoryShow