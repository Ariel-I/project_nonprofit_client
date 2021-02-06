import React, { Component } from 'react'
import {connect} from 'react-redux'

class Nonprofit extends Component {
    render(){

        const nonprofit = this.props.nonprofits.find(np => `${np.id}` === this.props.match.params.id)

        return(
            <div className="card-group" >
            <div className="card" style={{width: '18rem'}}>
                <div className="card-header" >
                    {nonprofit.name}
                </div>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <hr/>
                <div className="card-body">
                    <p className="card-text">{nonprofit.description}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Location: {nonprofit.location}</small>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        nonprofits: state.categoryReducer.nonprofits
    }
}

export default connect(mapStateToProps)(Nonprofit)