import React, {Component} from 'react'
import {connect} from 'react-redux'

class Nonprofit extends Component {

    render(){

        const nonprofit = this.props

        return(
            <div>
                <h2>{nonprofit.name}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        nonprofits: state.nonprofitReducer.nonprofits
    }
}

export default connect(mapStateToProps)(Nonprofit)