import React, { Component } from 'react'
import {connect} from 'react-redux'
import NonprofitBanner from './NonprofitBanner'

class Nonprofit extends Component {
    render(){

        const nonprofit = this.props.nonprofits.find(np => `${np.id}` === this.props.match.params.id)

        return(
            <div>
                <NonprofitBanner nonprofit={nonprofit}/>
                <hr/>
                <div className="container">
                    <div className="card-group" >
                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-header" >
                                Location: {nonprofit.location}
                            </div>
                            <img className="card-img-top" src={nonprofit.image} />
                            <hr/>
                            <div className="card-body">
                                <p className="card-text">Bio: {nonprofit.description}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">{nonprofit.link}</small>
                            </div>
                        </div>
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