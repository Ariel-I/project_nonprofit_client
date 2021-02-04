import React, {Component} from 'react'
import {connect} from 'react-redux'

class Nonprofit extends Component {

    render(){

        const id = this.props.match.params.id 
        
        let nonprofit = this.props.nonprofits.filter(np => np.id === parseInt(id))
        console.log(nonprofit)

        return(
            <div>
                <h2>{nonprofit.name}hi</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        nonprofits: state.categoryReducer.nonprofits,
    }
}

export default connect(mapStateToProps)(Nonprofit)