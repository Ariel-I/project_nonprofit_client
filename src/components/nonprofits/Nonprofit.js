import React, {Component} from 'react'
import {connect} from 'react-redux'

class Nonprofit extends Component {

    render(){

        const np = this.props.nonprofits.map(np => {
            <li key={np.id}>{np.name}</li>
        })

        return(
            <div>
                <p>render specific nonprofit page here</p>
                {np}
                
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