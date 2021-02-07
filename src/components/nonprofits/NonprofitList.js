import React from 'react'
// import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const NonprofitList = (props) => {
    
   return(
            <div className="card-group" >
              <div className="card" style={{width: '18rem'}}>
                <div className="card-header" >
                    <Link to={`/nonprofits/${props.nonprofit.id}`}>{props.nonprofit.name}</Link>
                </div>
                  <img className="card-img-top" src={props.nonprofit.image}  />
                  <hr/>
                  <div className="card-body">
                      <p className="card-text">{props.nonprofit.description}</p>
                  </div>
                  <div className="card-footer">
                      <small className="text-muted">Location: {props.nonprofit.location}</small>
                  </div>
              </div>
            </div>
        
    )
        
    

}

// const mapStateToProps = state => {
//     return{
//         nonprofits: state.categoryReducer.nonprofits
//     }
// }

export default NonprofitList